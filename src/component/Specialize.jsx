import { FaJava,FaReact } from "react-icons/fa";
import { IoIosApps } from "react-icons/io";
import Card from "../layout/Card.jsx";

const talent = [
    {
        title: "Back-end Developer",
        icon: FaJava,
        desc: "Optimize system code and flow and Write well-designed, testable, efficient code by using the best software development practices"
    },
    {
        title: "Application Development",
        icon: IoIosApps,
        desc: "Standard designing, building, and implementing your application with documentation"
    },
    {
        title: "Web Development",
        icon: FaReact,
        desc: "Create and Maintain your websites and also take care of its performance and traffic capacity."
    }
];
const Specialize = () => {
    return <>
        <section className="mt-24 px-6 lg:px-0">
            <div className="container mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Specialize</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {talent.map((item, index) => (
                        <div key={index} className="flex flex-col h-full">
                            <Card
                                icon={item.icon}
                                title={item.title}
                                desc={item.desc}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    </>
}

export default Specialize;