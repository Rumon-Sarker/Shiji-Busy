const Navbar = () => {

    const navItems = <>

        <li className="border-b-2"><a>Home</a></li>
        <li className="border-b-2 text-blue-600 border-blue-400"><a>About Us</a></li>
        <li className="border-b-2"><a>Portfolio</a></li>
        <li className="border-b-2"><a>Services</a></li>
        <li className="border-b-2"><a>Carrer</a></li>



    </>

    return (
        <div className="navbar bg-white shadow">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navItems}
                    </ul>
                </div>
                <a className="btn btn-ghost text-3xl text-blue-500 font-bold">ShijiBusy</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-lg gap-2 menu-horizontal">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end gap-3 pr-10">
                <a className="btn rounded-3xl text-white px-10 bg-blue-400">Contact</a>
                <a className="btn rounded-3xl text-white px-8 bg-blue-400">Blogs</a>
            </div>
        </div>
    );
};

export default Navbar;