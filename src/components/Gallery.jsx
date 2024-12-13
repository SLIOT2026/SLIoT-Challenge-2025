import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { currentSLIoTShowcases, previousSLIoTShowcases } from "@/constants";
import MagicButton from "./ui/MagicButton";

const Gallery = () => {
  const [showAll, setShowAll] = useState(false);
  const [showAll2, setShowAll2] = useState(false);

  const toggleShowMore = () => setShowAll(!showAll);
  const toggleShowMore2 = () => setShowAll2(!showAll2);

  return (
    <div className="w-full justify-center items-center px-[10%]">
      <h2 className="text-4xl text-n-1 text-center">Gallery</h2>
      <h3 className="text-2xl text-n-1 text-start">Previous SLIoT Showcases</h3>
      <section id="gallery">
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
              />
            )
          )}
        </BentoGrid>
        <div
          className="text-center max-w-fit max-h-fit mx-auto"
          onClick={toggleShowMore}
        >
          {showAll ? (
            <MagicButton title="Show Less" />
          ) : (
            <MagicButton title="Show More" />
          )}
        </div>
      </section>
      <h3 className="text-2xl text-n-1 text-start">SLIoT 2025 Showcases</h3>
      <section id="gallery">
        <BentoGrid>
          {(showAll2
            ? currentSLIoTShowcases
            : currentSLIoTShowcases.slice(0, 3)
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
        </BentoGrid>
        <div
          className="text-center max-w-fit max-h-fit mx-auto"
          onClick={toggleShowMore2}
        >
          {showAll2 ? (
            <MagicButton title="Show Less" />
          ) : (
            <MagicButton title="Show More" />
          )}
        </div>
      </section>
    </div>
  );
};

export default Gallery;
