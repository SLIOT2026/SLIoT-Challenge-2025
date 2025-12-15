"use client";

import React from "react";
import { chairman, uom, viceChairman1, viceChairman2 } from "@/assets";
import { motion } from "framer-motion";

const ContactUs = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center mb-8 px-[4%] md:px-[5%] lg:px-[10%]" id="contact">
        <motion.h2
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0,
        transition: {
            duration: 2
        }}}
        className="text-4xl text-white sm:text-5xl font-poppins text-center mt-10 lg:mt-20">
            <div className="audiowide text-4xl sm:text-5xl mt-32 mb-24 text-center text-[#77FF00]">CONTACT US</div>
        </motion.h2>
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:gap-8 md:mt-0 flex-wrap">
            <div className="inter-var">
                <div className="rounded-3xl bg-transparent relative group/card border-slate-800 w-full md:max-w-[31rem] lg:max-w-[36rem] h-auto p-6 border shadow-lg shadow-black/50">
                    <div className="w-full mt-4 mb-2 flex justify-center">
                        <img
                        src={chairman}
                        className="h-40 w-40 md:h-60 mb-8 md:w-60 object-cover rounded-full items-center border-1 border-n-1"
                        alt="thumbnail" />
                    </div>
                    <div className="text-lg md:text-xl text-center font-bold text-n-1 dark:text-white">
                        Buwaneka Halpage
                    </div>
                    <div className="text-sm md:text-lg text-center text-neutral-200 dark:text-white">
                        Event Chairman
                    </div>
                    <p className="text-neutral-200 text-center text-sm md:text-base max-w-sm my-4 dark:text-neutral-300">
                        Department of Computer Science & Engineering, University of Moratuwa<br />buwanekah.23@cse.mrt.ac.lk
                    </p>
                </div>
            </div>
            <div className="inter-var">
                <div className="rounded-3xl bg-transparent relative group/card border-slate-800 w-full md:max-w-[30rem] lg:max-w-[35rem] h-auto p-6 border shadow-lg shadow-black/50">
                    <div className="w-full mt-4 mb-2 flex justify-center">
                        <img
                        src={viceChairman1}
                        className="h-40 w-40 md:h-60 mb-8 md:w-60 object-cover rounded-full items-center border-1 border-n-1"
                        alt="thumbnail" />
                    </div>
                    <div className="text-lg md:text-xl text-center font-bold text-n-1 dark:text-white">
                        Yasiru Bandara
                    </div>
                    <div className="text-sm md:text-lg text-center text-neutral-200 dark:text-white">
                        Event Vice Chairman
                    </div>
                    <p className="text-neutral-200 text-sm text-center md:text-base max-w-sm my-4 dark:text-neutral-300">
                        Department of Computer Science & Engineering, University of Moratuwa<br />yasirub.23@cse.mrt.ac.lk
                    </p>
                </div>
            </div>
            <div className="inter-var">
                <div className="rounded-3xl bg-transparent relative group/card border-slate-800 w-full md:max-w-[30rem] lg:max-w-[35rem] h-auto p-6 border shadow-lg shadow-black/50">
                    <div className="w-full mt-4 mb-2 flex justify-center">
                        <img
                        src={viceChairman2}
                        className="h-40 w-40 md:h-60 md:w-60 mb-8 object-cover rounded-full items-center border-1 border-n-1"
                        alt="thumbnail" />
                    </div>
                    <div className="text-lg md:text-xl  text-center font-bold text-n-1 dark:text-white">
                        Gishan Bandara
                    </div>
                    <div className="text-sm md:text-lg  text-center text-neutral-200 dark:text-white">
                        Event Vice Chairman
                    </div>
                    <p className="text-neutral-200 text-sm md:text-base text-center max-w-sm my-4 dark:text-neutral-300">
                        Department of Computer Science & Engineering, University of Moratuwa<br />gishanb.23@cse.mrt.ac.lk
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
};

export default ContactUs;