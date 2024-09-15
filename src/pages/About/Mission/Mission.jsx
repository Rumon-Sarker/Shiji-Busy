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
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto enim rerum dolor quasi placeat exercitationem voluptatibus nihil labore, ipsa tempora consequatur tempore? Ipsa veritatis eos sint quibusdam. Accusamus, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit.."
        },
        {
            id: 2,
            title: "Vision",
            icon: <HiOutlineLightBulb />,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto enim rerum dolor quasi placeat exercitationem voluptatibus nihil labore, ipsa tempora consequatur tempore? Ipsa veritatis eos sint quibusdam. Accusamus, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. ."
        },
        {
            id: 3,
            title: "Values",
            icon: <GiRibbonMedal />,
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iusto enim rerum dolor quasi placeat exercitationem voluptatibus nihil labore, ipsa tempora consequatur tempore? Ipsa veritatis eos sint quibusdam. Accusamus, blanditiis. Lorem ipsum dolor sit amet consectetur adipisicing elit. ."
        },
    ]
    return (
        <div>
            <CategoryTitle title="Mission Vision and Values" />
            <h1 className="text-xl my-12">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime dignissimos debitis dolorem quae aspernatur reiciendis laboriosam distinctio, vel ut odit, qui laudantium ipsam corrupti, mollitia dolores nobis et omnis quos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur, nobis? Odit quas, non tempora placeat similique vitae consequuntur ea nihil necessitatibus quis optio magni rem doloremque minima praesentium unde id.</h1>
            <div className="grid md:grid-cols-3 grid-cols-1 px-32">
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