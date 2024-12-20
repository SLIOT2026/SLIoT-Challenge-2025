import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { CardCarousel } from "./ui/CardCarousel";
import { organizers } from "@/constants";

const EventOrganizers = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          once: true, 
        });
      }, []);
    return (
        <div className="flex flex-col" id="partners">
            <hr className="border-t-2 border-gray-300 mx-[10%] mb-4 mt-20 animate-grow" />
            <div className=" text-white  py-12 text-center w-full px-[5%] lg:px-[4%] xl:px-[10%] mx-auto">
                <div className="lg:flex gap-10 h-max items-center ">
                    <div className="items-center">
                        <h1 className="text-4xl text-white sm:text-5xl font-poppins uppercase mb-6">
                            Event <span className="text-[#c20c8a]">Organizers</span> 
                        </h1>
                    </div>
                    <div className="max-w-full mx-auto text-lg leading-relaxed text-start">
                        <p>
                            This competition is organized by the Department of Computer Science & Engineering,
                            University of Moratuwa in collaboration with SLT Mobitel and The Institution of Engineers Sri Lanka (IESL).
                        </p>
                        <p className="mt-4">
                            University of Moratuwa is a leading university in Sri Lanka which consists of six faculties.
                            The Department of Computer Science & Engineering that belongs to the Faculty of Engineering
                            is one of the prominent departments in Sri Lanka to offer an engineering degree in computer science.
                        </p>
                        <p className="mt-4">
                            SLT-MOBITEL is the Leading Digital Service provider and the No. 1{" "}
                            broadband and backbone infrastructure services provider
                            in the country. For more information, visit{" "}
                            <a href="https://sltmobitel.lk" target="_blank" rel="noopener noreferrer"
                                className="text-[#c20c8a] underline">
                                sltmobitel.lk
                            </a>.
                        </p>
                    </div>
                </div>
            </div>
            {/* <div className="glass-card flex flex-wrap justify-center items-center gap-20  w-screen py-8  bg-gradient-to-r from-[rgba(255,255,255,0.2)] via-transparent to-[rgba(255,255,255,0.2)] bg-white bg-opacity-10 ">
                <img
                    src={cse} 
                    alt="CSE Logo"
                    className="w-52 "
                    data-aos="fade-up" />
                <img
                    src={iesl} 
                    alt="IESL Logo"
                    className="w-52"
                    data-aos="fade-up" />
                <img
                    src={sltLogo} 
                    alt="SLT Mobitel Logo"
                    className="w-72"
                    data-aos="fade-up" />
                <img
                    src={uom} 
                    alt="UoM Logo"
                    className="w-36"
                    data-aos="fade-up" />
            </div> */}
            <CardCarousel 
                items={organizers}
                direction='right'
                speed='slow'
            />
        </div>
        
    );
};

export default EventOrganizers;
