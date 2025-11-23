'use client';

import { motion } from 'framer-motion';
import { FaUsers, FaArrowLeft, FaStar, FaEnvelope, FaPhone } from 'react-icons/fa';
import Link from 'next/link';

export default function MembersPage() {
  const members = [
    { id: 1, name: "Rahul Sharma", role: "Admin", skills: "Web Development, Python", email: "rahul@example.com" },
    { id: 2, name: "Priya Patel", role: "Member", skills: "Data Science, ML", email: "priya@example.com" },
    { id: 3, name: "Amit Kumar", role: "Member", skills: "AI, Deep Learning", email: "amit@example.com" },
    { id: 4, name: "Sneha Desai", role: "Member", skills: "UI/UX Design", email: "sneha@example.com" },
    { id: 5, name: "Rohan Verma", role: "Member", skills: "Backend Dev", email: "rohan@example.com" },
    { id: 6, name: "Neha Singh", role: "Member", skills: "Data Analytics", email: "neha@example.com" },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      <div className="fixed inset-0 bg-cyber-grid bg-[size:50px_50px] opacity-20 pointer-events-none"></div>
      
      <nav className="relative z-10 bg-black/50 backdrop-blur-md border-b border-cyan-500/30">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition">
            <FaArrowLeft className="text-cyan-400" />
            <span className="text-xl font-bold text-white">Back to Home</span>
          </Link>
          <div className="flex items-center gap-3">
            <FaUsers className="text-3xl text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Our Team
            </span>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card text-center hover:scale-105 transition-transform"
            >
              <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-cyan-500 to-pink-500 rounded-full flex items-center justify-center text-4xl text-white font-bold">
                {member.name.charAt(0)}
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
              <div className="flex items-center justify-center gap-2 mb-3">
                {member.role === 'Admin' && <FaStar className="text-yellow-400" />}
                <span className="text-cyan-400 text-sm">{member.role}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{member.skills}</p>
              <div className="flex gap-3 justify-center">
                <button className="p-2 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition">
                  <FaEnvelope />
                </button>
                <button className="p-2 bg-pink-600 rounded-lg hover:bg-pink-700 transition">
                  <FaPhone />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
