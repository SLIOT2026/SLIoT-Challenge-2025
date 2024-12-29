import React from 'react'
import { LampContainer } from './ui/lamp'
import { motion } from "framer-motion";

const Details = () => {
  return (
    <div className='max-w-[90%] md:max-w-[70%] mx-auto' id='challenge'>
      <LampContainer>
        <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="py-4 mt-8 text-4xl text-center text-white sm:text-5xl font-poppins"
        >
            CHALLENGE DETAILS
        </motion.h1>
        <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="mt-8 text-white text-[16px] md:text-[16px] sm:px-6 md:px-10"
        >
           In a world driven by rapid technological advancements, the power to shape a better tomorrow lies in our hands. The SLIoT Challenge 2025 is not just a competition - it's a call to action for innovators, creators and changemakers to craft solutions that bridge technology and real-world challenges. Together, we can envision a future where innovation meets purpose and where smart solutions create lasting positive impacts on society and the environment.
        </motion.p>
        <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="mt-6 text-white text-[14px] md:text-[16px] sm:px-6 md:px-10"
        >
          Participants can join the SLIoT Challenge 2025 either as individuals or in teams. The journey begins with registration, where participants express their interest in the competition. An online introductory session will follow, providing detailed information about the challenge and team formation. Teams, consisting of up to five members, must then submit a proposal outlining their idea and team details. Each participant can only be part of one team and each team should appoint a leader and the organizers of SLIoT Challenge will communicate to the leaders directly regarding any announcements in the competition. Participants can compete in one of three categories: School, Undergraduate, or Open.

        </motion.p>
        <motion.p
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
            }}
            className="mt-6 text-white text-[14px] md:text-[16px] sm:px-6 md:px-10"
        >
          To support participants in reaching their full potential, we will conduct a series of workshops at the University of Moratuwa and online. These sessions are designed to provide guidance and enhance competitors' skills. The competition will consist of multiple elimination rounds, culminating in the final round, held physically at the University of Moratuwa. The most outstanding teams and individuals will be rewarded with exciting prizes for their creativity, innovation and impact.

        </motion.p>
       </LampContainer>
    </div>
  )
};

export default Details;