"use client";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const LampContainer = ({
  children,
  className
}) => {
  return (
    (<div
      className={cn(
        "relative flex min-h-[900px] flex-col items-center justify-center overflow-hidden bg-slate-900/[0.8] w-full rounded-3xl z-0 border border-white/[0.1] shadow-lg transition duration-200 shadow-black",
        className
      )}>
      <div
        className="relative z-0 flex items-center justify-center flex-1 w-full scale-y-125 isolate ">
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto right-1/2 h-56 overflow-visible w-[30rem] bg-gradient-conic from-pink-500 via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]">
          <div
            className="absolute  w-[100%] left-0 bg-slate-900/[0.8] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
          <div
            className="absolute  w-40 h-[100%] left-0 bg-slate-900/[0.8]  bottom-0 z-20 [mask-image:linear-gradient(to_right,white,transparent)]" />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), var(--tw-gradient-stops))`,
          }}
          className="absolute inset-auto left-1/2 h-56 w-[30rem] bg-gradient-conic from-transparent via-transparent to-pink-500 text-white [--conic-position:from_290deg_at_center_top]">
          <div
            className="absolute  w-40 h-[100%] right-0 bg-slate-900/[0.8]  bottom-0 z-20 [mask-image:linear-gradient(to_left,white,transparent)]" />
          <div
            className="absolute  w-[100%] right-0 bg-slate-900/[0.8] h-40 bottom-0 z-20 [mask-image:linear-gradient(to_top,white,transparent)]" />
        </motion.div>
        <div
          className="absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-slate-900/[0.8] blur-2xl"></div>
        <div
          className="absolute z-50 w-full h-48 bg-transparent top-1/2 opacity-10 backdrop-blur-md"></div>
        <div
          className="absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-pink-500 opacity-50 blur-3xl"></div>
        <motion.div
          initial={{ width: "8rem" }}
          whileInView={{ width: "16rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-30 h-36 w-64 -translate-y-[6rem] rounded-full bg-pink-400 blur-2xl"></motion.div>
        <motion.div
          initial={{ width: "15rem" }}
          whileInView={{ width: "30rem" }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-[7rem] bg-pink-400 "></motion.div>

        <div
          className="absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-slate-900/[0.8] "></div>
      </div>
      <div className="relative z-50 flex flex-col items-center px-5 -translate-y-2 xxs:-translate-y-12 xs:-translate-y-52 sm:-translate-y-60 md:-translate-y-28 lg:-translate-y-72">
        {children}
      </div>
    </div>)
  );
};
