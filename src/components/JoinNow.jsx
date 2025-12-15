"use client";

import React from "react";
import { motion } from "framer-motion";

const JoinNow = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center px-[4%] md:px-[5%] lg:px-[10%] py-10 md:py-20" id="join">
      <motion.h2
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0,
        transition: {
          duration: 2
        }}}
        className="text-4xl text-white sm:text-5xl font-poppins text-center mt-10 lg:mt-20">
        Join the Challenge
      </motion.h2>

      <motion.div
        initial={{opacity:0,y:30}}
        whileInView={{opacity:1, y:0,
        transition: {
          duration: 1.5,
          delay: 0.3
        }}}
        className="max-w-4xl mx-auto mt-10 text-center">
        <p className="text-neutral-200 text-lg md:text-xl mb-8 leading-relaxed">
          Ready to revolutionize the future with IoT? The SLIoT Challenge 2026 invites you to develop
          innovative IoT solutions that address major local and global challenges. Organized by the
          University of Moratuwa in collaboration with SLT-MOBITEL and IESL, this competition provides
          a competitive platform to showcase your creativity and technical expertise. Compete in School,
          Undergraduate, or Open categories and bring your ideas to life!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="https://docs.google.com/forms/d/e/1FAIpQLSd4YOrRO9PAbdBH_VaZxJRVwbRw2Z0jj3LmUmzvdpC8l7Jhhw/viewform?usp=header"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-purple-500 to-blue-500 text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg shadow-purple-500/50 hover:shadow-purple-500/75 transition-all duration-300">
            Register Now
          </motion.a>

          <motion.a
            href="https://chat.whatsapp.com/GtykE7SlPouIlaDrRfK3rH?mode=wwt"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white font-bold text-lg px-12 py-4 rounded-full shadow-lg shadow-green-500/50 hover:shadow-green-500/75 transition-all duration-300">
            Join WhatsApp
          </motion.a>
        </div>

        <p className="text-neutral-400 text-sm mt-6">
          Don't miss out on this incredible opportunity to showcase your skills and win amazing prizes!
        </p>
      </motion.div>
    </div>
  );
};

export default JoinNow;
