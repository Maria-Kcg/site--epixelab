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
import joyfulguy from "@/assets/images/joyfulguy.png";
import Mask1 from "@/assets/images/Mask1.png";
import Mask2 from "@/assets/images/Mask2.png";
import Mask3 from "@/assets/images/Mask3.png";
import Ellipse1 from "@/assets/images/Ellipse1.png";
import { Card, CardContent, CardFooter, CardHeader, CardTitle, } from "@/components/ui/card";

function Home() {
    return (
        <>
            <section>
                <div className="container hero px-5 sm:px-10 md:px-15 lg:px-[135px] mx-auto flex flex-col lg:flex-row">
                    <div className="mt-[50px] lg:mt-[114px]">
                        <h1 className="font-ageo font-[850] text-[32px]/[40px] sm:text-[40px] sm:leading-[48px] md:text-[55px] md:leading-[65px] lg:text-[70px] lg:leading-[81px] text-[#0B1B35] text-center mb-[50px] lg:text-start lg:h-[260px]">We boost <br className="hidden lg:flex" /> growth for your <br className="hidden lg:flex" /> statup business</h1>
                        <p className="font-ageo font-[500] text-[16px]/[24px] sm:text-[18px] md:text-[20px] lg:text-[22px] lg:leading-[28.5px] lg:h-[62px] lg:w-[555px] text-center lg:text-start justify">Our goal is top at the heart of creativity services industry as a digital creator. In has a after comment</p>
                        <div className="flex gap-[28px] items-center justify-center lg:justify-start mt-[66px]">
                            <Button variant="myOrange" className="font-ageo font-[500] leading-[28.5px] text-[14px]/[24px] sm:text-[16px] lg:text-[18px] md:px-[34px] md:pt-[11px] pb-[9px] rounded-[10px] max-h-[49px] max-w-[162px] cursor-pointer">Get Started</Button>
                            <Button className="font-ageo font-[700] text-[14px]/[24px] sm:text-[16px] lg:text-[18px] bg-inherit text-black hover:bg-inherit max-w-[169px] max-h-[60px] cursor-pointer">
                                <img src={LearnMoreIcon} alt="" className="max-h-[60px] max-w-[50px] me-[25px]" />
                                Learn More
                            </Button>
                        </div>
                    </div>
                    <div className="relative mt-[40px] flex-1">
                        <img src={Image} alt="hero-img" />
                        <img src={Group4} alt="" className="absolute top-105 -left-30 z-[-1] hidden lg:flex" />
                        <img src={Group7} alt="" className="absolute top-15 right-70 z-[-1] hidden lg:flex" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container px-5 sm:px-10 md:px-15 lg:px-[135px] mx-auto mb-[181.01px] mt-10 lg:mt-[81.91px]">
                    <p className="font-ageo font-[700] text-center text-[#8A898E] text-[14px]/[28.5px] tracking-[0.45rem] mb-[19px]">SERVICE</p>
                    <h2 className="font-ageo font-[700] text-[22px] sm:text-[26px] md:text-[34px] lg:text-[52px] leading-[28.5px] text-[#0B1B35] text-center mb-5 sm:mb-10 md:mb-15 lg:mb-[108px]">Our Vison & Our Goal</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[57px]">
                        <Card className="text-center border-none rounded-[28px] p-0">
                            <CardHeader>
                                <img src={Activity} alt="" className="mx-auto w-[76.47px] h-[76.47px] mb-[41px] mt-[30.53px]" />
                                <CardTitle className="font-ageo font-[700] leading-[28.5px] text-[30px] md:text-[36px] md:mb-[32px]">Graphic Design</CardTitle>
                            </CardHeader>
                            <CardContent className="mb-[18px]">
                                <p className="font-ageo font-[400] text-[16px] mb:text-[18px] md:px-[41px] leading-[28.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</p>
                            </CardContent>
                            <CardFooter className="mb-[45px]">
                                <Button variant="myOrange" className="font-ageo font-[500] text-[18px] leading-[28.5px] mx-auto px-[36px] h-[49px] cursor-pointer">Learn More</Button>
                            </CardFooter>
                        </Card>

                        <Card className="text-center border-none rounded-[28px] p-0">
                            <CardHeader>
                                <img src={Video} alt="" className="mx-auto w-[76.47px] h-[57.35px] mb-[50.32px] mt-[40.33px]" />
                                <CardTitle className="font-ageo font-[700] leading-[28.5px] text-[30px] md:text-[36px] md:mb-[32px]">Video Editing</CardTitle>
                            </CardHeader>
                            <CardContent className="mb-[18px]">
                                <p className="font-ageo font-[400] text-[16px] mb:text-[18px] md:px-[41px] leading-[28.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</p>
                            </CardContent>
                            <CardFooter className="mb-[45px]">
                                <Button variant="myOrange" className="font-ageo font-[500] text-[18px] leading-[28.5px] mx-auto px-[36px] h-[49px] cursor-pointer">Learn More</Button>
                            </CardFooter>
                        </Card>

                        <Card className="text-center border-none rounded-[28px] p-0">
                            <CardHeader>
                                <img src={Chart} alt="" className="mx-auto w-[76.47px] h-[76.47px] mb-[41px] mt-[30.53px]" />
                                <CardTitle className="font-ageo font-[700] leading-[28.5px] text-[30px] md:text-[36px] md:mb-[32px]">Digital Marketing</CardTitle>
                            </CardHeader>
                            <CardContent className="mb-[18px]">
                                <p className="font-ageo font-[400] text-[16px] mb:text-[18px] md:px-[41px] leading-[28.5px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque dui mi, bibendum eu erat id, ultricies semper metus. Nunc dapibus laoreet dolor nec imperdiet.</p>
                            </CardContent>
                            <CardFooter className="mb-[45px]">
                                <Button variant="myOrange" className="font-ageo font-[500] text-[18px] leading-[28.5px] mx-auto px-[36px] h-[49px] cursor-pointer">Learn More</Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            <section>
                <div className="container px-5 sm:px-10 md:px-15 lg:px-[135px] mx-auto grid grid-cols-1 lg:grid-cols-2 mb-[110px] lg:mb-[146.01px]">
                    <div className="lg:mt-5">
                        <h2 className="font-dm font-[500] text-[22px]/[32px] text-[#1E0E62] text-center lg:text-start lg:w-[303.96px] mb-[21px] pe-3">Many Blocks and Components</h2>
                        <p className="font-dm font-[400] text-[16px]/[26px] text-[#15143966] lg:h-[125.44px] lg:w-[322.05px] lg:mb-[73.13px]">Startup Framework contains components and complex blocks which can easily be integrated into almost any design. </p>
                        <div className="flex justify-center lg:justify-start mb-10">
                            <Button variant="outline" className="font-dm font-[500] text-[16px]/[22px] px-[38px] py-[13px] h-[48.25px] w-[132.68px] rounded-full text-[#1E0E62] cursor-pointer">Explore</Button>
                        </div>
                    </div>
                    <div className="lg:mt-5 lg:mt-0 flex justify-center">
                        <img src={VideoPlayer} className="max:w-[687.53px] max:h-[385.98px] mx-auto" />
                    </div>
                </div>
            </section>

            <section>
                <div className="container px-5 sm:px-10 md:px-15 lg:px-[135px] mx-auto mb-[110px] lg:mb-[165px]">
                    <p className="font-ageo font-[700] text-center text-[#8A898E] text-[14px]/[28.5px] tracking-[0.45rem] mb-[19px]">TESTIMONIALS</p>
                    <h2 className="font-ageo font-[700] text-[22px] sm:text-[26px] md:text-[34px] lg:text-[52px] leading-[28.5px] text-[#0B1B35] text-center mb-5 sm:mb-10 md:mb-15 lg:mb-[108px]">What Clients say about us</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-15 lg:gap-[93px] lg:px-20 lg:px-[180px]">
                        <div className="flex gap-[30px]">
                            <img src={Userpic} alt="userpic" className="h-[70px] w-[70px]" />
                            <div>
                                <p className="font-dm font-[500] text-[18px]/[28px] text-[#0B1B35] mb-[13px]">Get a fully retina ready site when you build with Startup Framework. Websites look sharper and more gorgeous on devices with retina display support</p>
                                <p className="font-dm font-[700] text-[14px]/[26px] tracking-[2px] text-[#0B1B35] uppercase opacity-30">Rayhan Curran</p>
                            </div>
                        </div>
                        <div className="flex gap-[30px]">
                            <img src={Userpic3} alt="" className="h-[70px] w-[70px]" />
                            <div>
                                <p className="font-dm font-[500] text-[16px] md:text-[18px] leading-[28px] text-[#0B1B35] mb-[13px] lg:mb-[41px]">As a business targeting high net worth individuals, we were looking for a slick, cool and mini-malistic design for our website</p>
                                <p className="font-dm font-[700] text-[14px]/[26px] tracking-[2px] text-[#0B1B35] uppercase opacity-30">Kayley Frame</p>
                            </div>
                        </div>
                        <div className="flex gap-[30px] ">
                            <img src={Userpic1} alt="" className="h-[70px] w-[70px]" />
                            <div>
                                <p className="font-dm font-[500] text-[18px]/[28px] text-[#0B1B35] mb-[13px] lg:mb-[97px]">The most important part of the Startup Framework is the samples</p>
                                <p className="font-dm font-[700] text-[14px]/[26px] tracking-[2px] text-[#0B1B35] uppercase opacity-30">Gene Whitfield</p>
                            </div>
                        </div>
                        <div className="flex gap-[30px]">
                            <img src={Userpic2} alt="" className="h-[70px] w-[70px]" />
                            <div>
                                <p className="font-dm font-[500] text-[18px]/[28px] text-[#0B1B35] mb-[13px] lg:mb-[69px]">I’ve built my website with Startup just in one day, and it was ready-to-go. </p>
                                <p className="font-dm font-[700] text-[14px]/[26px] tracking-[2px] text-[#0B1B35] uppercase opacity-30">Allan Kim</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container px-5 sm:px-10 md:px-15 lg:px-[135px] mx-auto mb-[110px] lg:mb-[110px]">
                    <p className="font-ageo font-[700] text-center text-[#8A898E] text-[14px]/[28.5px] tracking-[0.45rem] mb-[19px]">OUR TEAM</p>
                    <h2 className="font-ageo font-[700] text-[22px] sm:text-[26px] md:text-[34px] lg:text-[52px] leading-[28.5px] text-[#0B1B35] text-center mb-5 sm:mb-10 md:mb-15 lg:mb-[53pxpx]">Meet The Team</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-[30px] mt-10 mx-5 lg:mx-5 text-center">
                        <Card className="shadow-none p-0 border-3">
                            <CardHeader>
                                <img src={Mask1} alt="team member 1" className="mx-auto mt-[50px] mb-[29px] " />
                                <CardTitle className="font-dm font-[500] text-[22px]/[32px] text-[#1E0E62]">Vanessa Laird</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-dm font-[700] text-[14px]/[26px] trackink-[2px] text-[#15143966] mb-[15px] opacity-40 uppercase ">UI Designer</p>
                            </CardContent>
                            <CardFooter className="border rounded-b-lg p-0">
                                <img src={fatwitter} alt="" className="mx-auto ps-5 pe-10 py-[18.8px] border-e" />
                                <img src={fadribbble} alt="" className="mx-auto pe-12 py-[18.8px] border-e" />
                                <img src={fafacebooksquare} alt="" className="mx-auto py-[18.8px] pe-5" />
                            </CardFooter>
                        </Card>
                        <Card className="shadow-none p-0 border-3">
                            <CardHeader>
                                <img src={Mask2} alt="team member 1" className="mx-auto mt-[50px] mb-[29px] " />
                                <CardTitle className="font-dm font-[500] text-[22px]/[32px] text-[#1E0E62]">Mason Campbell</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-dm font-[700] text-[14px]/[26px] trackink-[2px] text-[#15143966] mb-[15px] opacity-40 uppercase ">UI Designer</p>
                            </CardContent>
                            <CardFooter className="border rounded-b-lg p-0">
                                <img src={fatwitter} alt="" className="mx-auto ps-5 pe-10 py-[18.8px] border-e" />
                                <img src={fadribbble} alt="" className="mx-auto pe-12 py-[18.8px] border-e" />
                                <img src={fafacebooksquare} alt="" className="mx-auto py-[18.8px] pe-5" />
                            </CardFooter>
                        </Card>
                        <Card className="shadow-none p-0 border-3">
                            <CardHeader>
                                <img src={Mask3} alt="team member 3" className="mx-auto mt-[50px] mb-[29px] " />
                                <CardTitle className="font-dm font-[500] text-[22px]/[32px] text-[#1E0E62]">Irea Evans</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="font-dm font-[700] text-[14px]/[26px] trackink-[2px] text-[#15143966] mb-[15px] opacity-40 uppercase ">Client Manager</p>
                            </CardContent>
                            <CardFooter className="border rounded-b-lg p-0">
                                <img src={fatwitter} alt="" className="mx-auto ps-5 pe-10 py-[18.8px] border-e" />
                                <img src={fadribbble} alt="" className="mx-auto pe-12 py-[18.8px] border-e" />
                                <img src={fafacebooksquare} alt="" className="mx-auto py-[18.8px] pe-5" />
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </section>

            <section>
                <div className="ccontainer px-5 sm:px-10 md:px-15 lg:px-[135px] mx-auto mb-[110px] lg:mb-[166px] ">
                    <p className="font-ageo font-[700] text-center text-[#8A898E] text-[14px]/[28.5px] tracking-[0.45rem] mb-[19px]">OUR TEAM</p>
                    <h2 className="font-ageo font-[700] text-[22px] sm:text-[26px] md:text-[34px] lg:text-[52px] leading-[28.5px]  text-[#0B1B35] text-center mb-[101px]">Subscribe Our Newsleter</h2>
                    <div className="flex flex-col lg:flex-row gap-[49px]">
                        <img src={Group} alt="enveloppe" className="max-w-[421px] max-h-[367px]" />
                        <div className="lg:mt-[26px]">
                            <p className="mb-[46px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                            <form action="">
                                <div className="mb-[51px]">
                                    <input type="email" placeholder="Your E-mail here..." className="rounded-full h-[77px] w-full px-2 shadow-xl border text-[24px]/[28.5px] ps-[67px]" />
                                </div>
                                <Button variant="myOrange" className="h-[49px] w-full cursor-pointer">Subscribe Our Newsleter</Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default Home;