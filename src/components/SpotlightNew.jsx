"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card-new";
import { spotlight } from "@/constants";
import { bg } from "@/assets";
import { motion } from "framer-motion";

export function SpotlightNew() {
  return (
    <div className="w-full justify-center items-center text-n-1 mt-20" id="spotlight">
      <motion.h2
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1, y:0,  
      transition: {
        duration: 2 
      }}} 
      className="text-4xl text-white sm:text-5xl font-poppins text-center">
        SLIoT IN THE SPOTLIGHT
      </motion.h2>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8">
            {spotlight.map(({ id, title, des, des2, img, link }) => (
                <div
                key={id}
                className="h-[20rem] xxs:h-[24rem] xs:h-[26rem] sm:h-[30rem] lg:min-h-[30.5rem] "
                >
                    <CardContainer className="inter-var">
                        <CardBody
                            className="bg-transparent relative group/card w-auto sm:w-[570px] h-auto pb-6 px-4 rounded-2xl  shadow-[0_8px_16px_rgb(0_0_0/0.4)] border border-white/[0.1]">
                            <CardItem translateZ="60" className="relative w-full mt-4">
                                <div className="relative w-full h-full overflow-hidden lg:rounded-2xl bg-[#13162D]">
                                    <img src={bg} alt="bg-img" />
                                </div>
                                <iframe
                                    src={link}
                                    title=""
                                    frameborder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerpolicy="strict-origin-when-cross-origin"
                                    allowfullscreen
                                    className="absolute bottom-0 w-full h-full p-3"
                                ></iframe>
                            </CardItem>
                            <CardItem
                                translateZ="50"
                                className="relative text-xl font-bold text-white mt-4">
                                <h1 className="font-semibold lg:font-normal md:text-xl text-base line-clamp-1 px-4">
                                    {title}
                                </h1>
                            </CardItem>
                            <CardItem
                                translateZ="50"
                                className="relative text-sm font-semibold text-white">
                                <p className="lg:font-normal font-light text-sm line-clamp-2 px-4">
                                    {des}
                                </p>
                            </CardItem>
                        </CardBody>
                    </CardContainer>
                </div>
            ))}
        </div>
    </div>
  );
}
