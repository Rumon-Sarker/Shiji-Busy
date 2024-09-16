
const MissionCard = ({ data }) => {

    const { title, icon, desc } = data;


    return (


        <div className="relative sm:w-[280px] md:w-[280px] lg:w-[300px] lgl:w-[300px] rotate-180 sm:h-[280px] md:h-[320px] lgl:h-[500px] lgl: bg-blue-500 clip-pentagon flex p-3  text-white mx-auto">
            <div className="sm:text-sm md:text-md lg:text-lg text-center rotate-180">
                <div className="sm:text-5xl md:text-7xl lg:text-[100px] justify-center flex">{icon}</div>
                <h2 className="sm:text-xl md:text-2xl lg:text-3xl lg:my-4">{title}</h2>
                <p className="sm:text-sm lg:text-md">{desc}</p>
            </div>
        </div>

    );
};

export default MissionCard;