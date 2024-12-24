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
            className="mt-8 py-4 text-center text-4xl text-white sm:text-5xl font-poppins"
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
            As we navigate this transformative era, let's remember that our decisions today will shape the legacy we leave for future generations. Together, we have the power to forge a future where industry and sustainability walk hand in hand, leaving a positive mark on our planet and its inhabitants. Join us in this journey towards a more sustainable, technologically-driven tomorrow.
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
            You can participate in SLIoT Challenge 2025 as teams or as individuals. Initially you can register as an expression of interest. We will be conducting an online introductory session to inform more about the competition and team forming. After that you need to submit a proposal for your idea along with team details. The maximum size of a team is 5 members. A participant can only be in one team. Each team should appoint a leader, and the organizers of SLIoT Challenge will communicate to the leaders directly regarding any announcements in the competition. The contestants can participate in the school category, undergraduate category or the open category.
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
            There will be workshops physically at University of Moratuwa and online sessions to guide the competitors to their maximum potential. Multiple rounds of competition will be held and competitors will be eliminated at each round. The final round will take place physically at University of Moratuwa and the winners will be rewarded with exciting prizes.
        </motion.p>
       </LampContainer>
    </div>
  )
};

export default Details;