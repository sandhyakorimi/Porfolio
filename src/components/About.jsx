import React from 'react';
import { motion } from 'framer-motion';
import profilePhoto from '@/assets/SandhyaImg.jpg';

const About = () => {
  return (
    <section id="about" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/80 to-gray-900">
      {/* Animated Background Blobs - Matching Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-0 -left-48 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-ping-slow"></div>
        <div className="absolute top-32 -right-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-ping-slow delay-1000"></div>
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-ping-slow delay-2000"></div>
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6 opacity-70" />
        </motion.div>

        {/* Reduced gap here: gap-12 → gap-8 (lg: gap-10 for subtle tightness) */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-10 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center lg:justify-start"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-2xl border border-white/10">
                <img
                  src={profilePhoto}
                  alt="Sandhya Korimi - Full Stack Developer"
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-pink-500/30 to-purple-500/30 rounded-full blur-3xl animate-ping-slow" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-semibold text-white">
              Passionate Full Stack Developer
            </h3>
            
            <div className="space-y-4 text-lg text-white/80 leading-relaxed">
              <p>
                I'm a motivated MCA student from Andhra Pradesh, India, with a strong passion for 
                Full Stack Web Development. Currently pursuing my Masters in Computer Applications 
                at Aditya College of Engineering & Technology with an impressive 9.19 CGPA.
              </p>
              
              <p>
                My journey in technology started during my Bachelor's in Computer Science, where I 
                developed a solid foundation in programming languages like Java, JavaScript, and Python. 
                I've enhanced my skills through hands-on training in modern web technologies including 
                React.js, Node.js, and MongoDB.
              </p>
              
              <p>
                I believe in creating responsive, interactive websites that provide excellent user 
                experiences. My problem-solving abilities and quick learning mindset help me tackle 
                complex challenges and deliver innovative solutions.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mt-8">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">3+</div>
                <div className="text-sm text-white/70 mt-2">Projects</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">7+</div>
                <div className="text-sm text-white/70 mt-2">Certifications</div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 shadow-lg col-span-2 md:col-span-1"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-pink-400 bg-clip-text text-transparent">9.19</div>
                <div className="text-sm text-white/70 mt-2">CGPA</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;