import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      skills: ['JavaScript', 'Java', 'Python', 'C'],
    },
    {
      title: 'Web Technologies',
      skills: ['React.js', 'HTML/CSS', 'Node.js', 'Responsive Design'],
    },
    {
      title: 'Databases & Tools',
      skills: ['MongoDB', 'SQL', 'Git/GitHub', 'VS Code'],
    },
    {
      title: 'Soft Skills',
      skills: ['Communication', 'Problem Solving', 'Team Management', 'Quick Learning'],
    },
  ];

  const techStack = [
    'JavaScript ES6+', 'React.js', 'Node.js', 'MongoDB',
    'HTML5', 'CSS3', 'TailwindCSS', 'Git', 'GitHub',
    'VS Code', 'Responsive Design', 'REST APIs'
  ];

  return (
    <section id="skills" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 py-20">
      {/* Animated Background Blobs - Matching Hero */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-pink-600/20 to-cyan-600/20 blur-3xl animate-pulse"></div>
        <div className="absolute top-20 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-3xl animate-ping-slow"></div>
        <div className="absolute bottom-32 right-0 w-80 h-80 bg-cyan-500/30 rounded-full blur-3xl animate-ping-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/30 rounded-full blur-3xl animate-ping-slow delay-2000"></div>
      </div>

      {/* Subtle Glass Overlay */}
      <div className="absolute inset-0 backdrop-blur-xl bg-black/40"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Skills &{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Expertise
            </span>
          </h2>
          <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            Here are the technologies and skills I've mastered through academic projects and hands-on development.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              variants={{
                hidden: { opacity: 0, y: 60 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500"></div>
              <div className="relative backdrop-blur-md bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2">
                <h3 className="text-2xl font-semibold text-white mb-6">{category.title}</h3>
                <ul className="space-y-4">
                  {category.skills.map((skill) => (
                    <li
                      key={skill}
                      className="text-white/80 font-medium text-lg bg-white/5 px-4 py-3 rounded-xl border border-white/10 hover:bg-white/10 hover:text-cyan-300 transition-all duration-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Tech Stack Tags */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center"
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-10">
            Technologies I Work With
          </h3>
          <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto">
            {techStack.map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.15, y: -4 }}
                className="px-6 py-3 bg-gradient-to-r from-cyan-600/20 to-purple-600/20 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:from-cyan-500/30 hover:to-purple-500/30 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300 cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;