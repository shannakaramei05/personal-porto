import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code } from 'lucide-react';

const Projects = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const projects = [
    {
      title: 'Banking Transaction System',
      description: 'Web applications for financial transactions at Hana Bank with secure authentication and real-time processing.',
      technologies: ['Java', 'Spring Boot', 'Spring Framework', 'SQL', 'REST API'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/shannakaramei05',
      demo: '#',
      featured: true
    },
    {
      title: 'Rice Production Forecasting',
      description: 'Thesis project: Forecasting Rice Production in Dairi Using Fuzzy Time Series with statistical analysis and machine learning.',
      technologies: ['Statistical Computing', 'Machine Learning', 'Time Series', 'Data Analysis'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/shannakaramei05',
      demo: '#',
      featured: true
    },
    {
      title: 'Portfolio Website',
      description: 'Modern responsive portfolio website built with React and Tailwind CSS featuring dark mode and smooth animations.',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Vite'],
      image: '/api/placeholder/400/250',
      github: 'https://github.com/shannakaramei05',
      demo: 'https://personal-porto-silk.vercel.app/',
      featured: false
    }
  ];

  return (
    <section id="projects" className="section-padding bg-white dark:bg-dark-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 100 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ y: 50, opacity: 0 }}
              animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-gray-50 dark:bg-dark-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                  <Code className="text-white" size={48} />
                </div>
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <motion.a
                    href={project.github}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <Github size={20} />
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="px-2 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-xs font-medium rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 bg-gray-200 dark:bg-dark-700 text-gray-700 dark:text-gray-300 text-xs rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary">
            View All Projects
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;