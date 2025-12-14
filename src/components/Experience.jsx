import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, TrendingUp } from 'lucide-react';

const Experience = () => {
  const experience = {
    title: 'Full-Stack Web Development Trainee',
    company: 'Technical Hub – Aditya College of Engineering and Technology',
    duration: 'June 2024 - June 2025',
    location: 'Surampalem, Andhra Pradesh',
    type: 'Training Program',
    description: 'Comprehensive hands-on training program focused on modern web development technologies and practices.',
    responsibilities: [
      'Completed intensive training in 6+ technologies including React.js, Node.js, and MongoDB',
      'Built and deployed 3+ responsive web applications during the training period',
      'Improved application navigation speed and user experience by approximately 25%',
      'Collaborated with fellow trainees on various project assignments',
      'Participated in code reviews and technical discussions',
      'Applied best practices in responsive design and modern web development'
    ],
    technologies: [
      'React.js', 'Node.js', 'MongoDB', 'JavaScript', 'HTML5', 'CSS3', 'Git'
    ],
    achievements: [
      'Built 3+ complete web applications',
      '25% improvement in UX metrics',
      'Mastered 6+ modern technologies',
      'Deployed production-ready apps'
    ]
  };

  return (
    <section id="experience" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-ping-slow"></div>
        <div className="absolute bottom-32 right-0 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-ping-slow delay-1000"></div>
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
            Professional{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Hands-on training in full-stack development with real-world projects and measurable impact
          </p>
        </motion.div>

        {/* Experience Card */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto"
        >
          <motion.div
            whileHover={{ y: -12, scale: 1.01 }}
            className="relative group"
          >
            {/* Hover Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:bg-white/10 transition-all duration-300">
              {/* Header Section */}
              <div className="flex flex-col md:flex-row md:items-start gap-6 mb-8">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center text-cyan-400 shadow-lg">
                    <Briefcase className="w-8 h-8" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span className="px-3 py-1 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 border border-cyan-500/30 text-cyan-300 rounded-full text-sm font-semibold">
                      {experience.type}
                    </span>
                    <div className="flex items-center gap-1 text-white/70 text-sm">
                      <Calendar size={14} />
                      {experience.duration}
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    {experience.title}
                  </h3>

                  <p className="text-xl text-white/70 font-medium mb-3">
                    {experience.company}
                  </p>

                  <div className="flex items-center gap-2 text-white/60">
                    <MapPin size={16} />
                    {experience.location}
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-white/60 text-lg leading-relaxed mb-8">
                {experience.description}
              </p>

              {/* Key Responsibilities */}
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                  <TrendingUp size={20} />
                  Key Responsibilities & Achievements
                </h4>
                <ul className="space-y-3">
                  {experience.responsibilities.map((resp, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-start gap-3 text-white/70"
                    >
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="leading-relaxed">{resp}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Technologies Used */}
              <div className="mb-8">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Technologies & Tools
                </h4>
                <div className="flex flex-wrap gap-3">
                  {experience.technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -4 }}
                      className="px-4 py-2 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-md border border-white/20 text-white rounded-full text-sm font-medium hover:from-cyan-500/30 hover:to-purple-500/30 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Achievements Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {experience.achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.08, y: -4 }}
                    className="text-center backdrop-blur-md bg-white/5 border border-white/10 rounded-xl p-4 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="text-cyan-400 font-bold text-sm mb-1">
                      {achievement.split(' ')[0]}
                    </div>
                    <div className="text-white/60 text-xs">
                      {achievement.split(' ').slice(1).join(' ')}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Looking Forward */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="inline-block backdrop-blur-md bg-gradient-to-r from-cyan-600/10 to-purple-600/10 border border-cyan-500/20 rounded-3xl p-8 shadow-lg shadow-cyan-500/20">
            <h3 className="text-xl font-semibold text-white mb-4">
              Looking Forward
            </h3>
            <p className="text-white/70 max-w-md leading-relaxed">
              Eager to apply my skills in a challenging full-stack or frontend development role 
              where I can contribute to innovative projects and continue growing as a developer.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;