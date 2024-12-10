import React from "react";
import { logo } from "../assets";
import { navigation, socials } from "../constants";

const Footer = () => {
  return (
    <>
      <div className="bg-n-15 flex flex-col md:flex-row px-[5%] lg:px-[10%] mt-10 py-[2rem] gap-4 justify-center items-center">
        <div className="pt-5 w-full flex justify-between items-center">
          <div className="flex items-center">
            <img src={logo} width={50} height={50} alt="mini-golf-hire" />
            <h5 className="h5 text-n-1 font-bold text-l md:text-3xl ml-2">
              SLIoT Challenge 2025
            </h5>
          </div>
          <ul className="flex gap-5 flex-wrap">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 md:w-6 md:h-6 rounded-full border border-n-1 transition-colors"
              >
                <img
                  src={item.iconUrl}
                  width={14}
                  height={14}
                  alt={item.title}
                />
              </a>
            ))}
          </ul>
        </div>
      </div>
      <div className="bg-n-15 py-3 text-center text-n-1 px-[5%] lg:px-[10%]">
        <hr className="border-n-1 max-w-[35rem] mx-auto" />
        <p className="text-xs mt-2 text-n-1">
          © 2024 SLIoT Challenge. All rights reserved.
        </p>
      </div>
    </>
  );
};

export default Footer;
