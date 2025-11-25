import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";
import Logo from "@/assets/images/Logo.png";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Menu } from "lucide-react";

function Header() {
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
        <header>
            <div className="container flex items-center px-5 sm:px-10 md:px-15 lg:px-[135px] mt-[48px]">
                <div className="me-[30px] xl:me-[114px] ">
                    <img src={Logo} alt="logo du site" className="max-h-[49px] max-w-[240px]" />
                </div>

                <div className="hidden lg:flex me-[30px] xl:me-[250px]">
                    <NavigationMenu>
                        <NavigationMenuList className="flex flex-col lg:flex-row xl:gap-[40px]">
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className="font-ageo font-[500] text-[14px] xl:text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700] hover:bg-transparent focus:bg-transparent">
                                    <Link to="/home">Home</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className="font-ageo font-[500] text-[14px] xl:text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700] hover:bg-transparent focus:bg-transparent">
                                    <Link to="/about">About Us</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className="font-ageo font-[500] text-[14px] xl:text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700] hover:bg-transparent focus:bg-transparent">
                                    <Link to="/app">Our App</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                            <NavigationMenuItem>
                                <NavigationMenuLink asChild className="font-ageo font-[500] text-[14px] xl:text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700] hover:bg-transparent focus:bg-transparent">
                                    <Link to="/contacts">Contacts</Link>
                                </NavigationMenuLink>
                            </NavigationMenuItem>
                        </NavigationMenuList>
                    </NavigationMenu>
                </div>

                <div className="hidden lg:flex items-center gap-[22px]">
                    <Link to="/login" className="font-ageo font-[500] text-[14px] xl:text-[18px] leadind-[28.5px] hover:font-[700] focus:font-[700]">Login</Link>
                    <Button variant="myOrange" className="font-ageo font-[500] text-[14px] xl:text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700] px-[30px] py-[10px] max-w-[119px] max-h-[49px]"><Link to="/register">Sign up</Link></Button>
                </div>


                <div className="relative">
                    <Button variant="myOrange" className="sm:ms-50 md:ms-110 menu-hamburger lg:hidden" onClick={handleShowLinks}><Menu /></Button>
                    {showLinks &&
                        <div className="lg:hidden flex flex-col lg:flex-row absolute top-10 right-0 px-10 py-5 bg-white shadow-md rounded-lg">
                            <Link to="/home" className="font-ageo font-[500] text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700] hover:bg-transparent focus:bg-transparent mb-2">Home</Link>
                            <Link to="/about" className="font-ageo font-[500] text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700] hover:bg-transparent focus:bg-transparent mb-2">About Us</Link>
                            <Link to="/app" className="font-ageo font-[500] text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700] hover:bg-transparent focus:bg-transparent mb-2">Our App</Link>
                            <Link to="/contacts" className="font-ageo font-[500] text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700] hover:bg-transparent focus:bg-transparent mb-2">Contacts</Link>
                            <Link to="/login" className="font-ageo font-[500] text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700] hover:bg-transparent focus:bg-transparent mb-2">Login</Link>
                            <Button variant="myOrange" className="font-ageo font-[500] text-[18px] leading-[28.5px] hover:font-[700] focus:font-[700]"><Link to="/register">Sign up</Link></Button>
                        </div>
                    }
                </div>
            </div>
        </header >
    )
}
export default Header;