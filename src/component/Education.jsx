import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="education" className="section-padding bg-white dark:bg-dark-900">
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
            Education
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            animate={inView ? { width: 100 } : { width: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="h-1 bg-gradient-to-r from-primary-500 to-primary-600 mx-auto rounded-full"
          />
        </div>

        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-50 dark:bg-dark-800 rounded-2xl p-8 shadow-lg"
        >
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
            <div className="flex-1">
              <div className="flex items-center space-x-2 mb-2">
                <GraduationCap className="text-primary-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Universitas Padjadjaran
                </h3>
              </div>
              <h4 className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-3">
                Bachelor Degree in Statistics
              </h4>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                GPA: 3.23
              </p>
            </div>
            <div className="flex flex-col lg:items-end space-y-2">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <Calendar size={16} />
                <span className="text-sm">August 2021</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin size={16} />
                <span className="text-sm">Jatinangor</span>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Coursework</h5>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Studied Analysis, Visualization, Interpretation data, Probability, Mathematical Statistics, 
              Econometrics, Big Data, Time Series, Machine Learning, and Statistical Computing.
            </p>
          </div>

          <div className="mb-6">
            <h5 className="font-semibold text-gray-900 dark:text-white mb-3">Thesis</h5>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              "Forecasting Rice Production in Dairi Using Fuzzy Time Series" - Applied advanced statistical 
              methods and machine learning techniques for agricultural production forecasting.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {['Statistics', 'Data Analysis', 'Machine Learning', 'Time Series', 'Big Data', 'Econometrics'].map((subject) => (
              <span
                key={subject}
                className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 rounded-full text-sm font-medium"
              >
                {subject}
              </span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Education;