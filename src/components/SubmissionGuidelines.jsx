import React, { useState } from "react";
import { motion } from "framer-motion";
import { idea, point } from "@/assets";
import { guidelines } from "@/constants";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

// const Card = ({ title, description, image }) => {
//   return (
//     <motion.div
//       className="bg-gray-900 text-white rounded-lg p-6 shadow-lg flex flex-col items-center justify-between"
//       whileHover={{ scale: 1.05 }}
//       whileTap={{ scale: 0.95 }}
//     >
//       <div className="mb-4">
//         <h3 className="text-3xl font-normal mb-8 text-center">{title}</h3>
//         <ul className="text-center text-sm leading-relaxed list-disc list-inside">
//           {description.map((item, index) => (
//             <li
//               key={index}
//               className="flex items-start gap-4 text-gray-200 mt-2"
//             >
//               <img src={point} alt="point" className="h-4 w-4 mt-1" />
//               <p className="text-start text-lg">{item}</p>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </motion.div>
//   );
// };

const SubmissionGuidelines = () => {
  return (
    <div className="min-h-screen flex flex-col items-center py-10">
      <motion.h1
        className="text-6xl font-poppins text-white text-center mb-8"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        SLIoT 2025 Submission Guidelines
      </motion.h1>
      <BentoGrid>
        {guidelines.map(
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
    </div>
  );
};

export default SubmissionGuidelines;
