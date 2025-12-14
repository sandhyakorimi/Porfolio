import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Linkedin, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate submission
    setTimeout(() => {
      toast({
        title: "Message Sent Successfully!",
        description: "Thank you for reaching out. I'll get back to you as soon as possible!",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'sandhyakorimi5566@gmail.com', href: 'mailto:sandhyakorimi5566@gmail.com' },
    { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+91 9505439502', href: 'tel:+919505439502' },
    { icon: <MapPin className="w-6 h-6" />, label: 'Location', value: 'Andhra Pradesh, India', href: null },
  ];

  const socialLinks = [
    { icon: <Linkedin className="w-7 h-7" />, href: 'https://linkedin.com/in/sandhya-korimi-63798b307' },
    { icon: <Github className="w-7 h-7" />, href: 'https://github.com/sandhyakorimi' },
  ];

  return (
    <section id="contact" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-10 left-10 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-ping-slow"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-ping-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-ping-slow delay-2000"></div>
      </div>

      {/* Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            I'm always excited to collaborate on innovative projects and explore new opportunities. Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Contact Info & Social */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white">Get In Touch</h3>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="group flex items-center gap-5 p-5 backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300"
                >
                  <div className="p-4 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform">
                    {info.icon}
                  </div>
                  <div>
                    <p className="text-white/70 text-sm font-medium">{info.label}</p>
                    {info.href ? (
                      <a href={info.href} className="text-white font-medium hover:text-cyan-300 transition-colors">
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-white font-medium">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <div className="space-y-6">
              <h3 className="text-3xl font-semibold text-white">Connect With Me</h3>
              <div className="flex gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.15, y: -6 }}
                    className="p-5 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl text-white hover:text-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/30 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Availability Card */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="backdrop-blur-md bg-gradient-to-r from-cyan-600/10 to-purple-600/10 border border-cyan-500/20 rounded-2xl p-8 shadow-lg shadow-cyan-500/20"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></div>
                <h4 className="text-xl font-semibold text-white">Currently Available</h4>
              </div>
              <p className="text-white/80 leading-relaxed">
                Actively seeking full-stack/full-time opportunities, internships, and exciting freelance projects. 
                Open to collaboration and immediate start.
              </p>
            </motion.div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10">
              <h3 className="text-3xl font-bold text-white mb-8">Send Me a Message</h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Your Name</label>
                  <Input
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Email Address</label>
                  <Input
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:ring-cyan-400/20"
                  />
                </div>

                <div>
                  <label className="block text-white/80 text-sm font-medium mb-2">Message</label>
                  <Textarea
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, idea, or just say hello..."
                    className="bg-white/5 border-white/10 text-white placeholder-white/40 focus:border-cyan-400 focus:ring-cyan-400/20 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  size="lg"
                  className="w-full bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-semibold shadow-lg hover:shadow-cyan-500/50 transform hover:scale-105 transition-all duration-300"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>

              <p className="text-white/60 text-sm text-center mt-6">
                I typically respond within 24 hours. Looking forward to hearing from you! 
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;