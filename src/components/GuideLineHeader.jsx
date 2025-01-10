import { useState, useEffect } from "react";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logo from "../assets/svg/sliot-logo.svg";
import { closeMenu, openMenu } from "./animations";

const GuilineHeader = () => {
  




  return (
    <div className="flex flex-col items-center justify-center min-h-40">
      
     
        <div
          className={`fixed top-0 w-full px-[5%] xl:px-[6%] mx-auto z-40 shadow-xl backdrop-blur-lg backdrop-brightness-75 nav-primary h-20  flex justify-between`}
        >
        <a
              className="flex items-center xl:mr-8 w-[12rem]"
              
              href="/"
            >
              <img src={logo} width={100} height={100} alt="sliot" />
            </a>
            <div className="flex items-center justify-center gap-4">
              
      <button
              className="hidden xl:inline-flex relative h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none"
             
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2b0091_0%,#393BB2_50%,#ff00a4_100%)]" />
              <span className="inline-flex items-center justify-center w-full h-full gap-2 px-12 text-sm font-medium cursor-pointer rounded-2xl bg-slate-950 text-n-1 backdrop-blur-3xl">
               Back
              </span>
            </button>
            </div>
        </div>
   
    </div>
  );
};

export default   GuilineHeader;