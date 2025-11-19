import Logo from "@/assets/images/logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container max-w-[1100px] mx-auto mb-10">
                <div className="flex flex-col md:flex-row items-center justify-between border-b pb-6 text-[#1E0E62] mb-3">
                    <div className="flex flex-col md:flex-row gap-20">
                        <img src={Logo} alt="logo du site" className="h-10 lg:h-5 w-auto" />
                        <p className="text-sm">© 2020 Epixelab. All rights reserved.</p>
                    </div>
                    <div className="mt-5">
                        <ul className="flex gap-6">
                            <li>
                                <a href="#" target="_blank" className="text-sm">Portfolio</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm">How it Works</a>
                            </li>
                            <li>
                                <a href="#" className="text-sm">Pricing</a>
                            </li>
                            <li>
                                <Link to="/about" className="text-sm">About</Link>
                            </li>
                            <li>
                                <Link to="/login" className="text-sm">Login</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="mt-5 text-[#15143966]">
                    <p className="text-sm text-center lg:text-start">Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
                </div>
            </div>
        </footer>
    )
}
export default Footer;