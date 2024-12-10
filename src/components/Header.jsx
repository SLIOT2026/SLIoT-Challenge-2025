import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { downarrow } from "../assets";
import { navigation } from "../constants";
import RoundButton from "./RoundButton";
import MenuSvg from "../assets/svg/MenuSvg";
import { HamburgerMenu } from "./design/Header";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logo from "../assets/svg/sliot-logo.svg";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  let closeTimeout = null;

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeout = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  useEffect(() => {
    return () => {
      if (closeTimeout) {
        clearTimeout(closeTimeout);
      }
    };
  }, []);

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

            <div
              className="relative hidden lg:flex items-center px-6 mr-auto cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              onClick={handleClick}
            >
              <h3
                className={`relative font-poppins text-n-8 text-xl ${
                  dropdownOpen ? "lg:text-n-8" : "lg:text-n-8/50"
                } transition-colors hover:text-n-14 pr-2 py-6 md:py-8 lg:-mr-0.25 lg:text-sm xl:text-sm lg:font-semibold lg:leading-5 lg:hover:text-n-14`}
              >
                Resources
              </h3>
              <img src={downarrow} alt="downarrow" width={10} height={10} />
            </div>

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

      {dropdownOpen && (
        <div
          className="absolute px-[8%] lg:px-[7%] xl:px-[14%] top-[5rem] w-full bg-white border-b-2 border-b-n-15 py-4 shadow-md z-5 dropdown-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="max-w-screen-xl mx-auto flex justify-between">
            <div>
              <h5 className="text-n-8 font-semibold text-sm">
                Explore Our Pages
              </h5>
              <ul className="text-n-8 font-bold text-sm space-y-2">
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="/">
                    Contact Us <br />
                    <span className="font-normal text-xs">
                      Get in touch with us today!
                    </span>
                  </a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="/">
                    Join Us <br />
                    <span className="font-normal text-xs">
                      Become a member of our community.
                    </span>
                  </a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="/">
                    News <br />
                    <span className="font-normal text-xs">
                      Stay updated with our latest news.
                    </span>
                  </a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="/">
                    Gallery <br />
                    <span className="font-normal text-xs">
                      View our recent events and activities.
                    </span>
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-n-8 font-semibold text-sm">
                Latest Blog Posts
              </h5>
              <ul className="text-n-8 font-bold text-sm space-y-2">
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="/">
                    Engineering Insights <br />
                    <span className="font-normal text-xs">
                      Discover the latest in engineering.
                    </span>
                  </a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="/">
                    Alumni Stories <br />
                    <span className="font-normal text-xs">
                      Hear from our successful alumni.
                    </span>
                  </a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="/">
                    Upcoming Events <br />
                    <span className="font-normal text-xs">
                      Join us for our next big event.
                    </span>
                  </a>
                </li>
                <li className="hover:bg-gray-100 px-4 py-2">
                  <a href="/">
                    Volunteer Opportunities <br />
                    <span className="font-normal text-xs">
                      Get involved and make a difference.
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-1/3 bg-n-15 rounded-lg p-4">
              <h5 className="text-white font-semibold text-sm">
                Featured Articles
              </h5>
              <ul className="text-white font-bold text-sm space-y-2 mt-2">
                <li className="hover:bg-n-14 rounded-lg px-4 py-2 flex items-center gap-4">
                  <img src={logo} alt="article-1" width={70} height={100} />
                  <a href="/">
                    Innovative Projects <br />
                    <span className="font-normal text-xs">
                      Explore our latest engineering projects.
                    </span>
                  </a>
                </li>
                <li className="hover:bg-n-14 rounded-lg px-4 py-2 flex items-center gap-4">
                  <img src={logo} alt="article-2" width={70} height={100} />
                  <a href="/">
                    Tech Trends <br />
                    <span className="font-normal text-xs">
                      Stay ahead with the latest tech trends.
                    </span>
                  </a>
                </li>
              </ul>
              <button className="bg-n-14 text-n-8 hover:text-n-1 font-bold text-sm py-2 px-4 mt-4 flex items-center justify-center rounded-lg">
                Read More
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
