import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import oneStopImage from '@/assets/project-OneStop.png';
import eventoraImage from '@/assets/project-eventora.png';
import etrackImage from '@/assets/project-etrack.png';
import portfolio from '@/assets/portfolio.png'

const Projects = () => {
  const projects = [
    {
      title: 'OneStop - Job Portal',
      description: 'A comprehensive web portal for job and resource aggregation, centralizing 100+ job/resource links with enhanced user engagement through reusable sidebar and smooth navigation.',
      image: oneStopImage,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      duration: 'February 2025 - March 2025',
      highlights: [
        'Centralized 100+ job/resource links',
        'Reduced click depth by 30%',
        'Reusable sidebar navigation'
      ],
      liveUrl: 'https://onestop-5kwj.vercel.app/',
      githubUrl: 'https://github.com/sandhyakorimi/OneStop'
    },
    {
      title: 'Eventora - Event Management',
      description: 'A modern event management web application enabling 50+ users to explore, plan, and register for events with responsive layouts and optimized performance.',
      image: eventoraImage,
      technologies: ['React', 'CSS', 'JavaScript'],
      duration: 'March 2025 - May 2025',
      highlights: [
        '50+ active users',
        '20% faster load speed',
        'Responsive design',
        'Event registration system'
      ],
      liveUrl: '#',
      githubUrl: 'https://github.com/sandhyakorimi/Eventora'
    },
    {
      title: 'ETrack - Property Management',
      description: 'A full-stack asset management platform with barcode search functionality and categorized inventory, aiming to reduce manual tracking time by 40%.',
      image: etrackImage,
      technologies: ['React', 'Node.js', 'MongoDB'],
      duration: 'May 2025 - June 2025',
      highlights: [
        'Barcode search functionality',
        '40% reduction in tracking time',
        'Real-time updates',
        'Automated logs'
      ],
      liveUrl: 'https://e-track-project.vercel.app/',
      githubUrl: 'https://github.com/sandhyakorimi/Etrack_Management'
    },
    {
      title: 'Portfolio - Website',
      description: 'A personal portfolio website showcasing my projects, skills, and experience with a responsive and modern design.',
      image: portfolio,
      technologies: ['React', 'JavaScript', 'Tailwind Css'],
      duration: 'November 2025 - December 2025',
      highlights: [
        'Clean User Interface',
        'Fast Navigation Experience',
        'Professional Web Presence',
        'Responsive Modern Design'
      ],
      liveUrl: 'https://porfolio-eta-indol.vercel.app/',
      githubUrl: 'https://github.com/sandhyakorimi/Porfolio'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden bg-gradient-to-br from-gray-900 via-purple-900/80 to-gray-900">
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
        {/* Header - Same font sizes as original */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-gradient">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-6 opacity-70" />
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            A showcase of my recent work in web development, demonstrating my skills in creating responsive and user-friendly applications
          </p>
        </motion.div>

        {/* Projects Grid - Same layout & font sizes */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid lg:grid-cols-1 gap-12"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
            >
              {/* Project Image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''} relative group overflow-hidden rounded-2xl`}
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>

              {/* Project Details - Same font sizes */}
              <div className={`${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''} space-y-6`}>
                <div>
                  <div className="flex items-center gap-2 text-cyan-400 text-sm font-medium mb-2">
                    <Calendar size={16} />
                    {project.duration}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed text-white/80">
                    {project.description}
                  </p>
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/5 backdrop-blur-md border border-white/10 text-white/80 rounded-full text-sm font-medium hover:bg-white/10 hover:border-cyan-400/50 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlights */}
                <div>
                  <h4 className="text-sm font-semibold text-pink-400 mb-3 uppercase tracking-wider">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-white/70">
                        <div className="w-1.5 h-1.5 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mt-2 flex-shrink-0" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons - Styled like Hero */}
                <div className="flex gap-4">
                  {project.liveUrl !== '#' && (
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button
                        variant="default"
                        size="sm"
                        className="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-500 hover:to-purple-500 text-white font-medium shadow-lg hover:shadow-cyan-500/50"
                      >
                        <ExternalLink size={16} className="mr-2" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-2 border-white/30 text-black backdrop-blur-sm hover:bg-white/10 hover:border-cyan-400 hover:text-cyan-300 transition-all duration-300"
                    >
                      <Github size={16} className="mr-2" />
                      Source Code
                    </Button>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA - Updated colors */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mt-16"
        >
          <p className="text-white/70 mb-6">
            Want to see more of my work? Check out my GitHub for additional projects and contributions.
          </p>
          <a href="https://github.com/sandhyakorimi" target="_blank" rel="noopener noreferrer">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-white/30 text-black backdrop-blur-sm hover:bg-white/10 hover:border-purple-400 hover:text-purple-300 transition-all duration-300"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;