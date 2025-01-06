import profile from "../assets/profile.png";
import { SlSocialGithub, SlSocialTwitter, SlSocialLinkedin, SlSocialInstagram } from "react-icons/sl";

const Hero = () => {
    return (
        <section className="container mx-auto h-screen max-w-3xl px-6 lg:px-0 mt-24">
            <div className="flex flex-col lg:flex-row gap-16 items-center">
                <div className="text-center lg:text-left">
                    <div className="uppercase tracking-widest text-gray-400">- My Name Is</div>
                    <h1 className="font-semibold text-4xl mt-4">Rahmat Sinambela</h1>
                    <p className="mt-4 text-gray-600">
                        Experienced Software Developer with a 2-year Java background,
                        committed to developing secure and scalable solutions.
                        Enthusiastic about technology and a fast learner.
                    </p>
                    <div className="flex items-center justify-center lg:justify-start mt-6 space-x-6">
                        <div><a href="https://www.instagram.com/rahmatcristoper/" target="_blank"><SlSocialInstagram size={25} /></a></div>
                        <div><a href="https://github.com/shannakaramei05" target="_blank"><SlSocialGithub size={25} /></a></div>
                        <div><a href="https://twitter.com/agreatliar_" target="_blank"><SlSocialTwitter size={25} /></a></div>
                        <div><a href="https://www.linkedin.com/in/rahmatsinambela/" target="_blank"><SlSocialLinkedin size={25} /></a></div>
                    </div>
                </div>
                <div className="mt-12 lg:mt-0">
                    <img className="h-auto w-full max-w-xs lg:max-w-none mx-auto border-4 border-white rounded-b-full shadow-lg" src={profile} alt="PROFILE PHOTO" />
                </div>
            </div>
        </section>
    );
}

export default Hero;