import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { currentSLIoTShowcases, previousSLIoTShowcases } from "@/constants";
import MagicButton from "./ui/MagicButton";
import { motion } from "framer-motion";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAll2, setShowAll2] = useState(false);

  const toggleShowMore = () => setShowAll(!showAll);
  const toggleShowMore2 = () => setShowAll2(!showAll2);

  return (
    <div className="w-full justify-center items-center px-[4%] md:px-[5%] lg:px-[10%]" id="gallery">
      <motion.h2
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1, y:0,  
      transition: {
        duration: 2 
      }}} 
      className="audiowide text-4xl sm:text-5xl text-center text-[#77FF00]">
        <div className="audiowide text-4xl sm:text-5xl my-32 text-center text-[#77FF00]">GALLERY</div>
      </motion.h2>
      {/* <h3 className="text-2xl text-n-4 text-start mt-10 mb-6">Previous SLIoT Showcases</h3> */}
      <section>
        <BentoGrid>
          {(showAll
            ? previousSLIoTShowcases
            : previousSLIoTShowcases.slice(0, 3)
          ).map(
            ({
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
              link,
              overlayClassName,
              imageArray,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                link={link}
                overlayClassName={overlayClassName}
                imageArray={imageArray}
              />
            )
          )}
        </BentoGrid>
        <div
          className="text-center max-w-fit max-h-fit mx-auto pt-5"
          onClick={toggleShowMore}
        >
          {showAll ? (
            <MagicButton title="Show Less" />
          ) : (
            <MagicButton title="Show More" />
          )}
        </div>
      </section>
      {/* <h3 className="text-2xl text-n-4 text-start mt-10 mb-6">SLIoT 2026 Showcases</h3>
      <section id="gallery">
        <BentoGrid>
          {currentSLIoTShowcases.map(
            ({
              id,
              title,
              description,
              className,
              img,
              imgClassName,
              titleClassName,
              spareImg,
              link,
              imageArray,
              overlayClassName,
            }) => (
              <BentoGridItem
                id={id}
                key={id}
                title={title}
                description={description}
                className={className}
                img={img}
                imgClassName={imgClassName}
                titleClassName={titleClassName}
                spareImg={spareImg}
                link={link}
                imageArray={imageArray}
                overlayClassName={overlayClassName}
              />
            )
          )}
        </BentoGrid> */}
        {/* <div
          className="text-center max-w-fit max-h-fit mx-auto"
          onClick={toggleShowMore2}
        >
          {showAll2 ? (
            <MagicButton title="Show Less" />
          ) : (
            <MagicButton title="Show More" />
          )}
        </div> */}
      {/* </section> */}
    </div>
  );
};

export default Gallery;
