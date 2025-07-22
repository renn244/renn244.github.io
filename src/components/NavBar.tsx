import { Link, useLocation } from "react-router-dom";

const NavBar = () => {
    const location = useLocation();
    const navigation = location.pathname;

    return (    
        <nav className="max-w-7xl mx-auto px-4 p-[30px] top-0 z-[98] w-full backdrop-blur-md bg-[#121212] bg-opacity-80">
            <div className="flex flex-wrap justify-between items-center">
                <h1 className="self-center text-lg font-bold text-[#ffdb70] whitespace-nowrap fadein-bot hover:text-amber-100 cursor-default">
                    Renato Santos
                </h1>
                <div className=" max-w-[275px] flex flex-row space-x-8 hidden md:block">
                    <ul className="flex flex-row space-x-8 text-sm font-medium">
                        <li data-aos-delay="100" data-aos="fade-down" className={`text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer  
                        ${navigation === '/' ? "text-white after:block after:h-1 after:w-[43px] after:bg-[#ffdb70] after:mt-1 after:rounded-lg" : "md:hover:text-gray-500"} 
                        md:hover:bg-transparent block pl-3 pr-4 py-2 md:p-0`}
                        >
                            <Link to="/">
                                Home
                            </Link>
                        </li>
                        <li data-aos-delay="300" data-aos="fade-down" className={`text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer  
                        ${navigation === '/about' ? "text-white after:block after:h-1 after:w-[43px] after:bg-[#ffdb70] after:mt-1 after:rounded-lg" : "md:hover:text-gray-500"}
                        md:hover:bg-transparent block pl-3 pr-4 py-2 md:p-0`}>
                            <Link to="/about">
                                About
                            </Link>
                        </li>
                        <li data-aos-delay="500" data-aos="fade-down" className={`text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer  
                        ${navigation === '/projects' ? "text-white after:block after:h-1 after:w-[60px] after:bg-[#ffdb70] after:mt-1 after:rounded-lg" : "md:hover:text-gray-500"}
                        md:hover:bg-transparent block pl-3 pr-4 py-2 md:p-0`}>
                            <Link to="/projects">
                                Projects
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="flex justify-around gap-3">
                    <Link to="https://github.com/sheeshhhhhh">
                        <img className="w-10 rounded-full" src="https://seeklogo.com/images/G/github-logo-2E3852456C-seeklogo.com.png" />
                    </Link>
                    <Link to="https://dev.to/renn">
                        <img className="w-10" src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fthepracticaldev.s3.amazonaws.com%2Fi%2F78hs31fax49uwy6kbxyw.png" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default NavBar