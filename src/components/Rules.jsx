import React, { useState } from 'react';
import { motion } from "framer-motion";
import GuilineHeader from "./GuideLineHeader";
import point_icon from '../assets/checked.png';

const FAQAccordion = ({ title, content, points, link, isOpen, onClick }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full border-b border-white/20"
    >
      <button
        onClick={onClick}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="font-semibold text-white">{title}</span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="text-2xl text-white"
        >
          ↓
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{ 
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="pb-4 text-gray-300">
          {content}
          <ul className="pl-6 mt-2 list-disc">
            {points && points.map((point, index) => (
              <li key={index} className="flex items-start xxs:items-center">
                <img src={point_icon} alt="point" className="w-4 h-4 mt-1 mr-2 xxs:mt-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
          {link && <a href={link} target="_blank" rel="noreferrer" className="text-sm text-blue-500 underline">Click here</a>}
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqData = [
    {
      title: "How can I register my team and submit the proposal?",
      content: "You can register your team and submit the proposal through the following link.",
      link: "https://forms.gle/MD9WLWwD2fPFLCPY8"
    },
    {
      title: "What is the deadline for proposal submission?",
      content: "The new deadline for proposal submission is February 16th."
    },
    {
      title: "Is there a specific theme for this year's competition?",
      content: "No, there is no specific theme for this year's competition."
    },
    {
      title: "Can I choose any team name if I'm competing individually?",
      content: "Yes, you are free to use your name or any code name as the team name."
    },
    {
      title: "When will the finals take place?",
      content: "The finals are scheduled to be held in March."
    },
    {
      title: "If I'm registering under the school category, do all team members need to be from the same school?",
      content: "Yes, all team members must be from the same school to compete in the school category."
    },
    {
      title: "What category should we select if team members are from different schools or universities?",
      content: "If team members are from different schools or universities, select the Open Category."
    },
    {
      title: "Will certificates be provided for selected proposals and semifinalists?",
      content: "Yes, certificates will be awarded based on the stage you reach in the competition."
    },
    {
      title: "Where can I get the announcements regarding the competition?",
      content: "By joining this Whatsapp group",
      link:"https://chat.whatsapp.com/HfCCiDdYdmcDbm86AI9RO1"
    },
  ];

  return (
    <>
      <GuilineHeader />
      <div className="min-h-screen  flex flex-col items-center px-[4%] md:px-[5%] lg:px-[10%] py-20">
        <motion.h2
          initial={{opacity:0, y:50}}
          whileInView={{opacity:1, y:0}}
          transition={{ duration: 1 }}
          className="mb-12 text-3xl font-bold text-center text-white md:text-4xl"
        >
          Frequently Asked Questions
        </motion.h2>
        
        <div className="w-full max-w-3xl space-y-4">
          {faqData.map((faq, index) => (
            <FAQAccordion
              key={index}
              title={faq.title}
              content={faq.content}
              points={faq.points}
              link={faq.link}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQs;