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
        <section>
            <div className="flex">
                {talent.map((item,index)=> (
                        <Card
                            key={index}
                            icon={item.icon}
                            title={item.title}
                            desc={item.desc}
                        />
                    )
                )}
            </div>
        </section>
    </>
}

export default Specialize;