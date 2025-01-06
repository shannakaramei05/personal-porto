import NavLink from "../route/NavLink.jsx";

const Navbar = () => {
    return (
        <nav className="shadow-md">
            <div className="container mx-auto px-6 lg:px-8 py-4 text-black">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <h1 className="flex items-center font-bold text-xl md:text-2xl">rahmatcristoper</h1>

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
                        <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-blue-500">Download Resume</button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
