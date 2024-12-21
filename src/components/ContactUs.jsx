"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card-new";
import { chairman, uom } from "@/assets";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-[4%] md:px-[5%] lg:px-[10%]" id="contact"> 
        <motion.h2
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0,  
        transition: {
            duration: 2 
        }}} 
        className="text-4xl text-white sm:text-5xl font-poppins text-center mt-10 lg:mt-20">
            Contact Us
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:gap-15 lg:gap-28 md:mt-0">
            <CardContainer className="inter-var">
                <CardBody
                    className="rounded-3xl bg-transparent relative group/card border-slate-800 w-full md:max-w-[31rem] lg:max-w-[36rem] h-auto p-6 border shadow-lg shadow-black"
                    >
                    <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4 mb-2 flex justify-center">
                        <img
                        src={chairman}
                        className="h-40 w-40 md:h-60 md:w-60 object-cover rounded-full group-hover/card:shadow-xl items-center border-1 border-n-1"
                        alt="thumbnail" />
                    </CardItem>
                    <CardItem
                    translateZ="50"
                    className="text-lg md:text-xl font-bold text-n-1 dark:text-white">
                        Pavan Epa
                    </CardItem>
                    <CardItem
                    translateZ="50"
                    className="text-sm md:text-lg text-neutral-200 dark:text-white">
                        Event Chairman
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-200 text-sm md:text-base max-w-sm mt-2 dark:text-neutral-300">
                        Department of Computer Science & Engineering, University of Moratuwa<br />pavan.22@cse.mrt.ac.lk
                    </CardItem>
                </CardBody>
            </CardContainer>
            <CardContainer className="inter-var">
                <CardBody
                    className="rounded-3xl bg-transparent relative group/card border-slate-800 w-full md:max-w-[30rem] lg:max-w-[35rem] h-auto p-6 border shadow-lg shadow-black">
                    <CardItem translateZ="100" rotateX={20} rotateZ={-10} className="w-full mt-4 mb-2 flex justify-center">
                        <img
                        src={chairman}
                        className="h-40 w-40 md:h-60 md:w-60 object-cover rounded-full group-hover/card:shadow-xl items-center border-1 border-n-1"
                        alt="thumbnail" />
                    </CardItem>
                    <CardItem
                    translateZ="50"
                    className="text-lg md:text-xl font-bold text-n-1 dark:text-white">
                        Kaveesha Kapuruge
                    </CardItem>
                    <CardItem
                    translateZ="50"
                    className="text-sm md:text-lg text-neutral-200 dark:text-white">
                        Event Vice Chairman
                    </CardItem>
                    <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-200 text-sm md:text-base max-w-sm mt-2 dark:text-neutral-300">
                        Department of Computer Science & Engineering, University of Moratuwa<br />kaveesha.22@cse.mrt.ac.lk
                    </CardItem>
                </CardBody>
            </CardContainer>
        </div>
    </div>
  );
};

export default ContactUs;