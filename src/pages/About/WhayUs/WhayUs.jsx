import { HiUsers } from "react-icons/hi";
import CategoryTitle from "../../../components/CategoryTitle/CategoryTitle";
import { FcComboChart } from "react-icons/fc";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { BsCalendarDateFill } from "react-icons/bs";

const WhayUs = () => {

    const whayData = [
        {
            id: 1,
            icon: <FcComboChart />,
            title: "Completed Project",
            count: "100 +"

        },
        {
            id: 2,
            icon: <HiUsers />,
            title: "Customer Satisfaction",
            count: " 20 %"

        },
        {
            id: 3,
            icon: <HiMiniCurrencyDollar />,
            title: "Raised by Clients",
            count: "$10 M"

        },
        {
            id: 4,
            icon: <BsCalendarDateFill />,
            title: "Years in Buisness",
            count: "2 yrs"

        }
    ]
    return (
        <div>
            <CategoryTitle title="Whay us" />
            <h2 className="text-lg my-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit at quia excepturi magnam illo veritatis exercitationem accusantium sit ad. A eveniet iste possimus nemo sequi quia adipisci eius id cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corporis sit quis autem temporibus itaque eius vero unde quod delectus numquam, cupiditate voluptates. Eligendi recusandae quae esse quo libero suscipit?</h2>

            <div className="grid md:grid-cols-4 grid-cols-1 shadow shadow-slate-300 pb-20 text-blue-600 rounded-lg my-12 mx-40">

                {
                    whayData.map((item) => (
                        <div key={item.id} className="card rounded-none w-80 py-12 border-r-2">
                            <figure className="pt-10">
                                <h2 className="text-5xl">{item.icon}</h2>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="-mt-8">{item.title}</h3>
                                <h3 className="text-2xl pt-5 font-semibold">{item.count}</h3>
                            </div>
                        </div>
                    ))
                }

            </div>
        </div>
    );
};

export default WhayUs;