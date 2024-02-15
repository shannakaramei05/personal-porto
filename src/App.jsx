
import './App.css'
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import Specialize from "./component/Specialize.jsx";
import WorkExperience from "./component/WorkExperience.jsx";

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <WorkExperience/>
        <Specialize/>
        {/*<Footer/>*/}
    </div>
  )
}

export default App
