'use client';

import { motion } from 'framer-motion';
import { FaBook, FaArrowLeft, FaDownload, FaFileAlt, FaFlask } from 'react-icons/fa';
import Link from 'next/link';

export default function EducationPage() {
  const materials = {
    notes: [
      { id: 1, title: "Data Structures - Complete Notes", subject: "DSA", downloads: 45 },
      { id: 2, title: "Machine Learning Basics", subject: "ML", downloads: 38 },
      { id: 3, title: "Web Development Guide", subject: "Web Dev", downloads: 52 },
    ],
    practicals: [
      { id: 4, title: "Python Programming Lab", subject: "Python", downloads: 29 },
      { id: 5, title: "Database Practicals", subject: "DBMS", downloads: 41 },
      { id: 6, title: "AI Lab Experiments", subject: "AI", downloads: 33 },
    ],
  };

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
            <FaBook className="text-3xl text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Education Hub
            </span>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FaFileAlt className="text-cyan-400" /> Notes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.notes.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="cyber-card hover:scale-105 transition-transform"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <span className="px-3 py-1 bg-cyan-900/50 text-cyan-300 rounded-full text-sm">
                      {item.subject}
                    </span>
                  </div>
                  <FaFileAlt className="text-3xl text-cyan-400" />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-400 text-sm">{item.downloads} downloads</span>
                  <button className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition">
                    <FaDownload /> Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
            <FaFlask className="text-pink-400" /> Practicals
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materials.practicals.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.3 }}
                className="cyber-card hover:scale-105 transition-transform"
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                    <span className="px-3 py-1 bg-pink-900/50 text-pink-300 rounded-full text-sm">
                      {item.subject}
                    </span>
                  </div>
                  <FaFlask className="text-3xl text-pink-400" />
                </div>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-gray-400 text-sm">{item.downloads} downloads</span>
                  <button className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-4 py-2 rounded-lg hover:scale-105 transition">
                    <FaDownload /> Download
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
