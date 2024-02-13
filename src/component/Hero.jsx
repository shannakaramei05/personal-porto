import profile from "../assets/profile.png";
import {SlSocialGithub,SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram} from "react-icons/sl"

const Hero = () => {
    return <>
        <section className="container mx-auto max-w-max">
            <div className="flex mt-24 gap-16 items-center">
                <div className="">
                       <div className="uppercase tracking-widest">-My Name IS</div>
                       <h1 className="font-semibold text-4xl">Rahmat Sinambela</h1>
                       <p>Experienced Software Developer with a 2-year Java background,</p>
                       <p> committed to developing secure and scalable solutions.</p>
                       <p>Enthusiastic about technology and a fast learner.</p>
                    <div className="flex items-center justify-start pt-2 space-x-6 ">
                        <div><SlSocialInstagram size={25}/></div>
                        <div><SlSocialGithub size={25}/></div>
                        <div><SlSocialTwitter size={25}/></div>
                        <div><SlSocialLinkedin size={25}/></div>
                    </div>
                </div>
                <div>
                    <img className="h-72 w-64 object-cover rounded-b-full ring-4 ring-amber-200" src={profile} alt="PROFILE PHOTO" />
                </div>
            </div>
        </section>
    </>
}

export default Hero;