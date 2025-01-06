
import './App.css'
import profile from "./assets/profile-no-bg.png";
import {SlSocialGithub, SlSocialInstagram, SlSocialLinkedin, SlSocialTwitter} from "react-icons/sl";

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
       <div className="shadow-md sticky top-0 z-50">
         <div className="hidden mx-auto container px-8 py-4 md:flex items-center justify-between">
           <h1 className="text-xl font-bold md:text-2xl">rahmatcristoper</h1>
           <div className="flex space-x-8 text-bold hover:text-gray-600">
             <a href="/">Home</a>
             <a href="#experience">Experience</a>
             <a href="#service">Services</a>
             <a href="#portfolio">Portfolio</a>
             <a href="#blog">Blog</a>
             <a href="#contact">Contact</a>
           </div>
           <div>
             <button className="btn bg-primary text-white px-6 py-2 rounded-full hover:bg-blue-500">Download CV</button>
           </div>
         </div>
       </div>

      {/*Hero*/}
       <section id="about">
         <div className="flex items-center">
           <div className="container mx-auto px-8 flex flex-wrap items-center bg-gray-200">
             <div className="w-full md:w-1/2 mb-8 md:mb-0">
               <h1 className="text-4xl text-center md:text-5xl md:text-left font-bold text-gray-800">
                 Hii, I'm Rahmat Cristoper
               </h1>
               <p className="text-center md:text-justify text-lg text-gray-600 mt-4">
                 A skilled software engineer with experience in Java Springboot.
                 Focused on creating efficient and reliable applications, collaborating with teams, and delivering quality solutions.
                 Passionate about learning new technologies and improving software performance.
               </p>
               <div className="flex items-center justify-center lg:justify-start mt-6 space-x-6">
                 <div><a href="https://www.instagram.com/rahmatcristoper/" target="_blank"><SlSocialInstagram size={25} /></a></div>
                 <div><a href="https://github.com/shannakaramei05" target="_blank"><SlSocialGithub size={25} /></a></div>
                 <div><a href="https://twitter.com/agreatliar_" target="_blank"><SlSocialTwitter size={25} /></a></div>
                 <div><a href="https://www.linkedin.com/in/rahmatsinambela/" target="_blank"><SlSocialLinkedin size={25} /></a></div>
               </div>
             <div className="mt-6 flex items-center justify-center lg:justify-start">
                 <button className="btn bg-primary text-white px-6 py-2 hover:bg-blue-500">Hire Me</button>
             </div>
             </div>
             <div className="w-full md:w-1/2 flex justify-center"> <img src={profile} alt="Your Photo" className="rounded-lg"/> </div>
           </div>
         </div>
       </section>
      <section id="experience" className="py-8 px-4 md:px-8 bg-white">
          <h1 className="text-4xl text-center font-bold md:text-5xl py-6 mb-4">Work Experience</h1>
          <div className="container mx-auto space-y-8">
              <div className="border-b pb-6">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                          <h2 className="text-xl font-semibold">PT KEB Hana Bank Indonesia</h2>
                      </div>
                      <div className="text-gray-500 mt-2 md:mt-0 text-sm">
                          South Jakarta
                      </div>
                  </div>
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center">
                      <div>
                          <h2 className="text-xl italic">Fullstack Engineer </h2>
                      </div>
                      <div className="text-gray-500 mt-2 md:mt-0 text-sm">
                          May 2022 - Present
                      </div>
                  </div>
                  <div className="text-gray-700 mt-4 leading-relaxed text-justify">
                      <ul className="list-disc px-4 py-2 md:px-8 leading-relaxed">
                          <li>
                              Developed and maintained web applications for transactions.
                          </li>
                          <li>
                              Created and managed RESTful APIs for frontend-backend communication.
                          </li>
                          <li>
                              Collaborated with teams to gather requirements and deliver software solutions
                          </li>
                          <li>
                              Conducted testing to ensure all features function correctly and meet quality standards
                          </li>
                          <li>
                              Assisted in application deployment and migration
                          </li>
                          <li>
                              Performed tracing and troubleshooting to resolve errors in productions
                          </li>
                          <li>
                              Handling server incidents promptly and efficiently
                          </li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>

      <section id="hero" className="bg-gray-200">
          <div className="container mx-auto px-8">
            <h1 className="text-3xl font-bold text-center">My Hero Story</h1>
            <p className="text-center text-lg text-gray-600">
              I've always been fascinated by the world of software development. I started learning Java in my early 20s and quickly became hooked.
              I've worked on various projects, from small to large, and I've always enjoyed the challenge of creating something that solves real-world problems.
            </p>
          </div>
      </section>

      <section id="blog">
        <div></div>
      </section>
    </div>
  )
}

export default App
