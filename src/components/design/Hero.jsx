import { useEffect, useState } from "react";
import { MouseParallax } from "react-just-parallax";

import PlusSvg from "../../assets/svg/PlusSvg";
import { golfball } from "../../assets";

export const Gradient = () => {
  return (
    <>
      <div className="relative z-1 h-6 mx-2.5 bg-n-11 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-8" />
      <div className="relative z-1 h-6 mx-6 bg-n-11/70 shadow-xl rounded-b-[1.25rem] lg:h-6 lg:mx-20" />
    </>
  );
};

export const BottomLine = () => {
  return (
    <>
      <div className="hidden absolute top-[55.25rem] left-10 right-10 h-0.25 bg-n-6 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] left-[2.1875rem] z-2 pointer-events-none xl:block" />

      <PlusSvg className="hidden absolute top-[54.9375rem] right-[2.1875rem] z-2 pointer-events-none xl:block" />
    </>
  );
};

const Rings = () => {
  return (
    <>
      <div className="absolute top-1/2 left-1/2 w-[65.875rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[36.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute top-1/2 left-1/2 w-[23.125rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
    </>
  );
};

export const BackgroundCircles = ({ parallaxRef }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="absolute -top-[42.375rem] left-1/2 w-[78rem] aspect-square border border-n-2/5 rounded-full -translate-x-1/2 md:-top-[38.5rem] xl:-top-[32rem]">
      <Rings />

      {/* Moving background colored circle balls */}
      <MouseParallax strength={0.07} parallaxContainerRef={parallaxRef}>
        <div className="absolute bottom-1/2 left-1/2 w-2 h-1/2 origin-bottom rotate-[46deg]">
          <img
            src={golfball}
            className={`w-2 h-2 -ml-1 -mt-36 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            alt="Golf Ball"
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-4 h-1/2 origin-bottom -rotate-[56deg]">
          <img
            src={golfball}
            className={`w-4 h-4 -ml-1 -mt-32 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            alt="Golf Ball"
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-4 h-1/2 origin-bottom rotate-[54deg]">
          <img
            src={golfball}
            className={`hidden w-4 h-4 -ml-1 mt-[12.9rem] xl:block transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            alt="Golf Ball"
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-3 h-1/2 origin-bottom -rotate-[65deg]">
          <img
            src={golfball}
            className={`w-3 h-3 -ml-1.5 mt-52 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            alt="Golf Ball"
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-6 h-1/2 origin-bottom -rotate-[85deg]">
          <img
            src={golfball}
            className={`w-6 h-6 -ml-3 -mt-3 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            alt="Golf Ball"
          />
        </div>

        <div className="absolute bottom-1/2 left-1/2 w-6 h-1/2 origin-bottom rotate-[70deg]">
          <img
            src={golfball}
            className={`w-6 h-6 -ml-3 -mt-3 transition-transform duration-500 ease-out ${
              mounted ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
            }`}
            alt="Golf Ball"
          />
        </div>
      </MouseParallax>
    </div>
  );
};
