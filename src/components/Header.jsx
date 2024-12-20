import { useState, useEffect } from "react";
import { navigation } from "../constants";
import MenuSvg from "../assets/svg/MenuSvg";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import logo from "../assets/svg/sliot-logo.svg";

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const smoothScroll = (targetId, duration = 1500) => {
    const targetElement = document.getElementById(targetId);
    if (!targetElement) return;

    const targetPosition = targetElement.getBoundingClientRect().top;
    const startPosition = window.scrollY;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, targetPosition, duration);
      window.scrollTo(0, run);

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      }
    };

    const easeInOutQuad = (t, b, c, d) => {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    };

    requestAnimationFrame(animation);
  };

  const handleClick = (id) => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
    smoothScroll(id, 1500);
  };

  useEffect(() => {
    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 } 
    );

    navigation.forEach((item) => {
      const section = document.getElementById(item.url);
      if (section) sectionObserver.observe(section);
    });

    return () => sectionObserver.disconnect();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center">
        <div
          className={`fixed top-0 w-full px-[5%] xl:px-[6%] mx-auto z-40 shadow-xl backdrop-blur-lg`}
        >
          <div className="flex items-center justify-between px-5 lg:px-7.5 xl:px-10 max-xl:py-4">
            <a
              className={`flex items-center w-[12rem] xl:mr-8 ${
                openNavigation ? "hidden" : ""
              }`}
              href="/"
            >
              <img src={logo} width={100} height={100} alt="sliot" />
            </a>
            <button
              className={`xl:hidden ${openNavigation ? "hidden" : ""}`}
              onClick={toggleNavigation}
            >
              <MenuSvg />
            </button>
            <button
              className={`z-6 absolute top-4 right-6 text-white hover:text-gray-400 text-4xl font-semibold ${
                openNavigation ? "flex" : "hidden"
              }`}
              onClick={toggleNavigation}
            >
              ×
            </button>
            <nav
              className={`${
                openNavigation
                  ? "flex backdrop-blur h-screen justify-center items-center"
                  : "hidden"
              } rounded-lg xl:static xl:flex xl:bg-transparent`}
            >
              <div className="relative flex flex-col items-center justify-center m-auto text-center z-2 xl:flex-row backdrop-blur-lg backdrop-brightness-75 xl:bg-transparent xl:px-0 rounded-xl">
                {navigation.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleClick(item.url)}
                    className={`relative font-poppins text-base transition-colors px-5 py-6 md:py-8 lg:text-sm lg:font-normal ${
                      item.onlyMobile ? "lg:hidden" : ""
                    } ${
                      activeSection === item.url
                        ? "text-sky-500" 
                        : "text-n-1 hover:text-n-4"
                    }`}
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </nav>
            <button
              className="hidden xl:inline-flex relative h-12 overflow-hidden rounded-2xl p-[1px] focus:outline-none"
              onClick={() =>
                smoothScroll("contact", 1500) 
              }
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#2b0091_0%,#393BB2_50%,#ff00a4_100%)]" />
              <span className="inline-flex items-center justify-center w-full h-full gap-2 px-12 text-sm font-medium cursor-pointer rounded-2xl bg-slate-950 text-n-1 backdrop-blur-3xl">
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
