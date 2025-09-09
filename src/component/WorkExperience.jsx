import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const WorkExperience = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const experiences = [
    {
      company: 'PT KEB Hana Bank Indonesia',
      position: 'Full-Stack Engineer',
      location: 'South Jakarta',
      period: 'May 2022 – Present',
      description: [
        'Developed and maintained web applications for transactions',
        'Created and managed RESTful APIs for frontend-backend communication',
        'Collaborated with teams to gather requirements and deliver software solutions',
        'Conducted testing to ensure all features function correctly and meet quality standards',
        'Assisted in application deployment and migration',
        'Performed tracing and troubleshooting to resolve errors in productions',
        'Handling server incidents promptly and efficiently'
      ],
      technologies: ['Java', 'Spring Boot', 'Spring Framework', 'REST API', 'SQL']
    },
    {
      company: 'Badan Pusat Statistik Dairi',
      position: 'Intern',
      location: 'Remote',
      period: 'July 2020 – August 2020',
      description: [
        'Forecasted production for next year in the agricultural sector',
        'Created report and insight based on data',
        'Researched alternative methods for forecasting'
      ],
      technologies: ['Data Analysis', 'Statistical Computing', 'Forecasting']
    }
  ];

  return (
    <section id="experience" className="section-padding bg-gray-50 dark:bg-dark-800">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        className="container mx-auto max-w-4xl"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            Work Experience
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 100 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ x: -50, opacity: 0 }}
              animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-dark-900 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Briefcase className="text-primary-500" size={20} />
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {exp.company}
                      </h3>
                    </div>
                    <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                      {exp.position}
                    </h4>
                  </div>
                  <div className="flex flex-col lg:items-end space-y-2">
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <Calendar size={16} />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                      <MapPin size={16} />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {exp.description.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={inView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                      transition={{ delay: 0.5 + i * 0.1 }}
                      className="flex items-start space-x-3 text-gray-700 dark:text-gray-300"
                    >
                      <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default WorkExperience;
