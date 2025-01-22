import React, { useState } from 'react';
import { motion } from "framer-motion";
import { idea, point } from "@/assets";
import { guidelines } from "@/constants";
import { BentoGrid, BentoGridItem } from "./ui/BentoGrid";

import GuilineHeader from "./GuideLineHeader";

import DownloadPDFButton from "./DownloadPDFButton";
import MagicButton from './ui/MagicButton';

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
    const pdfs = [
        { title: "Project Proposal Template", path: "/path-to-pdf1.pdf" },
        { title: "Sample Project Proposal 01", path: "/path-to-pdf2.pdf" },
        { title: "Sample Project Proposal 02", path: "/path-to-pdf3.pdf" },
      ];
    
      const [hovered, setHovered] = useState(null);
  return (
    <>
     <GuilineHeader />
    <div className="min-h-screen  flex flex-col items-center  px-[4%] md:px-[5%] lg:px-[10%]">
    

    
      <motion.h2
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0,  
        transition: {
            duration: 2 
        }}} 
        className="my-10 text-4xl text-center text-white sm:text-5xl font-poppins">
          SLIoT 2025 Proposal Submission Guidelines
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
      <div className="max-w-6xl p-8 mx-auto bg-navy-900 ">
      {/* <h2 className="mb-12 text-4xl font-semibold tracking-wide text-center text-white">
        Download PDFs
      </h2> */}
      <motion.h2
        initial={{opacity:0,y:50}}
        whileInView={{opacity:1, y:0,  
        transition: {
            duration: 2 
        }}} 
        className="mt-10 text-4xl text-center text-white sm:text-5xl font-poppins md:my-10">
          Download Templates
      </motion.h2>


      {/* <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
        {pdfs.map((pdf, index) => (
          <div
            key={index}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
            className={`relative p-6 rounded-lg transition-transform transform ${
              hovered === index ? "scale-[1.5] rotate-2" : "scale-100"
            } bg-gradient-to-r from-pink-500 to-purple-600 shadow-md ${
              hovered === index ? "shadow-2xl" : "shadow-lg"
            }`}
          >
            <a href={pdf.path} download className="block">
              <div className="absolute flex items-center justify-center w-12 h-12 transition-transform transform bg-white rounded-full shadow-lg -top-6 -right-6 hover:scale-125">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-purple-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9m-6-6l6 6M15 3v6h6"
                  />
                </svg>
              </div>
              <div className="flex items-center space-x-6">
                <div
                  className={`w-16 h-16 flex items-center justify-center rounded-full shadow-lg transition-all ${
                    hovered === index
                      ? "bg-gradient-to-tr from-pink-400 to-purple-500"
                      : "bg-gradient-to-br from-pink-500 to-purple-600"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-8 h-8 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 3H6a2 2 0 00-2 2v14a2 2 0 002 2h12a2 2 0 002-2V9m-6-6l6 6M15 3v6h6"
                    />
                  </svg>
                </div>
                <div>
                  <h3
                    className={`text-xl font-bold ${
                      hovered === index
                        ? "text-white animate-pulse"
                        : "text-gray-300"
                    }`}
                  >
                    {pdf.title}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Click to download the document
                  </p>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div> */}
    </div>

      <div className="flex flex-col md:flex-row md:gap-8">
        <DownloadPDFButton link="/SLIoT Challenge - 2025 Project Proposal Template.docx" title="Project Proposal Template" download="SLIoT_Challenge_2025_Project_Proposal_Template" />
        <DownloadPDFButton link="/SLIoT Challenge - 2025 Sample Project Proposal 01.docx" title="Sample Project Proposal 01" download="SLIoT_Challenge_2025_Sample_Project_Proposal_01" />
        <DownloadPDFButton link="/SLIoT Challenge - 2025 Sample Project Proposal 02.docx" title="Sample Project Proposal 02" download="SLIoT_Challenge_2025_Sample_Project_Proposal_02" />
      </div>
      
      {/* <a
        className="mt-4"
        href="/rulesandregulation"
        target="_blank"
  rel="noopener noreferrer"

  aria-label="Download guidelines"
      >
        <MagicButton title="Rules and Regulations" />
      </a> */}


      <a
        className="mt-4"
        href="https://forms.gle/3Hhpjj3iW6u2YSLB6"
        target="_blank"
  rel="noopener noreferrer"

  aria-label="Download guidelines"
      >
        <MagicButton title="Submit Your Proposal" />
      </a>
    </div>
    </>
  );
};

export default SubmissionGuidelines;
