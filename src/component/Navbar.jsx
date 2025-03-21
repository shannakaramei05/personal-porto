import {useState} from "react";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Link} from "react-router-dom";

const Navbar = () => {

    const [nav, setNav] = useState(true);

    const handleNav = () => {
        setNav(!nav)
    }

    const scrollToSection = (id) => {
        document.getElementById(id).scrollIntoView({ behavior: "smooth" });
    };

    return (
        <nav className="bg-primary text-white">
            <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4">
                <h1 className="w-full text-3xl font-bold uppercase">Rahmat C S</h1>
                <ul className="hidden md:flex gap-4">
                    <li><button onClick={() => scrollToSection("about")} className="hover:text-gray-400">Home</button></li>
                    <li><button onClick={() => scrollToSection("about")} className="hover:text-gray-400">About</button></li>
                    <li><button onClick={() => scrollToSection("skills")} className="hover:text-gray-400">Services</button></li>
                    <li><button onClick={() => scrollToSection("portfolio")} className="hover:text-gray-400">Portfolio</button></li>
                </ul>
                <div onClick={handleNav} className="block md:hidden">
                    {!nav ?  <AiOutlineClose size={20}/> : <AiOutlineMenu size={20}/>}
                </div>
                <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-primary" : "fixed left-[-100%]"}>
                    <h1 className="w-full text-3xl font-bold uppercase text-white m-4">Rahmat C S</h1>
                    <ul className="uppercase">
                        <li className="p-4 border-b border-gray-600">Home</li>
                        <li className="p-4 border-b border-gray-600">About</li>
                        <li className="p-4 border-b border-gray-600">Services</li>
                        <li className="p-4 border-b border-gray-600">Portfolio</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
