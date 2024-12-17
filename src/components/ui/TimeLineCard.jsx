import React from 'react'
import { motion } from "framer-motion";

import { gsap } from "gsap";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
export default function TimeLineCard({event,index}) {
  return (


         <motion.div

initial={{
    opacity: 0,
    // if odd index card,slide from right instead of left
    x: index % 2 === 0 ? 50 : -50
  }}
  whileInView={{
    opacity: 1,
    x: 0, // Slide in to its original position
    transition: {
      duration: 1 // Animation duration
    }
  }}
  viewport={{ once: true }}
                    key={index}
                    className="relative flex items-center justify-between timeline-item rounded-3xl md:justify-normal md:odd:flex-row-reverse group"
                  >
                    <div className="flex items-center justify-center w-8 h-8 rounded-full group-[.is-active]:bg-n-14 bg-n-14 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-6 md:group-even:translate-x-6">
                     {event.isActive? <FaCheck/>:<FaCalendarAlt/>}
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent relative group z-0 rounded-2xl justify-center align-middle shadow-2xl shadow-black">
                      <div className="p-10 w-full bg-transparent border-n-14 m-auto hover:border border  hover:border-n-4 hover:shadow-lg hover:shadow-black transition-all duration-700 rounded-[1em] overflow-hidden relative group z-0">
                        <div className="circle absolute h-[10em] w-[10em] -top-[5.5em] -right-[5.5em] rounded-full  group-hover:scale-[800%] duration-1000 z-[-1]  bg-n-23"></div>
                        <h1 className="z-20 text-white font-poppins font-bold group-hover:text-n-14 duration-500 text-lg  sm:text-[1.4em]">
                          {event.date}
                        </h1>
                        <h1 className="z-20  font-Poppins font-semibold text-white group-hover:text-white duration-500 text-sm sm:text-[1.4em]">
                          {event.title}
                        </h1>
                      </div>
                    </div>
    </motion.div>
             
  )
}
