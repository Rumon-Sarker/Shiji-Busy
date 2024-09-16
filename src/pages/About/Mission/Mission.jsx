import { HiOutlineLightBulb } from "react-icons/hi";
import CategoryTitle from "../../../components/CategoryTitle/CategoryTitle";
import MissionCard from "./MissionCard";
import { PiTargetBold } from "react-icons/pi";
import { GiRibbonMedal } from "react-icons/gi";


const Mission = () => {

    const missionData = [
        {
            id: 1,
            title: "Mission",
            icon: <PiTargetBold />,
            desc: "Lorem ipsum dolor sit amet consei placeat exercitationem voluptatibus nihil labore, ipsa tempora consequatur tempore? Ipsa veritatis eos sint quibusdam. Accusamus, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.."
        },
        {
            id: 2,
            title: "Vision",
            icon: <HiOutlineLightBulb />,
            desc: "Lorem ipsum dolor sit amet consecsi placeat exercitationem voluptatibus nihil labore, ipsa tempora consequatur tempore? Ipsa veritatis eos sint quibusdam. Accusamus, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. ."
        },
        {
            id: 3,
            title: "Values",
            icon: <GiRibbonMedal />,
            desc: "Lorem ipsum dolor sit amet consectetur atationem voluptatibus nihil labore, ipsa tempora consequatur tempore? Ipsa veritatis eos sint quibusdam. Accusamus, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. ."
        },
    ]
    return (
        <div>
            <CategoryTitle title="Mission Vision and Values" />
            <h1 className="sm:text-sm md:text-md lg:text-lg sm:my-6 md:my-8 lg:my-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos debitis dolorem quae aspernatur reiciendis laboriosam distinctio, vel ut odit, qui laudantium ipsam corrupti, mollitia dolores nobis et omnis quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, nobis? Odit quas, non tempora placeat similique vitae consequuntur ea nihil necessitatibus quis optio magni rem doloremque minima praesentium unde id.</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lgl:px-64">
                {
                    missionData.map((data) => (
                        <MissionCard
                            key={data.id}
                            data={data}

                        />
                    ))
                }
            </div>



        </div>
    );
};

export default Mission;