import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import { aboutGridItems } from "../constants";

const About = () => {
  return (
    <div className="w-full justify-center items-center px-[10%]">
      <h2 className="text-4xl text-n-1 text-center">ABOUT SLIoT</h2>
      <section id="about">
        <BentoGrid>
          {aboutGridItems.map(
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
              />
            )
          )}
        </BentoGrid>
      </section>
    </div>
  );
};

export default About;
