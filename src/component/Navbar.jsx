const Navbar =() => {
    return <>
        <nav className="bg-primary">
            <div className="max-w-1200 mx-auto py-6 px-6 text-white">
                <div className="flex justify-between ">
                    <img alt="logo"></img>
                   <div className="flex items-center gap-16">
                       <div>Services</div>
                       <div>Portfolio</div>
                       <div>Experience</div>
                       <div>Blog</div>
                   </div>
                  <div className="flex justify-between">
                      <img alt="dark-mode"></img>
                      <button className="bg-transparent hover:bg-blue-400 text-white font-semibold hover:text-white py-2 px-4 border border-white hover:border-transparent rounded">Resume</button>
                  </div>
                </div>
            </div>
        </nav>
    </>
}

export default Navbar;