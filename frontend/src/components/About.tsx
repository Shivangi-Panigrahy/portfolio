'use client';

import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-16">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          variants={{
            visible: { transition: { staggerChildren: 0.18 } },
            hidden: {}
          }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-white mb-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1.08, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 10 }}
            viewport={{ once: false, amount: 0.7 }}
          >
            About Me
          </motion.h2>
          <motion.div 
            className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: false, amount: 0.7 }}
          ></motion.div>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <motion.p
            className="text-gray-300 text-lg md:text-xl leading-relaxed text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
            viewport={{ once: false, amount: 0.5 }}
          >
            I am a passionate MERN Stack Developer with 2.11years of professional experience, holding a B.Tech in Computer Science and Engineering from Nist University. My journey includes building scalable web applications at BrainerHub Solutions and CleverPush, where I specialized in the MERN stack, RESTful APIs, and cloud deployments. I thrive on solving real-world problems and am committed to continuous learning and delivering impactful solutions.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Education Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7, type: "spring" }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ scale: 1.03, boxShadow: '0 4px 24px 0 rgba(168,139,250,0.15)' }}
          >
            <motion.div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-semibold">B.Tech Computer Science and Engineering</h4>
                    <p className="text-gray-400">NIST University, Berhampur, Odisha, India</p>
                  </div>
                  <span className="text-purple-400 font-medium">2019 - 2023</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-semibold">Intermediate</h4>
                    <p className="text-gray-400">Kendriya Vidyalaya, Salt Lake, Kolkata, India</p>
                  </div>
                  <span className="text-purple-400 font-medium">2018 - 2019</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white font-semibold">Matriculation</h4>
                    <p className="text-gray-400">Kendriya Vidyalaya, Salt Lake, Kolkata, India</p>
                  </div>
                  <span className="text-purple-400 font-medium">2016 - 2017</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Experience Highlight */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.7, type: "spring" }}
            viewport={{ once: false, amount: 0.4 }}
            whileHover={{ scale: 1.03, boxShadow: '0 4px 24px 0 rgba(244,114,182,0.15)' }}
          >
            <motion.div className="bg-white/10 backdrop-blur-md rounded-2xl p-8">
              <h3 className="text-2xl font-semibold text-white mb-6">Professional Experience</h3>
              <div className="space-y-4">
                <div className="flex flex-col gap-2">
                  <div>
                    <h4 className="text-white font-semibold">Software Engineer (SDE-2) - Fullstack</h4>
                    <p className="text-gray-400">Pragetx Softwares Pvt. Ltd, Ahmedabad, India (WFO)</p>
                    <span className="text-purple-400 font-medium">04/2025 - Present (9 Months)</span>
                    </div>
                    <div>
                    <h4 className="text-white font-semibold">Junior Software Engineer – Fullstack</h4>
                    <p className="text-gray-400">BrainerHub Solutions, Ahmedabad, India (WFO)</p>
                    <span className="text-purple-400 font-medium">02/2023 – 03/2025 (2.2 Years)</span>
                  </div>
                    </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 