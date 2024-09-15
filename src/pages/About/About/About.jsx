import Mission from "../Mission/Mission";
import OurTechnology from "../OurTechnology/OurTechnology";
import WeAre from "../WeAre/WeAre";
import WhayUs from "../WhayUs/WhayUs";

const About = () => {
    return (
        <div className="px-12">
            <WeAre />
            <WhayUs />
            <Mission />
            <OurTechnology />

        </div>
    );
};

export default About;