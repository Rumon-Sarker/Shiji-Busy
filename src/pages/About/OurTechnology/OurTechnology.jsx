import CategoryTitle from "../../../components/CategoryTitle/CategoryTitle";

import swift from "../../../assets/Tecnelogy-Icon/swift.png";
import java from "../../../assets/Tecnelogy-Icon/java.png";
import javascript from "../../../assets/Tecnelogy-Icon/javascript.png";
import Kotlin from "../../../assets/Tecnelogy-Icon/Kotlin.png";
import php from "../../../assets/Tecnelogy-Icon/php.png";
import python from "../../../assets/Tecnelogy-Icon/python.png";
import ruby from "../../../assets/Tecnelogy-Icon/ruby.png";
import c from "../../../assets/Tecnelogy-Icon/CShearv.png";


const OurTechnology = () => {

    const techIocn = [
        {
            id: 1,
            title: "Swift",
            img: swift

        },
        {
            id: 2,
            title: "Ruby",
            img: ruby

        },
        {
            id: 3,
            title: "Python",
            img: python,

        },
        {
            id: 4,
            title: "php",
            img: php

        },
        {
            id: 5,
            title: "Kotlin",
            img: Kotlin

        },
        {
            id: 6,
            title: "JavaScript",
            img: javascript

        },
        {
            id: 7,
            title: "Java",
            img: java

        },
        {
            id: 8,
            title: "C#",
            img: c

        }

    ]

    return (
        <section>
            <CategoryTitle title={"Our Technology"} />
            <h3 className="text-xl my-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil iste magni eum dolores facilis, harum illo reprehenderit assumenda similique quibusdam quae impedit exercitationem saepe obcaecati ad quia! Excepturi, aliquid explicabo. Lorem ipsum dolor sit amet, consectetur adip sint distinctio optio laborioam. Quis alias reiciendis at repellendus odit saepe unde temporibus?</h3>


            {/* ============== 3 design =========== */}

            <div className="md:flex flex-row justify-evenly space-y-5 items-center">
                <div className="w-72 h-72 p-4 bg-gradient-to-br from-blue-800 to-yellow-300 rounded-3xl">
                    <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                        <p className="text-xl font-bold">AI</p>
                    </div>
                </div>
                <div className="w-72 h-72 p-4 bg-gradient-to-t from-blue-800 to-yellow-300 rounded-full">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <p className="text-xl font-bold">ERP Solution</p>
                    </div>
                </div>
                <div className="w-64 h-64 p-4 bg-gradient-to-b from-blue-700 to-blue-300 rounded-3xl transform rotate-45">
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-3xl">
                        <p className="text-xl font-bold -rotate-45">LOT</p>
                    </div>
                </div>
            </div>

            {/*========== Technology Tab ========= */}

            <div className="tabs shadow shadow-gray-400 p-4 my-16 font-bold px-12">
                <a className="tab text-blue-700 border-b-2 border-blue-700 text-base">Language</a>
                <a className="tab text-base">Frontend</a>
                <a className="tab text-base">UI/UX</a>
                <a className="tab text-base">DevOps/Server</a>
                <a className="tab text-base">Mobile</a>
                <a className="tab text-base">Services</a>
                <a className="tab text-base">Other Technologies</a>
            </div>


            {/* All img techIcon  */}

            <div>
                <div className="flex flex-row justify-evenly pb-12">
                    {
                        techIocn.map((icon) => (
                            <div key={icon.id}>
                                <img className="w-12" src={icon.img} alt="tech icon" />
                                <h3 className="my-3 text-lg font-semibold text-center">{icon.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </div>


        </section>
    );
};

export default OurTechnology;