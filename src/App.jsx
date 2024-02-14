
import './App.css'
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";
import Specialize from "./component/Specialize.jsx";

function App() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Specialize/>
        {/*<Footer/>*/}
    </div>
  )
}

export default App
