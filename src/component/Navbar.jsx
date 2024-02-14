import { MdDarkMode } from "react-icons/md";
import NavLink from "../route/NavLink.jsx";
import logo from "../assets/react.svg"

const Navbar = () => {
    return (
        <nav className="bg-primary">
            <div className="container mx-auto px-6 lg:px-8 py-4 text-white">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <img className="" src={logo} alt="logo" />

                    {/* Navigation Links */}
                    <div className="flex-grow flex justify-center">
                        <NavLink href="#">Services</NavLink>
                        <NavLink href="#">Portfolio</NavLink>
                        <NavLink href="#">Experience</NavLink>
                        <NavLink href="#">Blog</NavLink>
                    </div>

                    {/* Right Side Content */}
                    <div className="flex items-center">
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