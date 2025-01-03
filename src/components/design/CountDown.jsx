import React from 'react'

import { motion } from "framer-motion";

import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import MagicButton from '../ui/MagicButton';

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "2025-01-08";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const ShiftingCountdown = () => {


    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
  
  
    let newTime = 0;
  if(now>end){
    return (
        <div className="flex flex-col items-center justify-center p-4 bg-transparent">

        <motion.h1
              initial={{opacity:0,y:10}}
              whileInView={{opacity:1, y:0,  transition: {
                duration: 1 // Animation duration
              }}}
              
              
              
              className="flex justify-center px-10 py-6 mt-20 mb-10 text-2xl text-center text-red-600 uppercase border rounded-lg font-poppins sm:text-5xl" >Registration Closed</motion.h1>
             
             </div>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center p-4 bg-transparent">

<motion.h1
      initial={{opacity:0,y:10}}
      whileInView={{opacity:1, y:0,  transition: {
        duration: 3 // Animation duration
      }}}
      
      
      
      className="flex justify-center py-2 mt-20 mb-10 text-4xl text-center text-white uppercase font-poppins sm:text-5xl" >Registration Closes In</motion.h1>
      <div className="flex items-center justify-center w-full mx-auto md:gap-10 ">
        <CountdownItem unit="Day" text="days" />
        <CountdownItem unit="Hour" text="hours" />
        <CountdownItem unit="Minute" text="minutes" />
        <CountdownItem unit="Second" text="seconds" />
      </div>
      <a className='mt-4' href='https://bit.ly/sliot2025-register' target='_blank'>
        <MagicButton title="Register Now" />
      </a>
    </div>
  );
};








const CountdownItem = ({ unit, text }) => {
  const { ref, time } = useTimer(unit);


  return (
    <motion.div
    initial={{opacity:0,scale:0.9}}
    whileInView={{opacity:1, scale:1,  transition: {
      duration: 1 // Animation duration
    }}}
    className="flex flex-col items-center justify-center gap-1 font-mono rounded-full h-28 w-28 sm:h-40 sm:w-40 bg-gradient-to-r from-fuchsia-900 to-stone-900border-2 border-slate-200 md:gap-2">
      <div className="relative w-full overflow-hidden text-center">
        <span
          ref={ref}
          className="block text-4xl font-medium text-white sm:text-6xl xl:text-7xl"
        >
          {time}
        </span>
      </div>
      <span className="text-xs font-light text-n-4 md:text-sm lg:text-base">
        {text}
      </span>
    </motion.div>
  );
};

export default ShiftingCountdown;


const useTimer = (unit) => {
  const [ref, animate] = useAnimate();

  const intervalRef = useRef(null);
  const timeRef = useRef(0);

  const [time, setTime] = useState(0);

  useEffect(() => {
    intervalRef.current = setInterval(handleCountdown, 1000);

    return () => clearInterval(intervalRef.current || undefined);
  }, []);

  const handleCountdown = async () => {
    const end = new Date(COUNTDOWN_FROM);
    const now = new Date();
    const distance = +end - +now;

    let newTime = 0;

    if (unit === "Day") {
      newTime = Math.floor(distance / DAY);
    } else if (unit === "Hour") {
      newTime = Math.floor((distance % DAY) / HOUR);
    } else if (unit === "Minute") {
      newTime = Math.floor((distance % HOUR) / MINUTE);
    } else {
      newTime = Math.floor((distance % MINUTE) / SECOND);
    }

    if (newTime !== timeRef.current) {
      // Exit animation
      await animate(
        ref.current,
        { y: ["0%", "-50%"], opacity: [1, 0] },
        { duration: 0.35 }
      );

      timeRef.current = newTime;
      setTime(newTime);

      // Enter animation
      await animate(
        ref.current,
        { y: ["50%", "0%"], opacity: [0, 1] },
        { duration: 0.35 }
      );
    }
  };

  return { ref, time };
};
    


