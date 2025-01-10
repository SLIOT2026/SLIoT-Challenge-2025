import React, { useState } from "react";
import { motion } from "framer-motion";
import { idea, point } from "@/assets";
import { guidelines } from "@/constants";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";
import GuilineHeader from "./GuideLineHeader";

// const Card = ({ title, description, image }) => {
//   return (
//     <motion.div
//       className="flex flex-col items-center justify-between p-6 text-white bg-gray-900 rounded-lg shadow-lg"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <div className="mb-4">
//         <h3 className="mb-8 text-3xl font-normal text-center">{title}</h3>
//         <ul className="text-sm leading-relaxed text-center list-disc list-inside">
//           {description.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-start gap-4 mt-2 text-gray-200"
//             >
//               <img src={point} alt="point" className="w-4 h-4 mt-1" />
//               <p className="text-lg text-start">{item}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// };

const SubmissionGuidelines = () => {
  return (
    <>
      <GuilineHeader />
    <div className="min-h-screen flex flex-col items-center py-10 px-[4%] md:px-[5%] lg:px-[10%]">
      {/* <motion.h1
        className="mb-8 text-6xl text-center text-white font-poppins"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        SLIoT 2025 Submission Guidelines
      </motion.h1> */}

    
      <motion.h2
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0,  
        transition: {
            duration: 2 
        }}} 
        className="my-10 text-4xl text-center text-white sm:text-5xl font-poppins">
          SLIoT 2025 Submission Guidelines
      </motion.h2>
      <BentoGrid>
        {guidelines.map(
          ({
            id,
            title,
            description,
            descriptionItems,
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
              descriptionItems={descriptionItems}
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
    </div>
    </>
  );
};

export default SubmissionGuidelines;
