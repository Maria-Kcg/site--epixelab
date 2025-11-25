import Logo from "@/assets/images/Logo.png";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>
            <div className="container px-5 sm:px-10 md:px-15 lg:px-[135px]">
                <div className="flex flex-col lg:flex-row items-center justify-between border-b pb-[31px] text-[#1E0E62] mb-[40px]">
                    <div className="flex flex-col md:flex-row md:gap-[90px] mb-5 xl:mb-0">
                        <img src={Logo} alt="logo du site" className="max-w-[111px] max-h-[23px] w-auto mb-5 lg:mb-0" />
                        <p className="font-dm font-[400] text-[14px] xl:text-[16px] leading-[26px] space-y-[10px]">© 2020 Epixelab. All rights reserved.</p>
                    </div>
                    <ul className="flex font-dm font-[400] text-[14px] xl:text-[16px] leading-[26px] space-y-[10px] ">
                        <li className="me-2 xl:me-[39px]">
                            <a href="#" target="_blank">Portfolio</a>
                        </li>
                        <li className="me-2 xl:me-[39px]">
                            <a href="#" >How it Works</a>
                        </li>
                        <li className="me-2 xl:me-[39px]">
                            <a href="#" >Pricing</a>
                        </li>
                        <li className="me-2 xl:me-[39px]">
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </div>
                <p className="font-dm font-[400] text-[14px] xl:text-[16px] leading-[28px] space-y-[10px] text-[#15143966] text-[16px]/[26px] space-y-[10px] text-center lg:text-start mb-[41px]">Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
            </div>
        </footer>
    )
}
export default Footer;