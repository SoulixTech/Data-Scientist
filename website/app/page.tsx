'use client';

import { motion, useInView } from 'framer-motion';
import { FaCamera, FaBirthdayCake, FaUsers, FaBook, FaGamepad, FaLock, FaHeart, FaShieldAlt, FaWallet, FaRocket, FaTrophy, FaCertificate, FaCrown, FaFacebook, FaTwitter, FaInstagram, FaGithub, FaArrowRight, FaFire, FaBolt, FaStar, FaChartPie, FaCalendar } from 'react-icons/fa';
import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState, useRef } from 'react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const features = [
    {
      icon: <FaCamera className="text-5xl" />,
      title: "Photo & Video Gallery",
      description: "Store & organize your precious memories with smart albums",
      link: "/gallery",
      gradient: "from-violet-600 via-purple-600 to-fuchsia-600",
    },
    {
      icon: <FaBirthdayCake className="text-5xl" />,
      title: "Birthday Reminders",
      description: "Never miss celebrating with automated notifications",
      link: "/members",
      gradient: "from-pink-600 via-rose-600 to-red-600",
    },
    {
      icon: <FaUsers className="text-5xl" />,
      title: "Member Profiles",
      description: "Showcase team with detailed profiles & achievements",
      link: "/members",
      gradient: "from-blue-600 via-cyan-600 to-teal-600",
    },
    {
      icon: <FaBook className="text-5xl" />,
      title: "Education Hub",
      description: "Centralized learning with notes & study materials",
      link: "/education",
      gradient: "from-emerald-600 via-green-600 to-lime-600",
    },
    {
      icon: <FaWallet className="text-5xl" />,
      title: "Smart Expenses",
      description: "Track spending with split bills & auto settlements",
      link: "/expenses",
      gradient: "from-amber-600 via-yellow-600 to-orange-600",
    },
    {
      icon: <FaGamepad className="text-5xl" />,
      title: "Fun Zone",
      description: "Games, memes, polls & interactive challenges",
      link: "/fun-zone",
      gradient: "from-red-600 via-orange-600 to-pink-600",
    },
    {
      icon: <FaLock className="text-5xl" />,
      title: "Privacy First",
      description: "Bank-grade encryption for protected data",
      link: "/",
      gradient: "from-slate-600 via-gray-600 to-zinc-600",
    },
    {
      icon: <FaShieldAlt className="text-5xl" />,
      title: "Admin Control",
      description: "Complete oversight with role-based permissions",
      link: "/",
      gradient: "from-indigo-600 via-purple-600 to-violet-600",
    }
  ];

  const stats = [
    { icon: <FaFire />, value: "500+", label: "Memories", color: "from-orange-900/60 via-orange-800/40 to-transparent" },
    { icon: <FaUsers />, value: "20+", label: "Members", color: "from-blue-900/60 via-blue-800/40 to-transparent" },
    { icon: <FaBook />, value: "100+", label: "Resources", color: "from-emerald-900/60 via-emerald-800/40 to-transparent" },
    { icon: <FaBolt />, value: "24/7", label: "Available", color: "from-amber-900/60 via-amber-800/40 to-transparent" },
  ];

  const achievements = [
    { icon: <FaRocket />, value: "25+", label: "Projects", gradient: "from-cyan-400 to-blue-500" },
    { icon: <FaTrophy />, value: "8", label: "Hackathons", gradient: "from-yellow-400 to-orange-500" },
    { icon: <FaCertificate />, value: "150+", label: "Certificates", gradient: "from-green-400 to-emerald-500" },
    { icon: <FaCrown />, value: "∞", label: "Ideas", gradient: "from-purple-400 to-pink-500" },
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black"></div>
        <motion.div 
          className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, -100, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 20, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 25, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-600/10 rounded-full blur-3xl"
          animate={{ x: [-50, 50, -50], y: [-50, 50, -50] }}
          transition={{ duration: 30, repeat: Infinity }}
        />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            <Link href="/">
              <motion.div className="flex items-center gap-3 cursor-pointer group" whileHover={{ scale: 1.02 }}>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity"></div>
                  <div className="relative w-10 h-10 sm:w-12 sm:h-12 bg-black rounded-xl flex items-center justify-center overflow-hidden border border-white/10">
                    <Image src="/DataScientis group logo.png" alt="Logo" width={40} height={40} className="object-contain" />
                  </div>
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg sm:text-xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                    Data Scientist Group
                  </div>
                  <div className="text-xs text-gray-500 -mt-1">Your Memories, Together</div>
                </div>
              </motion.div>
            </Link>

            <div className="hidden lg:flex items-center gap-1">
              {['Gallery', 'Members', 'Education', 'Expenses', 'Fun Zone'].map((item, index) => (
                <Link key={item} href={`/${item.toLowerCase().replace(' ', '-')}`}>
                  <motion.div
                    className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-white/5 transition-all cursor-pointer relative group"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {item}
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:w-3/4 transition-all"></span>
                  </motion.div>
                </Link>
              ))}
            </div>

            <motion.button
              className="px-4 sm:px-6 py-2 sm:py-2.5 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg font-semibold text-sm hover:shadow-lg hover:shadow-cyan-500/50 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Join Now
            </motion.button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto text-center">
          <motion.div
            className="mb-8 sm:mb-12"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
          >
            <div className="relative inline-block">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 rounded-full border border-cyan-500/30"
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i }}
                  style={{ width: '200px', height: '200px', left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
                />
              ))}
              
              <motion.div
                className="relative w-48 h-48 sm:w-64 sm:h-64"
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-[32px] blur-2xl opacity-60 animate-pulse"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-[32px] p-1.5">
                  <div className="w-full h-full bg-black rounded-[28px] flex items-center justify-center overflow-hidden p-8">
                    <Image src="/DataScientis group logo.png" alt="Logo" width={200} height={200} className="object-contain" priority />
                  </div>
                </div>
                <motion.div
                  className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-pink-500 to-red-500 rounded-full flex items-center justify-center shadow-2xl border-4 border-black"
                  animate={{ scale: [1, 1.15, 1], rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <FaHeart className="text-white text-2xl" />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-black mb-4 sm:mb-6">
              <motion.span
                className="inline-block bg-gradient-to-r from-cyan-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Your Memories,
              </motion.span>
              <br />
              <motion.span
                className="inline-block bg-gradient-to-r from-pink-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
                style={{ backgroundSize: '200% 200%' }}
              >
                Together
              </motion.span>
            </h1>
            
            <p className="text-base sm:text-xl lg:text-2xl text-gray-400 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4">
              A premium platform for friends to share memories, collaborate on education, manage expenses, and celebrate together.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl font-bold text-lg shadow-2xl shadow-cyan-500/50 hover:shadow-purple-500/50 transition-all flex items-center justify-center gap-2 group"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Get Started
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                className="w-full sm:w-auto px-8 py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-bold text-lg hover:bg-white/10 transition-all"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Learn More
              </motion.button>
            </div>

            <motion.div
              className="text-gray-500 text-sm"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="mb-2">Scroll to explore</div>
              <div className="text-2xl">↓</div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative z-10 py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 rounded-2xl blur-xl opacity-50"></div>
                <div className={`relative bg-gradient-to-br ${stat.color} rounded-2xl p-8 text-center backdrop-blur-sm border border-white/10`}>
                  <div className="text-4xl sm:text-5xl font-black text-white mb-2">{stat.value}</div>
                  <div className="text-sm sm:text-base text-white/80">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Everything You Need
            </h2>
            <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
              Powerful features designed to bring your group closer together
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Link href={feature.link}>
                  <div className="relative group cursor-pointer h-full">
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                    <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 h-full">
                      <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{feature.title}</h3>
                      <p className="text-gray-400 text-sm">{feature.description}</p>
                      <div className="mt-4 text-cyan-400 flex items-center gap-2 text-sm group-hover:gap-3 transition-all">
                        Explore <FaArrowRight className="text-xs" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative z-10 py-16 sm:py-24 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16"
          >
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Our Achievements
            </h2>
            <p className="text-gray-400 text-base sm:text-lg">
              Milestones that define our journey
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.05 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${achievement.gradient} rounded-2xl blur-lg opacity-30 group-hover:opacity-50 transition-opacity`}></div>
                <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 text-center">
                  <div className={`text-4xl sm:text-5xl mb-3 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                    {achievement.icon}
                  </div>
                  <div className={`text-3xl sm:text-4xl font-black mb-2 bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                    {achievement.value}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-400">{achievement.label}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 border-t border-white/10 py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <div className="flex flex-col items-center gap-6">
            <div className="flex gap-6">
              {[FaFacebook, FaTwitter, FaInstagram, FaGithub].map((Icon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.2, rotate: 360 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon className="text-2xl text-gray-400 hover:text-white cursor-pointer transition-colors" />
                </motion.div>
              ))}
            </div>
            
            <div className="text-center text-gray-400">
              <p className="mb-2">Made with <span className="text-pink-500">❤</span> by Data Scientist Group</p>
              <p className="text-sm">© 2024 All Rights Reserved • Privacy First • Members Only</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
