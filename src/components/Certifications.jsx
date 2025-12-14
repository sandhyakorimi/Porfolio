import React from 'react';
import { motion } from 'framer-motion';
import { Award, Calendar, CheckCircle, Star } from 'lucide-react';

const Certifications = () => {
  const certifications = [
    {
      title: 'Full Stack Web Development',
      issuer: 'Technical Hub',
      type: 'Professional Training',
      year: '2024-2025',
      status: 'Ongoing',
      description: 'Comprehensive training in modern web development technologies including React.js, Node.js, and MongoDB.',
      skills: ['React.js', 'Node.js', 'MongoDB', 'Full Stack Development'],
      featured: true
    },
    {
      title: 'ProjectSpace Technical Hub',
      issuer: 'Technical Hub',
      type: 'Project Completion',
      year: '2025',
      status: 'Completed',
      description: 'Successfully completed multiple web development projects demonstrating practical application of learned skills.',
      skills: ['Project Management', 'Web Development', 'Team Collaboration']
    },
    {
      title: 'Cisco - JavaScript Essentials 1',
      issuer: 'Cisco Networking Academy',
      type: 'Programming Certification',
      year: '2024',
      status: 'Completed',
      description: 'Fundamental JavaScript programming concepts, syntax, and basic programming principles.',
      skills: ['JavaScript', 'Programming Fundamentals', 'Web Development']
    },
    {
      title: 'Cisco - JavaScript Essentials 2',
      issuer: 'Cisco Networking Academy',
      type: 'Advanced Programming',
      year: '2024',
      status: 'Completed',
      description: 'Advanced JavaScript concepts including DOM manipulation, events, and modern ES6+ features.',
      skills: ['Advanced JavaScript', 'DOM Manipulation', 'ES6+', 'Web APIs']
    },
    {
      title: 'Cisco - Python Essentials 1',
      issuer: 'Cisco Networking Academy',
      type: 'Programming Certification',
      year: '2024',
      status: 'Completed',
      description: 'Python programming fundamentals, data structures, and algorithmic thinking.',
      skills: ['Python', 'Data Structures', 'Algorithms', 'Programming Logic']
    },
    {
      title: 'NPTEL - Joy of Computing Using Python',
      issuer: 'NPTEL (IIT/IISc)',
      type: 'Online Certification',
      year: '2024',
      status: 'Completed',
      description: 'Comprehensive Python programming course covering computational thinking and problem-solving.',
      skills: ['Python Programming', 'Computational Thinking', 'Problem Solving']
    },
    {
      title: 'Soft Skills Development Program',
      issuer: 'UNXT by Unnati',
      type: 'Professional Development',
      year: '2024',
      status: 'Completed',
      description: 'Enhanced communication, teamwork, and professional skills essential for workplace success.',
      skills: ['Communication', 'Leadership', 'Teamwork', 'Professional Skills']
    }
  ];

  return (
    <section id="certifications" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
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
            Certifications &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Continuous learning through professional certifications and training programs to stay current with industry trends
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 }
              }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="relative group"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              {/* Card */}
              <div className={`relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 ${
                cert.featured ? 'ring-2 ring-cyan-400/40' : ''
              }`}>
                {/* Featured Badge */}
                {cert.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white p-2 rounded-full shadow-lg">
                    <Star className="w-5 h-5 fill-current" />
                  </div>
                )}

                {/* Status & Year */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                      <Award className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex items-center gap-1 text-white/70 text-xs">
                      <Calendar size={12} />
                      {cert.year}
                    </div>
                  </div>

                  <div className={`flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
                    cert.status === 'Completed'
                      ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                      : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
                  }`}>
                    <CheckCircle className="w-4 h-4" />
                    {cert.status}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <div>
                    <h3 className="text-lg font-bold text-white mb-1 leading-tight">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-white/70 font-medium">
                      {cert.issuer}
                    </p>
                    <span className="inline-block mt-2 px-2 py-1 rounded text-xs font-medium bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-white/20 text-cyan-300">
                      {cert.type}
                    </span>
                  </div>

                  <p className="text-sm text-white/60 leading-relaxed">
                    {cert.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1">
                    {cert.skills.slice(0, 3).map((skill) => (
                      <span
                        key={skill}
                        className="px-2 py-1 bg-white/5 border border-white/10 text-white/70 rounded text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                    {cert.skills.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 border border-white/10 text-white/60 rounded text-xs">
                        +{cert.skills.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-2xl font-bold text-cyan-400 mb-2">8</div>
            <div className="text-sm text-white/70">Total Certifications</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-2xl font-bold text-cyan-400 mb-2">4</div>
            <div className="text-sm text-white/70">Programming Languages</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-2xl font-bold text-cyan-400 mb-2">2</div>
            <div className="text-sm text-white/70">Tech Certifications</div>
          </motion.div>
          
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
          >
            <div className="text-2xl font-bold text-cyan-400 mb-2">1</div>
            <div className="text-sm text-white/70">Professional Skills</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications;