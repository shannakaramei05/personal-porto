
import './App.css'
import Header from "./component/Header.jsx";
import Footer from "./component/Footer.jsx";
import Navbar from "./component/Navbar.jsx";
import Hero from "./component/Hero.jsx";

function App() {
  return (
    <div className="bg-primary">
        <Navbar></Navbar>
        <Hero/>
        {/*<Header/>*/}
        {/*<Footer/>*/}
    </div>
  )
}

export default App
