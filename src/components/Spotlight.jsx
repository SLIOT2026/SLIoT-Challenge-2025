import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { spotlight } from "@/constants";
import { bg } from "@/assets";

const Spotlight = () => {
  return (
    <div className="w-full justify-center items-center text-n-1">
      <h2 className="text-4xl text-n-1 text-center">SLIoT IN THE SPOTLIGHT</h2>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24">
        {spotlight.map(({ id, title, des, img, link }) => (
          <div
            key={id}
            className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]"
          >
            <PinContainer title={link} href={link}>
              <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden h-[30vh] sm:h-[40vh] mb-5">
                <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162D]">
                  <img src={bg} alt="bg-img" />
                </div>
                <iframe
                  src={link}
                  title="What is IoT? Explained by Prof. Chandana Gamage | SLIoT Challenge 2023"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                  className="absolute bottom-0 w-full h-full p-4"
                ></iframe>
              </div>

              <h1 className="font-semibold lg:text-2xl md:text-xl text-base line-clamp-1">
                {title}
              </h1>

              <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                {des}
              </p>
            </PinContainer>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Spotlight;
