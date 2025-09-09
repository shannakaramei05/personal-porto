import { motion } from 'framer-motion';
import { Github, Linkedin, Instagram, Twitter, ArrowDown, Sparkles } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import profile from "../assets/profile-no-bg.png";

const Hero = () => {
  const [ref, inView] = useInView({ threshold: 0.1, triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const socialLinks = [
    { icon: Instagram, href: "https://www.instagram.com/rahmatcristoper/", label: "Instagram" },
    { icon: Github, href: "https://github.com/shannakaramei05", label: "GitHub" },
    { icon: Twitter, href: "https://twitter.com/agreatliar_", label: "Twitter" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/rahmatsinambela/", label: "LinkedIn" },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center section-padding pt-24 sm:pt-32 bg-gradient-to-br from-gray-50 via-white to-primary-50 dark:from-dark-900 dark:via-dark-800 dark:to-dark-900">
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="container mx-auto max-w-6xl"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={itemVariants}
            className="flex justify-center lg:justify-end order-1 lg:order-2"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 bg-gradient-to-r from-primary-500 to-primary-600 rounded-full opacity-20 blur-xl"
              />
              <motion.img
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                src={profile}
                alt="Rahmat Cristoper"
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 object-cover rounded-full shadow-2xl border-4 border-white dark:border-dark-700"
              />
            </div>
          </motion.div>
          
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-2">
              <Sparkles className="text-primary-500" size={20} />
              <span className="uppercase tracking-widest text-sm font-medium text-gray-500 dark:text-gray-400">
                Software Engineer
              </span>
            </motion.div>
            
            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl lg:text-7xl font-bold">
              <span className="text-gray-900 dark:text-white">Hi, I'm </span>
              <span className="bg-gradient-to-r from-primary-500 via-primary-600 to-primary-700 bg-clip-text text-transparent">
                Rahmat Sinambela
              </span>
            </motion.h1>
            
            <motion.p variants={itemVariants} className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mx-auto lg:mx-0">
              Full Stack Engineer with 2 years of experience in web application development for banking. Focused on creating secure and efficient solutions. Quick learner with a passion for technology.
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="btn-primary">
                Get In Touch
              </button>
              <button className="btn-secondary">
                View My Work
              </button>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center justify-center lg:justify-start space-x-6 pt-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 rounded-full bg-white dark:bg-dark-800 shadow-lg hover:shadow-xl transition-all duration-300 text-gray-700 dark:text-gray-300 hover:text-primary-500"
                >
                  <Icon size={20} />
                </motion.a>
              ))}
            </motion.div>
          </div>
        </div>
        
        <motion.div
          variants={itemVariants}
          className="flex justify-center mt-16"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-gray-400 dark:text-gray-500"
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;