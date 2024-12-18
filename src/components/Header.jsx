import { useState } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logo from "../assets/svg/sliot-logo.svg";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleClick = () => {
    if (!openNavigation) return;

    enablePageScroll();
    setOpenNavigation(false);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <div
          className={`fixed top-0 w-full px-[5%] xl:px-[6%] mx-auto z-50 shadow-xl backdrop-blur-lg `}
        >
          <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-xl:py-4">
            <a className={`flex items-center w-[12rem] xl:mr-8 ${openNavigation ? "hidden" : ""}`} href="/">
              <img src={logo} width={100} height={100} alt="sliot" />
            </a>
            <button
              className={`xl:hidden ${openNavigation ? "hidden" : ""}`}
              onClick={toggleNavigation}
            >
              <MenuSvg />
            </button>
            <button
              className={`z-6 absolute top-4 right-6 text-white hover:text-gray-400 text-4xl font-semibold ${openNavigation ? "flex" : "hidden"}`}
              onClick={toggleNavigation}
            >
              ×
            </button>
            <nav
              className={`${
                openNavigation ? "flex backdrop-blur h-screen justify-center items-center" : "hidden"
              } rounded-lg xl:static xl:flex xl:bg-transparent`}
            >
              <div className="relative z-2 flex flex-col items-center justify-center m-auto xl:flex-row backdrop-blur-lg backdrop-brightness-75 xl:bg-transparent xl:px-0 rounded-xl text-center">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    onClick={handleClick}
                    className={`relative font-poppins text-base text-n-1 transition-colors hover:text-n-4 ${
                      item.onlyMobile ? "xl:hidden" : ""
                    } px-5 py-6 md:py-8 lg:text-sm lg:font-normal ${
                      item.url === pathname.pathname
                        ? "z-2 text-n-4"
                        : "text-n-1"
                    } hover:text-n-3`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
            </nav>
            <button
              className="hidden xl:inline-flex relative h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none"
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2b0091_0%,#393BB2_50%,#ff00a4_100%)]" />
              <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-2xl bg-slate-950 px-12 text-sm font-medium text-n-1 backdrop-blur-3xl gap-2">
                Contact
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;