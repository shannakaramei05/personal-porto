import { ThemeProvider } from './context/ThemeContext';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import About from './component/About';
import Education from './component/Education';
import WorkExperience from './component/WorkExperience';
import Projects from './component/Projects';
import Contact from './component/Contact';
import Footer from './component/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 text-gray-900 dark:text-white transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Education />
          <WorkExperience />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;
