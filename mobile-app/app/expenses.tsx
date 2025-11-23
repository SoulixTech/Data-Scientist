import { View, Text, ScrollView, TouchableOpacity, StyleSheet, TextInput, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';

interface Member {
  id: string;
  name: string;
}

interface Expense {
  id: string;
  title: string;
  amount: number;
  paid_by: string;
  category: string;
  split_among: string[];
  date: string;
}

export default function ExpensesScreen() {
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [members, setMembers] = useState<Member[]>([]);
  const [loading, setLoading] = useState(true);
  const [showAddModal, setShowAddModal] = useState(false);
  const [newExpense, setNewExpense] = useState({
    title: '',
    amount: '',
    paid_by: '',
    category: 'Food',
    split_among: [] as string[],
  });

  useEffect(() => {
    fetchMembers();
    fetchExpenses();
  }, []);

  const fetchMembers = async () => {
    const { data } = await supabase
      .from('members')
      .select('id, name')
      .order('name');
    if (data) setMembers(data);
  };

  const fetchExpenses = async () => {
    setLoading(true);
    const { data } = await supabase
      .from('expenses')
      .select('*')
      .order('date', { ascending: false });
    if (data) setExpenses(data);
    setLoading(false);
  };

  const calculateBalance = () => {
    const balances: Record<string, number> = {};
    members.forEach((m: Member) => balances[m.name] = 0);
    expenses.forEach((exp: Expense) => {
      const split = exp.amount / exp.split_among.length;
      const paidBy = members.find((m: Member) => m.id === exp.paid_by)?.name;
      if (paidBy) balances[paidBy] += exp.amount;
      exp.split_among.forEach((id: string) => {
        const member = members.find((m: Member) => m.id === id);
        if (member) balances[member.name] -= split;
      });
    });
    return balances;
  };

  const totalExpenses = expenses.reduce((sum: number, exp: Expense) => sum + exp.amount, 0);
  const balances = calculateBalance();

  return (
    <LinearGradient colors={['#1a1a2e', '#16213e', '#0f3460']} style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Stats */}
        <View style={styles.statsRow}>
          <View style={styles.statCard}>
            <Ionicons name="cash" size={30} color="#10b981" />
            <Text style={styles.statValue}>₹{totalExpenses}</Text>
            <Text style={styles.statLabel}>Total</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="list" size={30} color="#ec4899" />
            <Text style={styles.statValue}>{expenses.length}</Text>
            <Text style={styles.statLabel}>Transactions</Text>
          </View>
          <View style={styles.statCard}>
            <Ionicons name="people" size={30} color="#00d4ff" />
            <Text style={styles.statValue}>{members.length}</Text>
            <Text style={styles.statLabel}>Members</Text>
          </View>
        </View>

        {/* Balances */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Settlement Summary</Text>
          {Object.entries(balances).map(([name, balance]: [string, any]) => (
            <View key={name} style={[
              styles.balanceCard,
              { borderColor: balance > 0 ? '#10b981' : balance < 0 ? '#ef4444' : '#666' }
            ]}>
              <Text style={styles.balanceName}>{name}</Text>
              <Text style={[
                styles.balanceAmount,
                { color: balance > 0 ? '#10b981' : balance < 0 ? '#ef4444' : '#999' }
              ]}>
                ₹{Math.abs(balance).toFixed(2)}
              </Text>
              <Text style={styles.balanceStatus}>
                {balance > 0 ? 'To Receive' : balance < 0 ? 'To Pay' : 'Settled'}
              </Text>
            </View>
          ))}
        </View>

        {/* Add Button */}
        <TouchableOpacity style={styles.addButton} onPress={() => setShowAddModal(true)}>
          <LinearGradient colors={['#00d4ff', '#ec4899']} style={styles.addButtonGradient}>
            <Ionicons name="add" size={24} color="#fff" />
            <Text style={styles.addButtonText}>Add Expense</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* Expenses List */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Expenses</Text>
          {expenses.map((expense: Expense) => (
            <View key={expense.id} style={styles.expenseCard}>
              <View style={styles.expenseHeader}>
                <Text style={styles.expenseTitle}>{expense.title}</Text>
                <Text style={styles.expenseAmount}>₹{expense.amount}</Text>
              </View>
              <View style={styles.expenseDetails}>
                <Text style={styles.expenseDetail}>
                  <Ionicons name="person" size={12} /> {members.find((m: Member) => m.id === expense.paid_by)?.name}
                </Text>
                <Text style={styles.expenseDetail}>
                  <Ionicons name="calendar" size={12} /> {new Date(expense.date).toLocaleDateString()}
                </Text>
              </View>
              <Text style={styles.expenseCategory}>{expense.category}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollView: { flex: 1, padding: 20 },
  statsRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 20 },
  statCard: {
    flex: 1,
    backgroundColor: '#ffffff10',
    padding: 15,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#ffffff20',
  },
  statValue: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginTop: 8 },
  statLabel: { fontSize: 12, color: '#aaa', marginTop: 4 },
  section: { marginBottom: 20 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#fff', marginBottom: 15 },
  balanceCard: {
    backgroundColor: '#ffffff10',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  balanceName: { fontSize: 16, color: '#fff', fontWeight: '600' },
  balanceAmount: { fontSize: 18, fontWeight: 'bold' },
  balanceStatus: { fontSize: 12, color: '#aaa' },
  addButton: { marginBottom: 20 },
  addButtonGradient: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 15,
    borderRadius: 10,
    gap: 8,
  },
  addButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
  expenseCard: {
    backgroundColor: '#ffffff10',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ffffff20',
  },
  expenseHeader: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  expenseTitle: { fontSize: 16, color: '#fff', fontWeight: '600', flex: 1 },
  expenseAmount: { fontSize: 18, color: '#10b981', fontWeight: 'bold' },
  expenseDetails: { flexDirection: 'row', gap: 15, marginBottom: 8 },
  expenseDetail: { fontSize: 12, color: '#aaa' },
  expenseCategory: {
    fontSize: 12,
    color: '#ec4899',
    backgroundColor: '#ec489920',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
});
