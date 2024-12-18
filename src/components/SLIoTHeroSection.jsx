import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";
import { robot, sltLogo } from "@/assets";
import { BackgroundBeams } from "./ui/background-beams";

const SLIoTHeroSection = () => {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-center px-4 md:px-6 lg:px-12 gap-4 lg:gap-0 relative antialiased"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <BackgroundBeams className="absolute top-0 left-0 w-full h-full -z-10" />
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="text-center md:text-left">
          <div className="p-4 md:p-6">
            <h1 className="relative text-6xl md:text-7xl lg:text-8xl font-nicoMoji tracking-wide bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-400 z-10">
              SLIoT 
            </h1>
            <h2 className="relative text-pink-500 text-4xl lg:text-5xl z-10 font-nicoMoji">Challenge 2025</h2>
            <p className="relative mt-4 md:mt-6 text-sm lg:text-base text-n-1 leading-relaxed mb-6 md:mb-10 max-w-full md:max-w-[550px] z-10">
              The SLIoT Challenge is a competition that aims to provide a platform
              for students to showcase their innovative ideas and solutions in the
              field of Internet of Things (IoT). The competition is open to all
              undergraduate students from universities and higher education
              institutes in Sri Lanka.
            </p>
        
            <div className="relative inline-block">
              <div className="absolute inset-0 translate-y-1 lg:translate-y-2 translate-x-1 lg:translate-x-2 border-2 border-gray-400 rounded-xl"></div>
                <button className="relative px-8 lg:px-12 py-2 lg:py-3 text-white text-base lg:text-lg font-nicoMoji rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg transition duration-300 z-10">
                  Join Now
                </button>
              </div>
          
            
            <div className="relative flex justify-center md:justify-end items-end mt-6 md:mt-10 lg:-mt-10 gap-6 md:gap-10">
              <div className="relative text-n-1 text-sm font-bold flex flex-col items-center md:items-end z-10 mt-4 md:mt-8">
                Powered By
                <img 
                  src={sltLogo}
                  alt="SLT-Mobitel-logo"
                  className="relative w-32 md:w-48 h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <CardContainer className="inter-var z-10 relative">
        <CardBody className="group/card w-auto sm:w-[20rem] md:w-[24rem] lg:w-[30rem] h-auto z-10 relative">
          <CardItem translateZ="100" className="w-full mt-4 z-10 relative">
            <img
              src={robot}
              className="relative w-full object-cover rounded-xl z-10"
              alt="thumbnail"
            />
          </CardItem>
        </CardBody>
      </CardContainer>
    </section>
  );
};

export default SLIoTHeroSection;