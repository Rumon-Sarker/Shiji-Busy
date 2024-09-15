


const MissionCard = ({ data }) => {

    const { title, icon, desc } = data;


    return (


        <div className="relative w-[400px] rotate-180 h-[600px] bg-blue-500 clip-pentagon flex p-3  text-white mx-auto">
            <div className="text-lg text-center rotate-180">
                <div className="text-[100px] justify-center flex ">{icon}</div>
                <h2 className="text-3xl my-4">{title}</h2>
                <p>{desc}</p>
            </div>
        </div>

    );
};

export default MissionCard;