import { MdDarkMode } from "react-icons/md";
import NavLink from "../route/NavLink.jsx";
import logo from "../assets/react.svg";

const Navbar = () => {
    return (
        <nav className="bg-primary">
            <div className="container mx-auto px-6 lg:px-8 py-4 text-white">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <img className="h-8" src={logo} alt="logo" />

                    {/* Navigation Links */}
                    <div className="hidden lg:flex flex-grow justify-center">
                        <NavLink href="#">Services</NavLink>
                        <NavLink href="#">Portfolio</NavLink>
                        <NavLink href="#">Experience</NavLink>
                        <NavLink href="#">Blog</NavLink>
                    </div>

                    {/* Hamburger Menu for Small Screens */}
                    <div className="lg:hidden">
                        <button className="flex items-center text-white focus:outline-none">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                        </button>
                    </div>

                    {/* Right Side Content */}
                    <div className="hidden lg:flex items-center">
                        {/* Dark Mode Button */}
                        <div className="mr-6">
                            <MdDarkMode />
                        </div>
                        {/* Resume Button */}
                        <button className="btn-primary">Resume</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
