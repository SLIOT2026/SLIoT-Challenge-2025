import React from "react";
import robotImage from "../assets/images/robot.png"; // Replace with correct path
import shapeImage from "../assets/images/3d-shape.png";

const SLIoTHeroSection = () => {
  return (
    <section
      className="flex items-center justify-center"
      style={{ fontFamily: "Arial, sans-serif" }}
    >
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        {/* Left Content */}
        <div className="lg:w-[60%] text-center lg:text-left">
          <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl shadow-lg">
            <h1 className="text-8xl font-bold tracking-wide text-white">
              SLIoT 
            </h1>
            <h2 className="text-pink-500 text-5xl">Challenge 2025</h2>
            <p className="mt-6 text-sm text-gray-200 leading-relaxed mb-10 max-w-[550px]">
              The SLIoT Challenge is a competition that aims to provide a platform
              for students to showcase their innovative ideas and solutions in the
              field of Internet of Things (IoT). The competition is open to all
              undergraduate students from universities and higher education
              institutes in Sri Lanka.
            </p>
        
            <div className="relative inline-block">
              {/* Outer Thin Outline Border */}
              <div className="absolute inset-0 translate-y-2 translate-x-2 border-2 border-gray-400 rounded-xl"></div>

                {/* Gradient Button */}
                <button className="relative px-16 py-3 text-white text-lg font-semibold rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 shadow-lg hover:opacity-90 transition duration-300">
                  Join Now
                </button>
              </div>
          
            
            <div className="flex justify-end items-end mt-10 lg:-mt-10 gap-10">
              {/* <div className="p-6">
                <img
                  src={robotImage}
                  alt="Robot"
                  className="w-80 lg:w-96 drop-shadow-lg"
                />
              </div> */}
              <img
                src={shapeImage}
                alt="3D Shape"
                className="w-40 lg:w-52 opacity-90"
              />
              <div className="text-gray-300 text-sm flex flex-col items-center lg:items-end">
                <span>Powered By</span>
                <span className="text-lg font-semibold text-green-400">
                  SLTMOBITEL
                </span>
                <span className="text-xs">The Connection</span>
              </div>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default SLIoTHeroSection;
