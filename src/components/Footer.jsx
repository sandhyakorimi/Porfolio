import React from 'react';
import { motion } from 'framer-motion';
import { Download, Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Sandhya_Korimi_Resume.pdf';
    link.click();
  };

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: 'https://linkedin.com/in/sandhya-korimi-63798b307',
      label: 'LinkedIn',
      hoverColor: 'hover:text-cyan-400 hover:shadow-cyan-500/30',
    },
    {
      icon: <Github size={24} />,
      href: 'https://github.com/sandhyakorimi',
      label: 'GitHub',
      hoverColor: 'hover:text-white hover:shadow-purple-500/30',
    },
    {
      icon: <Mail size={24} />,
      href: 'mailto:sandhyakorimi5566@gmail.com',
      label: 'Email',
      hoverColor: 'hover:text-pink-400 hover:shadow-pink-500/30',
    },
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-10 left-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-ping-slow"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl animate-ping-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-3xl animate-ping-slow delay-2000"></div>
      </div>

      {/* Subtle Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* About Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="text-4xl font-bold mb-6">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
                  Sandhya Korimi
                </span>
              </h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-md">
                Full Stack Developer passionate about building modern, responsive, and interactive web applications.
                Currently pursuing MCA and always eager to work on innovative projects.
              </p>
            </div>

            {/* Social Links + Resume Button */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15 }}
                    whileTap={{ scale: 0.95 }}
                    className={`p-4 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 text-white/70 ${social.hoverColor} hover:shadow-lg hover:scale-110 transition-all duration-300`}
                    aria-label={social.label}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-medium shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
              >
                <Download className="mr-2 h-5 w-5" />
                Download Resume
                <span className="absolute inset-0 bg-white/20 scale-x-0 origin-left transition-transform duration-500 hover:scale-x-100"></span>
              </Button>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-white/70 hover:text-cyan-400 transition-colors duration-300 relative group text-lg"
                  >
                    {link.name}
                    <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="space-y-6"
          >
            <h4 className="text-xl font-semibold text-white">Get In Touch</h4>
            <div className="space-y-6 text-white/70">
              <div>
                <p className="font-medium text-white mb-1">Location</p>
                <p>Andhra Pradesh, India</p>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Email</p>
                <a href="mailto:sandhyakorimi5566@gmail.com" className="hover:text-pink-400 transition-colors">
                  sandhyakorimi5566@gmail.com
                </a>
              </div>
              <div>
                <p className="font-medium text-white mb-1">Availability</p>
                <p>Open for opportunities</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-white/60 text-sm flex items-center gap-2"
          >
            © 2025 Sandhya Korimi. Made with
            <Heart size={16} className="text-pink-400 fill-current animate-pulse" />
            using React & TailwindCSS
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Button
              onClick={scrollToTop}
              variant="ghost"
              className="text-white/70 hover:text-cyan-400 hover:bg-white/5 group"
            >
              <ArrowUp size={18} className="mr-2 group-hover:-translate-y-1 transition-transform" />
              Back to top
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Decorative Gradient Line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
    </footer>
  );
};

export default Footer;