'use client';

import { motion } from 'framer-motion';
import { FaGamepad, FaArrowLeft, FaDice, FaPoll, FaLaugh } from 'react-icons/fa';
import Link from 'next/link';

export default function FunZonePage() {
  const games = [
    { id: 1, name: "Quiz Time", icon: <FaDice />, players: 12 },
    { id: 2, name: "Polls & Voting", icon: <FaPoll />, players: 18 },
    { id: 3, name: "Meme Gallery", icon: <FaLaugh />, players: 25 },
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
            <FaGamepad className="text-3xl text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Fun Zone
            </span>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {games.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="cyber-card text-center cursor-pointer"
            >
              <div className="text-6xl text-cyan-400 mb-4 flex justify-center">
                {game.icon}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{game.name}</h3>
              <p className="text-gray-400">{game.players} active players</p>
              <button className="cyber-button mt-4 w-full">Play Now</button>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
