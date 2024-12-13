import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { navigation } from "../constants";
import RoundButton from "./RoundButton";
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
          className={`fixed top-0 w-full px-[5%] lg:px-[4%] xl:px-[10%] mx-auto z-50 lg:bg-n-1 lg:border-b-2 shadow-lg lg:bg-opacity-80 lg:backdrop-blur-sm ${
            openNavigation
              ? "bg-n-1 bg-opacity-80"
              : "bg-n-1 bg-opacity-80 lg:backdrop-blur-sm"
          }`}
        >
          <div className="flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4">
            <a className="flex items-center w-[12rem] xl:mr-8" href="/">
              <img src={logo} width={100} height={100} alt="orea" />
            </a>

            <nav
              className={`${
                openNavigation ? "flex" : "hidden"
              } fixed top-[7rem] bottom-[2rem] left-[5%] right-[5%] rounded-lg bg-n-1 bg-opacity-80 lg:static lg:flex lg:bg-transparent`}
            >
              <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
                {navigation.map((item) => (
                  <a
                    key={item.id}
                    href={item.url}
                    className={`block relative font-poppins text-xl text-n-8 transition-colors hover:text-n-14 ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-sm lg:font-semibold ${
                      item.url === pathname.pathname
                        ? "z-2 lg:text-n-8"
                        : "lg:text-n-8/50"
                    } lg:leading-5 lg:hover:text-n-14`}
                  >
                    {item.title}
                  </a>
                ))}
              </div>
              <HamburgerMenu />
            </nav>

            <RoundButton
              className="hidden lg:flex text-n-8 lg:text-sm hover:text-n-1"
              href="/booknow"
            >
              Join Now
            </RoundButton>

            <RoundButton
              className="ml-auto lg:hidden"
              px="px-3"
              onClick={toggleNavigation}
            >
              <MenuSvg openNavigation={openNavigation} />
            </RoundButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
