import { MdDarkMode } from "react-icons/md";
const Navbar =() => {
    return <>
        <nav className="bg-primary">
            <div className="max-w-1200 mx-auto py-4 px-8 text-white">
                <div className="flex justify-between w-full">
                    <img className="w-1/4" alt="logo"></img>
                   <div className="flex items-center w-2/4 justify-center gap-10">
                       <div>Services</div>
                       <div>Portfolio</div>
                       <div>Experience</div>
                       <div>Blog</div>
                   </div>
                  <div className="flex items-center w-1/4 justify-end   ">
                      <div className="mr-12"><MdDarkMode/></div>
                      <button className="bg-transparent hover:bg-blue-400 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">Resume</button>
                  </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;