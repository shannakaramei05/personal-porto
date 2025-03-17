
import './App.css'
import Footer from "./component/Footer.jsx";
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import Specialize from "./component/Specialize.jsx";
import WorkExperience from "./component/WorkExperience.jsx";
import PersonalProject from "./component/PersonalProject.jsx";

function App() {
  return (
    <div>
        <Navbar/>
        <section id="home" ><Hero/></section>
        <section id="about" ><WorkExperience/></section>
        <section id="skills" ><Specialize/></section>
        <section id="portfolio" ><PersonalProject/></section>



        <Footer/>
    </div>
  )
}

export default App
