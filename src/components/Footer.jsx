import React from "react";
import { logo } from "../assets";
import { socials } from "../constants";

const Footer = () => {
  return (
    <>
      <div className="bg-slate-950 backdrop-blur-md bg-opacity-40 backdrop-brightness-75 flex flex-col md:flex-row px-[5%] lg:px-[10%] mt-10 py-[2rem] gap-4 justify-center items-center">
        <div className="py-3 w-full flex justify-between items-center flex-col sm:flex-row gap-6">
          <div className="flex items-center">
            <p className="text-sm mt-2 text-n-1">
              © 2024 SLIoT Challenge. All rights reserved.
            </p>
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
    </>
  );
};

export default Footer;
