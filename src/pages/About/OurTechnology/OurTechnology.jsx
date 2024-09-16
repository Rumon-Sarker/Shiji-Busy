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
            <h3 className="sm:text-sm md:text-md lg:text-lg sm:my-6 md:my-8 lg:my-12">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil iste magni eum dolores facilis, harum illo reprehenderit assumenda similique quibusdam quae impedit exercitationem saepe obcaecati ad quia! Excepturi, aliquid explicabo. Lorem ipsum dolor sit amet, consectetur adip sint distinctio optio laborioam. Quis alias reiciendis at repellendus odit saepe unde temporibus?</h3>


            {/* ============== 3 design =========== */}

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center">
                <div className="sm:w-40 md:w-52 lg:w-72 lg:h-72 md:h-52 sm:h-40 sm:p-2 md:p-3 lg:p-4 bg-gradient-to-br from-blue-800 to-yellow-300 rounded-3xl mx-auto">
                    <div className="w-full h-full bg-white rounded-3xl flex items-center justify-center">
                        <p className="text-xl font-bold">AI</p>
                    </div>
                </div>
                <div className="sm:w-40 md:w-52 lg:w-72 lg:h-72 sm:my-12 md:h-52 sm:h-40 sm:p-2 md:p-3 lg:p-4 bg-gradient-to-t from-blue-800 to-yellow-300 rounded-full mx-auto">
                    <div className="w-full h-full bg-white rounded-full flex items-center justify-center">
                        <p className="text-xl font-bold">ERP Solution</p>
                    </div>
                </div>
                <div className="sm:w-40 md:w-52 lg:w-64 lg:h-64 md:h-52 sm:h-40 sm:p-2 md:p-3 lg:p-4 bg-gradient-to-b from-blue-700 to-blue-300 rounded-3xl transform rotate-45 mx-auto">
                    <div className="flex items-center justify-center w-full h-full bg-white rounded-3xl">
                        <p className="text-xl font-bold -rotate-45">LOT</p>
                    </div>
                </div>
            </div>

            {/*========== Technology Tab ========= */}

            <div className="tabs shadow shadow-gray-400 p-4 my-16 font-bold px-3">
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