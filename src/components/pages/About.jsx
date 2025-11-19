import aboutimg from "@/assets/images/aboutimg.png";
import { Button } from "@/components/ui/button";
import Userpic from "@/assets/images/Userpic.png";
import Userpic1 from "@/assets/images/Userpic1.png";
import Userpic2 from "@/assets/images/Userpic2.png";
import Userpic3 from "@/assets/images/Userpic3.png";
import founder from "@/assets/images/founder.png";
import { MapPin } from 'lucide-react';
import mapimgpng from "@/assets/images/mapimgpng.png";

function About() {
    return (
        <>
            <section>
                <div className="container max-w-[1100px] mx-auto">
                    <h2 className="font-medium text-xl md:text-3xl lg:text-5xl text-center lg:text-start mb-4">We help your business with creative idea</h2>
                    <p className="mb-8 text-center lg:text-start">We specialize in transforming innovative ideas into impactful digital solutions that drive growth</p>
                    <img src={aboutimg} alt="" className="mx-auto w-full rounded-lg mb-15" />
                </div>
            </section>

            <section>
                <div className="container max-w-[1100px] mx-auto">
                    <p className="text-lg mb-15 text-justify lg:mx-0 mx-5 ">Lorem ipsum dolor sit amet consectetur adipisicing elit.. Facere autem animi, cupiditate nostrum voluptate, reiciendis provident voluptatum voluptatibus error repudiandae! Sed molestias placeat maxime quae? Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium cum neque sapiente! Ipsa eveniet laborum aliquid quaerat ex, corrupti impedit at eligendi, omnis unde aspernatur modi perspiciatis officia nihil reprehenderit.
                        ea?
                    </p>
                    <div className="flex flex-col md:flex-row justify-between mb-15 items-center lg:mx-0 ">
                        <div className="flex">
                            <div className="me-8 ms-5 md:ms-0 border-e pe-2 mb:pe-7">
                                <p className="text-xl font-medium">15</p>
                                <p className="text-sm">Members</p>
                            </div>
                            <div className="me-8 border-e pe-2 mb:pe-7">
                                <p className="text-xl font-medium">100K+</p>
                                <p className="text-sm">Clients</p>
                            </div>
                            <div className="me-8 border-e pe-2 mb:pe-7">
                                <p className="text-xl font-medium">5 Years</p>
                                <p className="text-sm">Experience</p>
                            </div>
                            <div className="me-8">
                                <p className="text-xl font-medium">400+</p>
                                <p className="text-sm">Projects</p>
                            </div>
                        </div>
                        <Button variant="myOrange" className="rounded-full max-w-[25%] mt-5 md:mt-0">Get in touch</Button>
                    </div>
                </div>
            </section>

            <section>
                <div className="container max-w-[1100px] mx-auto flex flex-col md:flex-row gap-10 mb-20">
                    <img src={founder} alt="founder image" className="rounded-lg w-full" />
                    <div className="flex flex-col">
                        <div>
                            <p className="ttext-[#8A898E] text-sm text-center md:text-start tracking-[3px] mb-2">OUR FOUNDER</p>
                            <h3 className="text-3xl md:text-4xl font-medium mb-5 text-center md:text-start">Meet With Our Founder</h3>
                            <p className="mb-10 mx-5 lg:mx-0 text-justify">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas enim, velit molestiae distinctio ab quaerat et mollitia eius voluptates labore placeat eveniet inventore? Saepe sed est magni praesentium fugiat aut!</p>
                        </div>
                        <div className="ms-5 lg:ms-0">
                            <p className="font-medium">Frances Swann</p>
                            <p>CEO of Epixelab</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container max-w-[1100px] mx-auto">
                    <div>
                        <p className="ttext-[#8A898E] text-sm tracking-[3px] text-center md:text-start mb-2 md:mx-mx-10 lg:mx-0">OUR TEAM</p>
                        <div className="flex flex-col md:flex-row md:mx-10 lg:mx-0 justify-between">
                            <h3 className="text-3xl md:text-4xl text-center md:text-start font-medium mb-5">Meet Our Team</h3>
                            <Button variant="outline" className="rounded-full max-w-25 mx-auto md:mx-0">Explore More</Button>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center mb-15 ms-10 lg:ms-0">
                        <div className="mb-5">
                            <img src={Userpic1} alt="" className="w-[50%] md:w-[75%] mx-auto md:mx-0" />
                            <p className="text-lg font-medium text-[#1E0E62] text-center md:text-left">Vanessa Laird</p>
                            <p className="text-[#15143966] text-center md:text-left">UI Designer</p>
                        </div>
                        <div className="mb-5">
                            <img src={Userpic2} alt="" className="w-[50%] md:w-[75%] mx-auto md:mx-0" />
                            <p className="text-lg font-medium text-[#1E0E62] text-center md:text-left">James Hall</p>
                            <p className="text-[#15143966] text-center md:text-left">Creative Director</p>
                        </div>
                        <div className="mb-5">
                            <img src={Userpic} alt="" className="w-[50%] md:w-[75%] mx-auto md:mx-0" />
                            <p className="text-lg font-medium text-[#1E0E62] text-center md:text-left">Irea Evans</p>
                            <p className="text-[#15143966] text-center md:text-left">Project Manager</p>
                        </div>
                        <div className="mb-5">
                            <img src={Userpic3} alt="" className="w-[50%] md:w-[75%] mx-auto md:mx-0" />
                            <p className="text-lg font-medium text-[#1E0E62] text-center md:text-left">Ricky Smith</p>
                            <p className="text-[#15143966] text-center md:text-left">Illustrato</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container max-w-[1100px] mx-auto flex flex-col md:flex-row justify-center items-center md:gap-20 mb-20">
                    <div className="text-center md:text-left flex-1">
                        <p className="ttext-[#8A898E] text-sm tracking-[3px] mb-2">OUR LOCATION</p>
                        <h3 className="text-3xl md:text-4xl font-medium mb-10">Our Headquaters Location</h3>
                        <div className="flex items-center gap-2 justify-center md:justify-start mb-5">
                            <MapPin size={18} />
                            <p className="font-medium">Headquarters Adress</p>
                        </div>
                        <p>Mr. John Smith, Flat 101, Sunshine Apartments, 123 Main Street, Anytown, CA 90210, United States.</p>
                    </div>
                    <div className="flex-1">
                        <img src={mapimgpng} alt="map" className="rounded-lg w-[75%] md:w-full mx-auto md:mx-none mt-5 md:mt-0" />
                    </div>
                </div>
            </section>
        </>
    )
}
export default About;