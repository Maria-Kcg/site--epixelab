import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, } from "@/components/ui/navigation-menu"
import { Link } from "react-router-dom";
import Logo from "@/assets/images/logo.png";
import { Button } from "@/components/ui/button"
import { useState } from "react";
import { Menu } from "lucide-react";

function Header() {
    const [showLinks, setShowLinks] = useState(false);
    const handleShowLinks = () => {
        setShowLinks(!showLinks);
    }

    return (
        <header className="sticky top-0 bg-white z-2 shadow-sm w-full">
            <div className="flex justify-between items-center max-w-[1100px] mx-8 lg:mx-auto mb-5 py-3">
                <div>
                    <img src={Logo} alt="logo du site" className="h-10 w-auto" />
                </div>
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList className="flex flex-col lg:flex-row">
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent hover:text-[#FF6600] focus:text-[#FF6600]">
                                <Link to="/home">Home</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent hover:text-[#FF6600] focus:text-[#FF6600]">
                                <Link to="/about">About Us</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent hover:text-[#FF6600] focus:text-[#FF6600]">
                                <Link to="/app">Our App</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent hover:text-[#FF6600] focus:text-[#FF6600]">
                                <Link to="/contacts">Contacts</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="lg:ms-70">
                            <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent hover:text-[#FF6600] focus:text-[#FF6600]">
                                <Link to="/login">Login</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className="hover:bg-transparent focus:bg-transparent">
                                <Link to="/register">
                                    <Button className="bg-[#FF6600] hover:bg-[#FF6666]">Register</Button>
                                </Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="relative">
                    <Button variant="myOrange" className="menu-hamburger lg:hidden" onClick={handleShowLinks}><Menu /></Button>
                    {showLinks &&
                        <div className="lg:hidden flex flex-col lg:flex-row absolute top-10 right-0 px-10 py-5 bg-white shadow-md rounded-lg">
                            <Link to="/home" className="hover:bg-transparent hover:text-[#FF6600] focus:text-[#FF6600] mb-2">Home</Link>
                            <Link to="/about" className="hover:bg-transparent hover:text-[#FF6600] focus:text-[#FF6600] mb-2">About Us</Link>
                            <Link to="/app" className="hover:bg-transparent hover:text-[#FF6600] focus:text-[#FF6600] mb-2">Our App</Link>
                            <Link to="/contacts" className="hover:bg-transparent hover:text-[#FF6600] focus:text-[#FF6600] mb-2">Contacts</Link>
                            <Link to="/login" className="hover:bg-transparent hover:text-[#FF6600] focus:text-[#FF6600] lg:ms-70 mb-2">Login</Link>
                            <Link to="/register" className="hover:bg-transparent">
                                <Button className="bg-[#FF6600] hover:bg-[#FF6666]">Register</Button>
                            </Link>
                        </div>
                    }
                </div>
            </div>
        </header >
    )
}
export default Header;