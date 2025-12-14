import React from 'react';
import { motion } from 'framer-motion';
import { Download, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sandhya_Korimi_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Background Blobs - Pure Tailwind */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-0 -left-48 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-ping-slow"></div>
        <div className="absolute top-32 -right-32 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl animate-ping-slow delay-1000"></div>
        <div className="absolute -bottom-32 left-1/3 w-80 h-80 bg-pink-500/30 rounded-full blur-3xl animate-ping-slow delay-2000"></div>
      </div>

      {/* Subtle Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/30"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-white mb-6"
          >
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Sandhya Korimi
            </span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl font-semibold text-white/90 mb-6"
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          >
            Passionate MCA student with expertise in Full Stack Web Development. 
            I create responsive, interactive web experiences using modern technologies.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <Button
            onClick={handleDownloadResume}
            size="lg"
            className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-medium shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
            <span className="absolute inset-0 bg-white/20 scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100"></span>
          </Button>

          <Button
            variant="outline"
            size="lg"
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-white/30 text-black backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
          >
            <Mail className="mr-2 h-5 w-5" />
            Let's Talk
          </Button>
        </motion.div>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center gap-8"
        >
          <a
            href="https://linkedin.com/in/sandhya-korimi-63798b307"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-cyan-400 hover:shadow-lg hover:shadow-cyan-500/30 hover:scale-110 transition-all duration-300"
          >
            <Linkedin size={32} />
          </a>
          <a
            href="https://github.com/sandhyakorimi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-white hover:shadow-lg hover:shadow-purple-500/30 hover:scale-110 transition-all duration-300"
          >
            <Github size={32} />
          </a>
          <a
            href="mailto:sandhyakorimi5566@gmail.com"
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white/70 hover:text-pink-400 hover:shadow-lg hover:shadow-pink-500/30 hover:scale-110 transition-all duration-300"
          >
            <Mail size={32} />
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-3 bg-cyan-400 rounded-full mt-2"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;