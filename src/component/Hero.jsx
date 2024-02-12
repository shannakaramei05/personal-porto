const Hero = () => {
    return <>
      <div className="w-full-1200 py-12 px-12">
          <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="flex items-center gap-2">
                    <p className="text-4xl text-white font-extrabold ">-</p>
                    <p className="text-gray-400 text-md mt-2">MY NAME IS</p>
                </div>
                  <p className="text-white font-semibold text-2xl">Rahmat <span className="text-purple-500">Sinambela.</span></p>
                  <div className="text-gray-400 text-sm mt-2 break-words">
                      <p>Experienced Software Developer with a 2-year Java background,</p>
                      <p> committed to developing secure and scalable solutions.</p>
                      <p>Enthusiastic about technology and a fast learner.</p>
                  </div>
              </div>
              <div>
                  <img className="h-full w-[120px]" src="https://plus.unsplash.com/premium_photo-1671656349322-41de944d259b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="PROFILE PHOTO" />
              </div>
          </div>

      </div>
    </>
}

export default Hero;