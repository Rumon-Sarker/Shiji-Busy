import { IoLocationOutline } from "react-icons/io5";

const Footer = () => {
    return (
        <section>
            <footer className="footer bg-blue-900 text-white p-6 py-20 border border-blue-400">
                <nav className="w-[650px]">
                    <a className="text-3xl  font-bold">ShijiBusy</a>

                    <p className="text-lg my-4">Lpsum, dolor sit amet consectetur adipisicing elit. Distinctio, eius dolor! Qui quasi vel reprehenderit, laborum non velit icia architecto. Dignissimos est voluptatibus odit assumenda hic?</p>

                    <div className="flex flex-col gap-4 w-96">
                        <p className="flex items-center text-base gap-4"><IoLocationOutline /> Head Office: 285 Patharghata Chittagong Bangladesh</p>
                        <p className="flex items-center text-base gap-4"><IoLocationOutline /> Dhaka Office: 12/1 Segunbagicha Dhaka, Bangladesh </p>
                    </div>
                </nav>
                <nav className="space-y-2">
                    <h6 className="text-xl font-semibold my-3">Quik Links</h6>

                    <a className="link font-semibold link-hover">Homepage</a>
                    <a className="link font-semibold link-hover">About Us</a>
                    <a className="link font-semibold link-hover">Portfolio</a>
                    <a className="link font-semibold link-hover">Services</a>
                    <a className="link font-semibold link-hover">Contact Us</a>
                    <a className="link font-semibold link-hover">Blogs</a>

                </nav>

                <form>
                    <h6 className="text-xl font-semibold my-3">Contact Form</h6>
                    <div className="flex flex-col gap-12">
                        <div className="flex flex-row gap-12">
                            <div className="flex flex-col gap-2">
                                <label className="font-semibold">First Name: </label>
                                <input className="bg-transparent border-b-2 border-gray-400 pb-1" type="text" placeholder="Enter your name" name="" id="" />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label>Last Name: </label>
                                <input className="bg-transparent border-b-2 border-gray-400 pb-1" type="text" placeholder="Enter your name" name="" id="" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <label>Email </label>
                            <input className="bg-transparent border-b-2 border-gray-400 pb-1" type="text" placeholder="Enter your name" name="" id="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <input className="bg-transparent border-b-2 border-gray-400 pb-1" type="text" placeholder="Enter your message" name="" id="" />
                            </div>
                            <button className="py-2 bg-blue-500 rounded-full px-6 font-semibold border-0 text-white">Submit</button>
                        </div>
                    </div>

                </form>
            </footer>
            <footer className="footer flex flex-row  justify-between  bg-blue-900 text-white pt-6 pb-12">
                <p className="pl-7">@Hijibusy 2002-20024.All right reserved</p>
                <p className="pr-36">Terems & Privacy</p>
            </footer>

        </section>
    );
};

export default Footer;