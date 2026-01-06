'use client';

import { motion } from 'framer-motion';
import { Download, Mail, Linkedin, Github } from 'lucide-react';
import Image from 'next/image';
import profilePic from '../assets/profile.jpg';
import { Particles, initParticlesEngine } from '@tsparticles/react';
import { useEffect, useState } from 'react';
import { loadFull } from 'tsparticles';

const Hero = () => {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.25
      }
    }
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 12
      }
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 sm:pt-24 md:pt-16 pb-8 sm:pb-12 md:pb-0">
      {/* Particle Network Background */}
      {init && (
        <Particles
          id="tsparticles"
          className="absolute inset-0 z-0"
          options={{
            background: { color: { value: 'transparent' } },
            fpsLimit: 60,
            interactivity: {
              events: {
                onHover: { enable: true, mode: 'repulse' },
                resize: { enable: true }
              },
              modes: {
                repulse: { distance: 100, duration: 0.4 }
              }
            },
            particles: {
              color: { value: '#fbbf24' },
              links: {
                color: '#fbbf24',
                distance: 150,
                enable: true,
                opacity: 0.4,
                width: 1
              },
              collisions: { enable: false },
              move: {
                direction: 'none',
                enable: true,
                outModes: { default: 'bounce' },
                random: false,
                speed: 1.2,
                straight: false
              },
              number: { density: { enable: true, width: 800 }, value: 40 },
              opacity: { value: 0.5 },
              shape: { type: 'circle' },
              size: { value: { min: 2, max: 4 } }
            },
            detectRetina: true
          }}
        />
      )}
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-indigo-900/20"></div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col md:flex-row items-center justify-between relative z-10 gap-6 sm:gap-8 md:gap-0">
        {/* Profile Image - First on mobile, second on desktop */}
        <motion.div
          className="flex-1 flex justify-center md:justify-end order-1 md:order-2 w-full md:w-auto mb-4 sm:mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.8, x: 60 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ type: "spring" as const, stiffness: 70, delay: 0.2 }}
        >
          <div className="relative w-40 h-40 xs:w-48 xs:h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-2xl border-2 sm:border-4 border-purple-500">
            <Image
              src={profilePic}
              alt="Shivangi Panigrahy profile picture"
              fill
              sizes="(max-width: 475px) 160px, (max-width: 640px) 192px, (max-width: 768px) 224px, (max-width: 1024px) 288px, 320px"
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
        </motion.div>
        
        {/* Text Content - Second on mobile, first on desktop */}
        <motion.div
          className="text-center md:text-left flex-1 w-full md:w-auto order-2 md:order-1"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
        <motion.div variants={itemVariants}>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-3 sm:mb-4 md:mb-6 leading-tight"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring" as const, stiffness: 90, delay: 0.3 }}
            >
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Shivangi Panigrahy
            </span>
            </motion.h1>
        </motion.div>

        <motion.div variants={itemVariants}>
            <motion.h2
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-gray-300 mb-4 sm:mb-5 md:mb-6 lg:mb-8"
              initial={{ x: -40, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring" as const, stiffness: 80, delay: 0.4 }}
            >
              Software Engineer (SDE-2) – Fullstack
            </motion.h2>
        </motion.div>

        <motion.div variants={itemVariants}>
            <motion.p
              className="hero-desc-readable mb-5 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-12 max-w-3xl leading-relaxed text-xs sm:text-sm md:text-base lg:text-lg px-2 sm:px-0 mx-auto md:mx-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.7 }}
              style={{
                background: 'linear-gradient(90deg, #ff7eb3, #65d6ce, #fbbf24, #a78bfa)',
                backgroundSize: '200% 200%',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                animation: 'shimmer 2.5s linear infinite'
              }}
            >
              <span className="hero-keyword">MERN Stack Developer</span> with 2.11 years of experience in designing and developing scalable, <span className="hero-keyword">high-performance</span> web applications. Skilled in building dynamic and user-friendly solutions using React.js, Node.js, Express.js, and MongoDB. Passionate about writing clean, efficient code and staying updated with the latest advancements in web development.
            </motion.p>
        </motion.div>

        <motion.div 
          variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start items-center w-full sm:w-auto"
        >
            <motion.a
            href="#contact"
              initial={{ boxShadow: '0 4px 6px 0 rgba(0,0,0,0.1)' }}
              whileHover={{ scale: 1.08, boxShadow: '0 4px 24px 0 rgba(168,139,250,0.25)' }}
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto text-sm sm:text-base"
          >
            <Mail size={18} className="sm:w-5 sm:h-5" />
            Get In Touch
            </motion.a>
          
            <motion.a
              href="/Shivangi_Panigrahy_SDE-2_FullStack.pdf"
              initial={{ boxShadow: '0 4px 6px 0 rgba(0,0,0,0.1)' }}
              whileHover={{ scale: 1.08, boxShadow: '0 4px 24px 0 rgba(244,114,182,0.18)' }}
              className="border-2 border-white text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg w-full sm:w-auto text-sm sm:text-base"
          >
            <Download size={18} className="sm:w-5 sm:h-5" />
            Download Resume
            </motion.a>
        </motion.div>

        <motion.div 
          variants={itemVariants}
            className="flex justify-center md:justify-start gap-4 sm:gap-6 mt-6 sm:mt-8 md:mt-12"
        >
            <motion.a
              href="http://linkedin.com/in/shivangi-prapti-panigrahy-6408b6193"
            target="_blank"
            rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: '#a78bfa' }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Linkedin size={24} className="sm:w-7 sm:h-7" />
            </motion.a>
            <motion.a
            href="https://github.com/Shivangi-Panigrahy"
            target="_blank"
            rel="noopener noreferrer"
              whileHover={{ scale: 1.15, color: '#fbbf24' }}
            className="text-gray-400 hover:text-white transition-colors duration-300"
          >
            <Github size={24} className="sm:w-7 sm:h-7" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
      {/* Floating Elements - Hidden on very small screens */}
      <div className="hidden sm:block absolute top-20 left-10 w-20 h-20 bg-purple-500/20 rounded-full blur-xl"></div>
      <div className="hidden sm:block absolute bottom-20 right-10 w-32 h-32 bg-pink-500/20 rounded-full blur-xl"></div>
      <div className="hidden sm:block absolute top-1/2 left-1/4 w-16 h-16 bg-blue-500/20 rounded-full blur-xl"></div>
      {/* Scroll Down Icon */}
      <div className="absolute left-1/2 bottom-8 transform -translate-x-1/2 z-20">
        <div className="animate-bounce-slow">
          <svg width="36" height="56" viewBox="0 0 36 56" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="2" y="2" width="32" height="52" rx="16" stroke="#b4b4d8" strokeWidth="4"/>
            <circle cx="18" cy="16" r="4" fill="#b4b4d8">
              <animate attributeName="cy" values="16;32;16" dur="1.8s" repeatCount="indefinite"/>
            </circle>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero; 