import { Link, useLocation } from "react-router-dom";

const Footer = () => {
    const location = useLocation();
    const navigation = location.pathname;

    return (
        <footer className="block md:hidden fixed bottom-0 left-0 right-0 rounded-t-3xl border border-[#383838] bg-[#121212] bg-opacity-80 backdrop-blur-md backdrop-opacity-90">
            <nav className="flex justify-around py-4 text-xs">
                <li className={`text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer  
                ${navigation == '/' ? "text-white after:block after:h-1 after:w-[35px] after:bg-[#ffdb70] after:mt-1 after:rounded-lg" : "md:hover:text-gray-500"} 
                md:hover:bg-transparent block pl-3 pr-4 py-2 md:p-0`}>
                   <Link to="/">
                        Home
                    </Link>
                </li>
                <li className={`text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer  
                ${navigation == '/about' ? "text-white after:block after:h-1 after:w-[35px] after:bg-[#ffdb70] after:mt-1 after:rounded-lg" : "md:hover:text-gray-500"} 
                md:hover:bg-transparent block pl-3 pr-4 py-2 md:p-0`}>
                    <Link to="/about">
                        About
                    </Link>
                </li>
                <li className={`text-gray-700 hover:bg-gray-50 font-semibold cursor-pointer  
                ${navigation == '/projects' ? "text-white after:block after:h-1 after:w-[40px] after:bg-[#ffdb70] after:mt-1 after:rounded-lg" : "md:hover:text-gray-500"} 
                md:hover:bg-transparent block pl-3 pr-4 py-2 md:p-0`}>
                    <Link to="/projects">
                        Projects
                    </Link>
                </li>
            </nav>
        </footer>
    )
}

export default Footer