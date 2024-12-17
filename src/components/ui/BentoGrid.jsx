import React, { useState } from "react";
import { cn } from "../../../utils/cn";
import { BackgroundGradientAnimation } from "./GradientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import animationData from "../../constants/confetti.json";
import MagicButton from "./MagicButton";
import { IoCopyOutline } from "react-icons/io5";
import ImageSlider from "../ImageSlider";

export const BentoGrid = ({ className, children }) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
  link,
  imageArray,
  overlayClassName,
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("iransamarasekara@gmail.com");
    setCopied(true);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    if (link || imageArray) {
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const renderDescription = (description) => {
    return description.split("<br>").map((item, index) => (
      <React.Fragment key={index}>
        {item}
        {index < description.split("<br>").length - 1 && <br />}
      </React.Fragment>
    ));
  };

  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-3xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col border border-white/[0.1]",
        className
      )}
      style={{
        background: "rgb(4,7,29)",
        backgroundColor:
          "linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
      }}
    >
      <div
        className={`${id === 6 && "flex justify-center"} h-full`}
        onClick={handleOpenModal}
      >
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn(imgClassName, "object-cover object-center")}
            />
          )}
          <div className={cn(overlayClassName, "absolute inset-0 ")} />
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className="object-cover object-center w-full h-full"
            />
          )}
        </div>
        {(id === 14 || id === 15 || id === 16 || id === 17 || id === 18) && (
          <BackgroundGradientAnimation />
        )}

        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-semibold text-lg lg:text-3xl max-w-96 z-5 text-n-1">
            {title}
          </div>
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base z-5 mt-2">
            {renderDescription(description)}
          </div>

          {id === 1 && <GlobeDemo />}

          {id === 7 && (
            <div className="flex gap-1 lg:gap-5 w-fit absolute -right-3 lg:-right-2 lg:justify-center">
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
                {["React.js", "Next.js", "TypeScript"].map((item) => (
                  <span
                    key={item}
                    className="lg:py-2 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
              </div>
              <div className="flex flex-col gap-3 md:gap-3 lg:gap-3">
                <span className="py-4 px-3 rounded-lg text-center bg-[#10132E]" />
                {["VueJS", "AWS", "MongoDB"].map((item) => (
                  <span
                    key={item}
                    className="lg:py-2 lg:px-3 py-2 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 rounded-lg text-center bg-[#10132E]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}

          {id === 6 && (
            <div className="mt-5 relative">
              <div className="absolute -bottom-5 right-0">
                <Lottie
                  options={{
                    loop: copied,
                    autoplay: copied,
                    animationData,
                    rendererSettings: {
                      preserveAspectRatio: "xMidYMid slice",
                    },
                  }}
                />
              </div>

              <MagicButton
                title={copied ? "Email copied" : "Copy my email"}
                icon={<IoCopyOutline />}
                position="left"
                otherClasses="!bg-[#161A31]"
                handleClick={handleCopy}
              />
            </div>
          )}
        </div>
      </div>
      {isModalOpen && link && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 backdrop-blur-md backdrop-brightness-75">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-400 text-4xl font-bold"
              onClick={handleCloseModal}
            >
              ×
            </button>

            {/* Video Title */}
            <h2 className="text-center font-semibold text-n-1 text-2xl mb-4">
              {title}
            </h2>
            {/* Embedded YouTube Video */}
            <div className="aspect-w-16 aspect-h-9 z-50">
              <iframe
                width="928"
                height="522"
                src="https://www.youtube.com/embed/v6wOjQGANsE"
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      {isModalOpen && imageArray && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="relative w-full h-full flex flex-col items-center justify-center bg-black bg-opacity-40 backdrop-blur-md backdrop-brightness-75">
            {/* Close button */}
            <button
              className="absolute top-2 right-2 text-white hover:text-gray-400 text-4xl font-bold"
              onClick={handleCloseModal}
            >
              ×
            </button>

            {/* Modal Title */}
            <h2 className="text-center font-semibold text-n-1 text-2xl mb-4">
              {title}
            </h2>

            {/* Image Slider */}
            <div className="w-full max-w-4xl mx-auto">
              <ImageSlider images={imageArray} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
