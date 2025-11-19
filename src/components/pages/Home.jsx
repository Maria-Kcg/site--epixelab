import { Button } from "@/components/ui/button";
import LearnMoreIcon from "@/assets/images/Learnmoreicon.png";
import Image from "@/assets/images/Image.png";
import Group4 from "@/assets/images/Group4.png";
import Group7 from "@/assets/images/Group7.png";
import Activity from "@/assets/images/Activity.png";
import Video from "@/assets/images/Video.png";
import Chart from "@/assets/images/Chart.png";
import VideoPlayer from "@/assets/images/VideoPlayer.png";
import Userpic from "@/assets/images/Userpic.png";
import Userpic1 from "@/assets/images/Userpic1.png";
import Userpic2 from "@/assets/images/Userpic2.png";
import Userpic3 from "@/assets/images/Userpic3.png";
import fatwitter from "@/assets/images/fatwitter.png";
import fadribbble from "@/assets/images/fadribbble.png";
import fafacebooksquare from "@/assets/images/fafacebooksquare.png";
import Group from "@/assets/images/Group.png";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";

function Home() {
    return (
        <>
            <section>
                <div className="container hero max-w-[1100px] mx-auto flex flex-col lg:flex-row md:justify-between">
                    <div className="md:flex-1 mt-5 lg:mt-20">
                        <h1 className="text-4xl lg:text-5xl mb-5 leading-10 md:leading-15 font-[800] text-[#0B1B35] text-center lg:text-start">We boost <br /> growth for your <br /> statup business</h1>
                        <p className="font-medium mb-15 mx-5 lg:mx-0">Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment</p>
                        <div className="flex justify-center lg:justify-start">
                            <Button variant="myOrange">Get Started</Button>
                            <Button className="bg-inherit text-black hover:bg-inherit">
                                <img src={LearnMoreIcon} alt="" className="h-8" />
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="md:flex-1 relative flex-shrink-0 flex-grow ">
                        <img src={Image} alt="hero-img" className="w-full md:min-w-140 lg:ms-30" />
                        <img src={Group4} alt="" className="absolute bottom-20 right-85 z-[-1]" />
                        <img src={Group7} alt="" className="absolute top-10 right-50 z-[-1]" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container hero max-w-[1100px] mx-auto mb-40 ">
                    <p className="text-center text-[#8A898E] text-sm tracking-[5px] mb-4">SERVICE</p>
                    <h2 className="text-[#0B1B35] text-center font-medium text-4xl md:text-5xl">Our Vison & Our Goal</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-20 mx-5 lg:mx-0">
                        <div className="text-center">
                            <Card className="shadow-xl/30 border-none">
                                <CardHeader>
                                    <img src={Activity} alt="" className="mx-auto h-15 mb-5" />
                                    <CardTitle className="text-[28px] font-bold">Graphic Design</CardTitle>
                                </CardHeader>
                                <CardContent className="px-15">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="myOrange" className="mx-auto px-10 py-5">Learn More</Button>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="text-center">
                            <Card className="shadow-xl/30 border-none">
                                <CardHeader>
                                    <img src={Video} alt="" className="mx-auto h-13 mb-7" />
                                    <CardTitle className="text-[28px] font-bold">Video Editing</CardTitle>
                                </CardHeader>
                                <CardContent className="px-15">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="myOrange" className="mx-auto px-10 py-5">Learn More</Button>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="text-center">
                            <Card className="shadow-xl/30 border-none">
                                <CardHeader>
                                    <img src={Chart} alt="" className="mx-auto h-15 mb-5" />
                                    <CardTitle className="text-[28px] font-bold">Digital Marketing</CardTitle>
                                </CardHeader>
                                <CardContent className="px-15">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</p>
                                </CardContent>
                                <CardFooter>
                                    <Button variant="myOrange" className="mx-auto px-10 py-5">Learn More</Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-2 mb-20">
                    <div className="mt-5">
                        <h2 className="text-[#1E0E62] text-center lg:text-start text-2xl font-medium lg:pe-60 mb-8">Many Blocks and Components</h2>
                        <p className="mb-5 lg:mb-20 text-[#15143966] text-justify mx-5 md:mx-10 lg:mx-0 lg:pe-50 font-medium text-md">Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
                        <div className="flex justify-center lg:justify-start">
                            <Button variant="outline" className="px-10 lg:py-5 rounded-full text-[#1E0E62] ">Explore</Button>
                        </div>
                    </div>
                    <div className="mt-5 lg:mt-0 flex justify-center lg:justify-start lg:ms-20">
                        <img src={VideoPlayer} className="w-150 mx-auto" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container hero max-w-[1100px] mx-auto mb-20 ">
                    <p className="text-center text-[#8A898E] text-sm tracking-[5px] mb-4">TESTIMONIALS</p>
                    <h2 className="text-[#0B1B35] text-center font-medium text-3xl md:text-5xl">What Clients say about us</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 mt-20">
                        <div className="flex gap-7 max-w-[350px] mx-auto mb-20">
                            <img src={Userpic} alt="" className="h-17" />
                            <div>
                                <p className="mb-5 font-medium text-[#0B1B35]">Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support</p>
                                <p className="text-[#0B1B35] font-extralight">Rayhan Curran</p>
                            </div>
                        </div>
                        <div className="flex gap-7 max-w-[350px] mx-auto mb-20">
                            <img src={Userpic3} alt="" className="h-17" />
                            <div>
                                <p className="mb-5 font-medium text-[#0B1B35] mb-10">As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website</p>
                                <p className="text-[#0B1B35] font-extralight">Kayley Frame</p>
                            </div>
                        </div>
                        <div className="flex gap-7 max-w-[350px] mx-auto mb-15">
                            <img src={Userpic1} alt="" className="h-17" />
                            <div>
                                <p className="mb-5 font-medium text-[#0B1B35] mb-20">The most important part of the Startup Framework is the samples</p>
                                <p className="text-[#0B1B35] font-extralight">Gene Whitfield</p>
                            </div>
                        </div>
                        <div className="flex gap-7 max-w-[350px] mx-auto mb-15">
                            <img src={Userpic2} alt="" className="h-17" />
                            <div>
                                <p className="mb-5 font-medium text-[#0B1B35] mb-13">I’ve built my website with Startup just in one day, and it was ready-to-go. </p>
                                <p className="text-[#0B1B35] font-extralight">Allan Kim</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container hero max-w-[1100px] mx-auto mb-30 ">
                    <p className="text-center text-[#8A898E] text-sm tracking-[5px] mb-4">OUR TEAM</p>
                    <h2 className="text-[#0B1B35] text-center font-medium text-3xl md:text-5xl">Meet The Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-15 mt-10 mx-5 lg:mx-5">
                        <div className="text-center">
                            <Card className="shadow-none pb-0">
                                <CardHeader>
                                    <img src={Userpic1} alt="" className="mx-auto h-25 mb-5 rounded-full" />
                                    <CardTitle className="text-2xl font-medium text-[#1E0E62]">Vanessa Laird</CardTitle>
                                </CardHeader>
                                <CardContent className="px-15">
                                    <p className="text-[#15143966]">UI Designer</p>
                                </CardContent>
                                <CardFooter className="border rounded-b-lg">
                                    <div className="mx-auto px-5 py-3 border-e">
                                        <img src={fatwitter} alt="" />
                                    </div>
                                    <div className="mx-auto px-6 py-3">
                                        <img src={fadribbble} alt="" />
                                    </div>
                                    <div className="mx-auto px-5 py-3 border-s">
                                        <img src={fafacebooksquare} alt="" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="text-center">
                            <Card className="shadow-none pb-0">
                                <CardHeader>
                                    <img src={Userpic2} alt="" className="mx-auto h-25 mb-7 rounded-full" />
                                    <CardTitle className="text-2xl font-medium  text-[#1E0E62]">Mason Campbell</CardTitle>
                                </CardHeader>
                                <CardContent className="px-15">
                                    <p className="text-[#15143966]">UI Designer</p>
                                </CardContent>
                                <CardFooter className="border rounded-b-lg">
                                    <div className="mx-auto px-5 py-3 border-e">
                                        <img src={fatwitter} alt="" />
                                    </div>
                                    <div className="mx-auto px-6 py-3">
                                        <img src={fadribbble} alt="" />
                                    </div>
                                    <div className="mx-auto px-5 py-3 border-s">
                                        <img src={fafacebooksquare} alt="" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                        <div className="text-center">
                            <Card className="shadow-none pb-0">
                                <CardHeader>
                                    <img src={Userpic3} alt="" className="mx-auto h-25 mb-5 rounded-full" />
                                    <CardTitle className="text-2xl font-medium  text-[#1E0E62]">Irea Evans</CardTitle>
                                </CardHeader>
                                <CardContent className="px-15">
                                    <p className="text-[#15143966]">Client Manager</p>
                                </CardContent>
                                <CardFooter className="border rounded-b-lg">
                                    <div className="mx-auto px-5 py-3 border-e">
                                        <img src={fatwitter} alt="" />
                                    </div>
                                    <div className="mx-auto px-6 py-3">
                                        <img src={fadribbble} alt="" />
                                    </div>
                                    <div className="mx-auto px-5 py-3 border-s">
                                        <img src={fafacebooksquare} alt="" />
                                    </div>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container max-w-[1100px] mx-auto mb-30">
                    <p className="text-center text-[#8A898E] text-sm tracking-[5px] mb-4">OUR TEAM</p>
                    <h2 className="text-[#0B1B35] text-center font-medium text-3xl md:text-5xl mb-10">Subscribe Our Newsleter</h2>
                    <div className="flex flex-col lg:flex-row mx-10 lg:mx-0 md:gap-20 justify-center">
                        <img src={Group} alt="enveloppe" className="w-sm mx-auto lg:mx-0" />
                        <div className="mt-10">
                            <p className="mb-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <form action="">
                                <div className="mb-9">
                                    <input type="email" placeholder="Your E-mail here..." className="rounded-full py-4 px-12 w-full px-2 shadow-xl border" />
                                </div>
                                <Button variant="myOrange" className="py-3 w-full">Subscribe Our Newsleter</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;