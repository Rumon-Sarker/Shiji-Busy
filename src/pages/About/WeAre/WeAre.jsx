import CategoryTitle from "../../../components/CategoryTitle/CategoryTitle";
import vedio from "../../../assets/Video/video.mp4"

const WeAre = () => {
    return (
        <section>
            <div className="bg-blue-500 sm:pt-8 md:pt-12 lg:pt-24 mt-5 sm:mb-4 md:mb-8 lg:mb-12 rounded-md">
                <h1 className="sm:text-xl md:text-3xl lg:text-5xl text-white font-semibold pb-5 text-center">About Us</h1>
            </div>
            <CategoryTitle title="Who We Are" />
            <h3 className="sm:text-sm md:text-base lg:text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, tempora eaque illo eum tempore nisi optio excepturi veniam. Velit similique laboriosam error modi minus aspernatur explicabo odit eum omnis iste? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita corrupti, numquam atque maxime rem fugit vitae assumenda laboriosam dolorem aspernatur corporis soluta deleniti cum accusantium non in magni, id dignissimos. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit alias tempore natus ad iste molestias, placeat beatae architecto soluta recusandae aspernatur autem, asperiores doloremque ipsum dolores praesentium distinctio assumenda corporis.</h3>
            <div>
                <video className="w-[900px] bg-black rounded-lg shadow-lg mx-auto sm:my-6 md:my-8 lg:my-12" controls>
                    <source src={vedio} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

            </div>
        </section>
    );
};

export default WeAre;