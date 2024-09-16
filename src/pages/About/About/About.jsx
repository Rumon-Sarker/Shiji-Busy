import Mission from "../Mission/Mission";
import OurTechnology from "../OurTechnology/OurTechnology";
import WeAre from "../WeAre/WeAre";
import WhayUs from "../WhayUs/WhayUs";

const About = () => {
    return (
        <div className="sm:px-2 md:px-4 lg:px-12">
            <WeAre />
            <WhayUs />
            <Mission />
            <OurTechnology />

        </div>
    );
};

export default About;