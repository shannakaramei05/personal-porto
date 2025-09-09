import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Database, Server, Zap } from 'lucide-react';

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const skills = [
    { icon: Code, name: 'Frontend', desc: 'Next.js, JavaScript, React' },
    { icon: Server, name: 'Backend', desc: 'Java Spring Boot, Express.js' },
    { icon: Database, name: 'Database', desc: 'SQL, Data Analysis' },
    { icon: Zap, name: 'DevOps', desc: 'CI/CD, Automation, Shell Script' },
  ];

  return (
    <section id="about" className="section-padding bg-white dark:bg-dark-900">
      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto max-w-6xl"
      >
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 30, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 100 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: 50, opacity: 0 }}
            transition={{ delay: 0.5 }}
            className="grid grid-cols-2 gap-6 order-1 lg:order-2"
          >
            {skills.map(({ icon: Icon, name, desc }, index) => (
              <motion.div
                key={name}
                initial={{ y: 30, opacity: 0 }}
                animate={inView ? { y: 0, opacity: 1 } : { y: 30, opacity: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="p-6 bg-gray-50 dark:bg-dark-800 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <Icon className="text-primary-500 mb-3" size={32} />
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">{name}</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ x: -50, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : { x: -50, opacity: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-6 order-2 lg:order-1"
          >
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
              Passionate Fullstack Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Statistics graduate from Universitas Padjadjaran with expertise in data analysis and machine learning. 
              Currently working as a Full Stack Engineer at PT KEB Hana Bank Indonesia, developing secure banking 
              applications and managing APIs. Passionate about automation, CI/CD, and creating efficient solutions.
            </p>
            <div className="flex flex-wrap gap-3">
              {['Java', 'Spring Boot', 'Next.js', 'Express.js', 'SQL', 'Shell Script'].map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;