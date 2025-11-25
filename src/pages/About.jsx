import aboutimg from "@/assets/images/aboutimg.png";
import { Button } from "@/components/ui/button";
import Userpic from "@/assets/images/Userpic.png";
import Userpic1 from "@/assets/images/Userpic1.png";
import Userpic2 from "@/assets/images/Userpic2.png";
import Userpic3 from "@/assets/images/Userpic3.png";
import founder from "@/assets/images/founder.png";
import { MapPin } from 'lucide-react';
import mapimgpng from "@/assets/images/mapimgpng.png";
import Mask1 from "@/assets/images/Mask1.png";
import Mask2 from "@/assets/images/Mask2.png";
import Mask3 from "@/assets/images/Mask3.png";

function About() {
    return (
        <>
            <section>
                <div className="ccontainer px-5 sm:px-10 md:px-15 lg:px-[135px] mt-[100px]">
                    <h2 className="font-ageo font-[700] text-[22px] sm:text-[26px] md:text-[34px] lg:text-[52px] leading-[50px] text-center lg:text-start text-[#0B1B35] mb-[30px]">We help your business with creative idea</h2>
                    <p className="font-ageo font-[500] text-[16px]/[24px] sm:text-[18px] md:text-[20px] lg:text-[22px] lg:leading-[28.5px mb-[30px] text-justify">We specialize in transforming innovative ideas into impactful digital solutions that drive growth</p>
                    <img src={aboutimg} alt="" className="mx-auto w-full rounded-lg mb-15" />
                </div>
            </section>

            <section>
                <div className="container px-5 sm:px-10 md:px-15 lg:px-[135px] mb-[110px]">
                    <p className="font-ageo font-[400] text-[16px] md:text-[18px] leading-[28.5px] mb-5 text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit.. Facere autem animi, cupiditate nostrum voluptate, reiciendis provident voluptatum voluptatibus error repudiandae! Sed molestias placeat maxime quae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum neque sapiente! Ipsa eveniet laborum aliquid quaerat ex, corrupti impedit at eligendi, omnis unde aspernatur modi perspiciatis officia nihil reprehenderit.
                        ea?
                    </p>
                    <div className="flex flex-col md:flex-row justify-between mb-15 items-center lg:mx-0 mt-[50px]">
                        <div className="flex">
                            <div className="me-3 md:me-8 ms-5 md:ms-0 border-e pe-3 md:pe-8">
                                <p className="font-dm font-[500] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] text-[#0B1B35]">15</p>
                                <p className="font-dm font-[500] text-[14px]/[28px] text-[#0B1B35] opacity-50">Members</p>
                            </div>
                            <div className="me-3 md:me-8 ms-5 md:ms-0 border-e pe-3 md:pe-8">
                                <p className="font-dm font-[500] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] text-[#0B1B35]">100K+</p>
                                <p className="font-dm font-[500] text-[14px]/[28px] text-[#0B1B35] opacity-50">Clients</p>
                            </div>
                            <div className="me-3 md:me-8 ms-5 md:ms-0 border-e pe-3 md:pe-8">
                                <p className="font-dm font-[500] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28px]text-[#0B1B35]">5 Years</p>
                                <p className="font-dm font-[500] text-[14px]/[28px] text-[#0B1B35] opacity-50">Experience</p>
                            </div>
                            <div className="lg:me-8">
                                <p className="font-dm font-[500] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] leading-[28px] text-[#0B1B35]">400+</p>
                                <p className="font-dm font-[500] text-[14px]/[28px] text-[#0B1B35] opacity-50">Projects</p>
                            </div>
                        </div>
                        <Button variant="myOrange" className="font-ageo font-[500] text-[14px] md:text-[18px] leading-[28.5px] h-[49px] mt-5 lg:mt-0 cursor-pointer">Get in touch</Button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container px-5 sm:px-10 md:px-15 lg:px-[135px] flex flex-col md:flex-row gap-10 mb-[110px]">
                    <img src={founder} alt="founder image" className="rounded-lg w-full" />
                    <div className="flex flex-col mt-5">
                        <div>
                            <p className="font-ageo font-[700] text-[#8A898E] text-[14px]/[28.5px] tracking-[0.45rem] mb-[19px] text-center md:text-start">OUR FOUNDER</p>
                            <h2 className="font-ageo font-[700] text-[22px] sm:text-[26px] md:text-[34px] lg:text-[52px] leading-[50px] text-center md:text-start text-[#0B1B35] mb-[30px] md:mb-[60px]">Meet With Our Founder</h2>
                            <p className="font-ageo font-[400] text-[16px] md:text-[18px] leading-[28.5px] mb-5 md:mb-10 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas enim, velit molestiae distinctio ab quaerat et mollitia eius voluptates labore placeat eveniet inventore? Saepe sed est magni praesentium fugiat aut!</p>
                        </div>
                        <div className="md:ms-5 lg:ms-0">
                            <p className="font-dm font-[500] text-[18px] md:text-[22px] leading-[32px] text-[#1E0E62]">Frances Swann</p>
                            <p className="font-dm font-[700] text-[14px]/[26px] trackink-[2px] text-[#15143966] mb-[15px] opacity-40 uppercase">CEO of Epixelab</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container px-5 sm:px-10 md:px-15 lg:px-[135px] mb-[110px]">
                    <div>
                        <p className="font-ageo font-[700] text-[#8A898E] text-[14px]/[28.5px] tracking-[0.45rem] mb-[19px] text-center md:text-start">OUR TEAM</p>
                        <div className="flex flex-col md:flex-row md:mx-10 lg:mx-0 justify-between">
                            <h3 className="font-ageo font-[700] text-[22px] sm:text-[26px] md:text-[34px] lg:text-[52px] leading-[28.5px] text-center md:text-start text-[#0B1B35] mb-[60px]">Meet Our Team</h3>
                            <Button variant="outline" className="font-ageo font-[500] text-[16px] md:text-[18px] leading-[28.5px] h-[49px] cursor-pointer max-w-[35%] hover:bg-transparent hover:border-[#FF6600] hover:border-2 hidden md:flex">Explore More</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center gap-10 mt-[40px]">
                        <div className="mb-5">
                            <img src={Mask1} alt="" className="w-full mx-auto md:mx-0 mb-[10px]" />
                            <p className="font-dm font-[500] text-[22px]/[32px] text-[#1E0E62] text-center">Vanessa Laird</p>
                            <p className="font-dm font-[700] text-[14px]/[26px] trackink-[2px] text-[#15143966] mb-[15px] opacity-40 text-center uppercase">UI Designer</p>
                        </div>
                        <div className="mb-5">
                            <img src={Mask2} alt="" className="w-full mx-auto md:mx-0 mb-[10px]" />
                            <p className="font-dm font-[500] text-[22px]/[32px] text-[#1E0E62] text-center">James Hall</p>
                            <p className="font-dm font-[700] text-[14px]/[26px] trackink-[2px] text-[#15143966] mb-[15px] opacity-40 text-center uppercase">Creative Director</p>
                        </div>
                        <div className="mb-5">
                            <img src={Mask3} alt="" className="w-full mx-auto md:mx-0 mb-[10px]" />
                            <p className="font-dm font-[500] text-[22px]/[32px] text-[#1E0E62] text-center">Irea Evans</p>
                            <p className="tfont-dm font-[700] text-[14px]/[26px] trackink-[2px] text-[#15143966] mb-[15px] opacity-40 text-center uppercase">Project Manager</p>
                        </div>
                        <div className="md:mb-5">
                            <img src={Mask2} alt="" className="w-full mx-auto md:mx-0 mb-[10px]" />
                            <p className="font-dm font-[500] text-[22px]/[32px] text-[#1E0E62] text-center">Ricky Smith</p>
                            <p className="font-dm font-[700] text-[14px]/[26px] trackink-[2px] text-[#15143966] mb-[15px] opacity-40 text-center uppercase">Illustrator</p>
                        </div>
                        <Button variant="outline" className="font-ageo font-[500] text-[16px] md:text-[18px] leading-[28.5px] h-[49px] cursor-pointer max-w-[35%] hover:bg-transparent hover:border-[#FF6600] hover:border-2 md:hidden mx-auto">Explore More</Button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container px-5 sm:px-10 md:px-15 lg:px-[135px] flex flex-col md:flex-row justify-center items-center gap-15 mb-[166px]">
                    <div className="text-center md:text-left flex-1">
                        <p className="font-ageo font-[700] text-[#8A898E] text-[14px]/[28.5px] tracking-[0.45rem] mb-[19px]">OUR LOCATION</p>
                        <h3 className="font-ageo font-[700] text-[22px] sm:text-[26px] md:text-[34px] lg:text-[52px] leading-[50px] text-[#0B1B35] mb-[30px] md:mb-[60px]">Our Headquaters Location</h3>
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-7">
                            <MapPin size={20} />
                            <p className="font-dm font-[500] text-[20px]/[28px] text-[#0B1B35]">Headquarters Adress</p>
                        </div>
                        <p className="font-ageo font-[400] text-[18px]/[28.5px] md:pe-5">Mr. John Smith, Flat 101, Sunshine Apartments, 123 Main Street, Anytown, CA 90210, United States.</p>
                    </div>
                    <div className="flex-1">
                        <img src={mapimgpng} alt="map" className="rounded-lg w-full md:ps-5 mx-auto md:mx-none md:mt-5 md:mt-0" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;