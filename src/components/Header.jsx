import { useState } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
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

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-center items-center">
        <div
          className={`fixed top-0 w-full px-[5%] lg:px-[4%] xl:px-[10%] mx-auto z-50 shadow-lg backdrop-blur-lg ${
            openNavigation
              ? "bg-white/30"
              : "bg-white/45 lg:backdrop-blur-lg"
          }`}
        >
          <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="flex items-center w-[12rem] xl:mr-8" href="/">
              <img src={logo} width={100} height={100} alt="orea" />
            </a>

            <nav
              className={`${
                openNavigation ? "flex" : "hidden"
              } fixed top-[7rem] bottom-[2rem] left-[5%] right-[5%] rounded-lg bg-white/30 lg:static lg:flex lg:bg-transparent`}
            >
              <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className={`block relative font-poppins text-base text-n-1 transition-colors hover:text-n-4 ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-normal ${
                      item.url === pathname.pathname
                        ? "z-2 lg:text-n-4"
                        : "lg:text-n-2"
                    } lg:leading-5 lg:hover:text-n-1`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <HamburgerMenu />
            </nav>

            <button className="relative px-6 py-2 text-lg font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-pink-500 rounded-lg border-2 border-transparent hover:text-white transition duration-300 before:absolute before:inset-0 before:-z-10 before:rounded-lg before:bg-gradient-to-r before:from-blue-400 before:to-pink-500 before:content-[''] before:p-[2px]">
      Contact
    </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
