'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaWallet, FaPlus, FaUser, FaCalendar, FaMoneyBillWave, FaArrowLeft, FaChartPie, FaTrash } from 'react-icons/fa';
import Link from 'next/link';
import { supabase } from '@/lib/supabase';

interface Expense {
  id: string;
  title: string;
  amount: number;
  paid_by: string;
  date: string;
  category: string;
  split_among: string[];
}

interface Member {
  id: string;
  name: string;
}

export default function ExpensesPage() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newExpense, setNewExpense] = useState({
    title: '',
    amount: 0,
    paid_by: '',
    category: 'Food',
    split_among: [] as string[]
  });

  const categories = ["Food", "Entertainment", "Education", "Travel", "Other"];

  useEffect(() => {
    fetchMembers();
    fetchExpenses();
  }, []);

  const fetchMembers = async () => {
    const { data, error } = await supabase
      .from('members')
      .select('id, name')
      .order('name');
    
    if (data) setMembers(data);
    if (error) console.error('Error fetching members:', error);
  };

  const fetchExpenses = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from('expenses')
      .select('*')
      .order('date', { ascending: false });
    
    if (data) {
      const expensesWithNames = await Promise.all(
        data.map(async (expense) => {
          const paidByMember = members.find(m => m.id === expense.paid_by);
          const splitMembers = expense.split_among.map((id: string) => 
            members.find(m => m.id === id)?.name || id
          );
          
          return {
            ...expense,
            paid_by: paidByMember?.name || expense.paid_by,
            split_among: splitMembers
          };
        })
      );
      setExpenses(expensesWithNames);
    }
    if (error) console.error('Error fetching expenses:', error);
    setLoading(false);
  };

  const addExpense = async () => {
    if (!newExpense.title || !newExpense.amount || !newExpense.paid_by || newExpense.split_among.length === 0) {
      alert('Please fill all fields');
      return;
    }

    const { data, error } = await supabase
      .from('expenses')
      .insert([{
        title: newExpense.title,
        amount: newExpense.amount,
        paid_by: newExpense.paid_by,
        category: newExpense.category,
        date: new Date().toISOString().split('T')[0],
        split_among: newExpense.split_among,
        created_by: newExpense.paid_by
      }])
      .select();

    if (data) {
      setNewExpense({ title: '', amount: 0, paid_by: '', category: 'Food', split_among: [] });
      setShowAddForm(false);
      fetchExpenses();
    }
    if (error) console.error('Error adding expense:', error);
  };

  const deleteExpense = async (id: string) => {
    const { error } = await supabase
      .from('expenses')
      .delete()
      .eq('id', id);

    if (!error) fetchExpenses();
  };

  const calculateBalance = () => {
    const balances: { [key: string]: number } = {};
    
    members.forEach((member) => {
      balances[member.name] = 0;
    });

    expenses.forEach((expense) => {
      const splitAmount = expense.amount / expense.split_among.length;
      
      balances[expense.paid_by] += expense.amount;
      
      expense.split_among.forEach((memberName: string) => {
        balances[memberName] -= splitAmount;
      });
    });

    return balances;
  };

  const balances = calculateBalance();
  const totalExpenses = expenses.reduce((sum, exp) => sum + exp.amount, 0);

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="fixed inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20 pointer-events-none"></div>
      
      {/* Navigation */}
      <nav className="relative z-10 bg-black/50 backdrop-blur-md border-b border-cyan-500/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <FaArrowLeft className="text-cyan-400" />
            <span className="text-xl font-bold text-white">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <FaWallet className="text-3xl text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Group Expenses
            </span>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="cyber-card text-center"
          >
            <FaMoneyBillWave className="text-4xl text-green-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-cyan-400">₹{totalExpenses}</div>
            <div className="text-gray-400 mt-2">Total Expenses</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="cyber-card text-center"
          >
            <FaChartPie className="text-4xl text-purple-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-pink-400">{expenses.length}</div>
            <div className="text-gray-400 mt-2">Total Transactions</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="cyber-card text-center"
          >
            <FaUser className="text-4xl text-cyan-500 mx-auto mb-3" />
            <div className="text-3xl font-bold text-purple-400">{members.length}</div>
            <div className="text-gray-400 mt-2">Group Members</div>
          </motion.div>
        </div>

        {/* Balance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="cyber-card mb-8"
        >
          <h2 className="text-2xl font-bold text-white mb-4 flex items-center gap-3">
            <FaUser className="text-cyan-400" />
            Settlement Summary
            <span className="text-sm text-gray-400 ml-2">(Who owes whom)</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {Object.entries(balances).map(([member, balance]) => (
              <div
                key={member}
                className={`p-4 rounded-lg border ${
                  balance > 0
                    ? 'bg-green-900/20 border-green-500/30'
                    : balance < 0
                    ? 'bg-red-900/20 border-red-500/30'
                    : 'bg-gray-800/50 border-gray-500/30'
                }`}
              >
                <div className="flex justify-between items-center">
                  <span className="text-white font-semibold">{member}</span>
                  <span
                    className={`text-lg font-bold ${
                      balance > 0
                        ? 'text-green-400'
                        : balance < 0
                        ? 'text-red-400'
                        : 'text-gray-400'
                    }`}
                  >
                    ₹{Math.abs(balance).toFixed(2)}
                  </span>
                </div>
                <div className="text-sm text-gray-400 mt-1">
                  {balance > 0 ? 'To Receive' : balance < 0 ? 'To Pay' : 'Settled'}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Add Expense Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mb-6"
        >
          <button
            onClick={() => setShowAddForm(!showAddForm)}
            className="cyber-button w-full md:w-auto flex items-center gap-3 justify-center"
          >
            <FaPlus />
            Add New Expense
          </button>
        </motion.div>

        {/* Add Expense Form */}
        {showAddForm && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="cyber-card mb-8"
          >
            <h3 className="text-xl font-bold text-white mb-4">Add New Expense</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Expense Title (e.g., Group Lunch)"
                className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-cyan-500/30 focus:border-cyan-500 outline-none"
                value={newExpense.title}
                onChange={(e) => setNewExpense({ ...newExpense, title: e.target.value })}
              />
              <input
                type="number"
                placeholder="Amount (₹)"
                className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-cyan-500/30 focus:border-cyan-500 outline-none"
                value={newExpense.amount || ''}
                onChange={(e) => setNewExpense({ ...newExpense, amount: parseFloat(e.target.value) })}
              />
              <select
                className="w-full bg-gray-800 text-white px-4 py-3 rounded-lg border border-gray-700 focus:border-cyan-500 focus:outline-none"
                value={newExpense.paid_by}
                onChange={(e) => setNewExpense({ ...newExpense, paid_by: e.target.value })}
              >
                <option value="">Select person</option>
                {members.map((member) => (
                  <option key={member.id} value={member.name}>{member.name}</option>
                ))}
              </select>
              <select
                className="bg-gray-800 text-white px-4 py-3 rounded-lg border border-cyan-500/30 focus:border-cyan-500 outline-none"
                value={newExpense.category}
                onChange={(e) => setNewExpense({ ...newExpense, category: e.target.value })}
              >
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
            </div>
            <div className="mt-4">
              <label className="text-white mb-2 block">Split Among:</label>
              <div className="flex flex-wrap gap-2">
                {members.map(member => (
                  <label key={member.id} className="flex items-center gap-2 bg-gray-800 px-3 py-2 rounded-lg cursor-pointer hover:bg-gray-700">
                    <input
                      type="checkbox"
                      checked={newExpense.split_among.includes(member.name)}
                      onChange={(e) => {
                        if (e.target.checked) {
                          setNewExpense({ ...newExpense, split_among: [...newExpense.split_among, member.name] });
                        } else {
                          setNewExpense({ ...newExpense, split_among: newExpense.split_among.filter(m => m !== member.name) });
                        }
                      }}
                      className="accent-cyan-500"
                    />
                    <span className="text-white">{member.name}</span>
                  </label>
                ))}
              </div>
            </div>
            <button
              onClick={() => {
                if (newExpense.title && newExpense.amount && newExpense.paid_by && newExpense.split_among.length > 0) {
                  setExpenses([...expenses, {
                    id: (expenses.length + 1).toString(),
                    ...newExpense,
                    date: new Date().toISOString().split('T')[0]
                  }]);
                  setNewExpense({ title: '', amount: 0, paid_by: '', category: 'Food', split_among: [] });
                  setShowAddForm(false);
                }
              }}
              className="cyber-button mt-4"
            >
              Add Expense
            </button>
          </motion.div>
        )}

        {/* Expenses List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-2xl font-bold text-white mb-4">Recent Expenses</h2>
          <div className="space-y-4">
            {expenses.map((expense, index) => (
              <motion.div
                key={expense.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card hover:scale-[1.02] transition-transform"
              >
                <div className="flex justify-between items-start flex-wrap gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-2">{expense.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <span className="flex items-center gap-2">
                        <FaUser className="text-cyan-400" />
                        Paid by: <span className="text-white">{expense.paid_by}</span>
                      </span>
                      <span className="flex items-center gap-2">
                        <FaCalendar className="text-pink-400" />
                        {expense.date}
                      </span>
                      <span className="px-3 py-1 bg-purple-900/50 text-purple-300 rounded-full">
                        {expense.category}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-gray-400">
                      Split among: <span className="text-cyan-400">{expense.split_among.join(', ')}</span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-green-400">₹{expense.amount}</div>
                    <div className="text-sm text-gray-400 mt-1">
                      ₹{(expense.amount / expense.split_among.length).toFixed(2)} per person
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
