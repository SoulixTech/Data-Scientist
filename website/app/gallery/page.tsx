'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaCamera, FaVideo, FaHeart, FaArrowLeft, FaPlus, FaImage } from 'react-icons/fa';
import Link from 'next/link';

export default function GalleryPage() {
  const [activeTab, setActiveTab] = useState<'photos' | 'videos'>('photos');

  const photos = [
    { id: 1, title: "Group Picnic 2024", date: "Nov 15, 2024", likes: 24 },
    { id: 2, title: "College Fest", date: "Oct 20, 2024", likes: 31 },
    { id: 3, title: "Study Session", date: "Oct 5, 2024", likes: 18 },
    { id: 4, title: "Birthday Celebration", date: "Sep 12, 2024", likes: 42 },
    { id: 5, title: "Trip to Lonavala", date: "Aug 25, 2024", likes: 56 },
    { id: 6, title: "Sports Day", date: "Aug 10, 2024", likes: 29 },
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
            <FaCamera className="text-3xl text-pink-500" />
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-pink-500 bg-clip-text text-transparent">
              Gallery
            </span>
          </div>
        </div>
      </nav>

      <div className="relative z-10 container mx-auto px-6 py-12">
        {/* Tabs */}
        <div className="flex gap-4 mb-8">
          <button
            onClick={() => setActiveTab('photos')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'photos'
                ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <FaCamera /> Photos
          </button>
          <button
            onClick={() => setActiveTab('videos')}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              activeTab === 'videos'
                ? 'bg-gradient-to-r from-cyan-500 to-pink-500 text-white'
                : 'bg-gray-800 text-gray-400 hover:text-white'
            }`}
          >
            <FaVideo /> Videos
          </button>
          <button className="flex items-center gap-2 px-6 py-3 rounded-lg font-bold bg-green-600 text-white hover:bg-green-700 transition-all ml-auto">
            <FaPlus /> Upload
          </button>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {photos.map((photo, index) => (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.1 }}
              className="cyber-card group cursor-pointer overflow-hidden"
            >
              <div className="w-full h-64 bg-gradient-to-br from-cyan-600 to-purple-600 flex items-center justify-center mb-4 rounded-lg group-hover:scale-110 transition-transform">
                <FaImage className="text-6xl text-white/50" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{photo.title}</h3>
              <div className="flex justify-between items-center text-sm text-gray-400">
                <span>{photo.date}</span>
                <span className="flex items-center gap-1 text-pink-400">
                  <FaHeart /> {photo.likes}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
