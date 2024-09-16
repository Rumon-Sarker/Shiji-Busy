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
            <h2 className="sm:text-sm md:text-md lg:text-lg sm:my-6 md:my-8 lg:my-12">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit at quia excepturi magnam illo veritatis exercitationem accusantium sit ad. A eveniet iste possimus nemo sequi quia adipisci eius id cum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, corporis sit quis autem temporibus itaque eius vero unde quod delectus numquam, cupiditate voluptates. Eligendi recusandae quae esse quo libero suscipit?</h2>

            <div className="grid sm:grid-cols-1 md:grid-cols-4 lg:grid-cols-4 shadow shadow-slate-300 sm:pb-12 md:pb-16 lg:pb-20 text-blue-600 rounded-lg lg:mx-32">

                {
                    whayData.map((item) => (
                        <div key={item.id} className="card rounded-none py-12 md:border-r-2 sm:border-0">
                            <figure className="lg:pt-10">
                                <h2 className="sm:text-3xl md:text-4xl lg:text-5xl">{item.icon}</h2>
                            </figure>
                            <div className="card-body items-center text-center">
                                <h3 className="sm:text-sm md:text-xl lg:-mt-8">{item.title}</h3>
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