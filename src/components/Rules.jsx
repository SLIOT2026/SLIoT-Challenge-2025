import React, { useState } from 'react';
import { motion } from "framer-motion";
import GuilineHeader from "./GuideLineHeader";

const FAQAccordion = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full border-b border-white/20"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-4 text-left"
      >
        <span className="font-medium text-white">{title}</span>
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
        </div>
      </motion.div>
    </motion.div>
  );
};

const FAQs = () => {
  const faqData = [
    {
      title: "What is SLIoT 2025?",
      content: "SLIoT 2025 is a premier IoT challenge that brings together innovators, developers, and entrepreneurs to showcase their IoT solutions and contribute to technological advancement."
    },
    {
      title: "Who can participate?",
      content: "The challenge is open to students, professionals, startups, and established companies. Participants can join individually or as teams of up to 4 members."
    },
    {
      title: "What are the key dates?",
      content: "Proposal submission deadline: March 31, 2025\nFirst round evaluation: April 15, 2025\nFinal presentation: May 30, 2025"
    },
    {
      title: "What should the proposal include?",
      content: "Your proposal should include a project overview, technical implementation details, innovation aspects, potential impact, and team information. Detailed guidelines are available in the submission portal."
    },
    {
      title: "How are proposals evaluated?",
      content: "Proposals are evaluated based on innovation (30%), technical feasibility (25%), impact (25%), and presentation (20%). A panel of industry experts and academics will review all submissions."
    },
    {
      title: "Is there any entry fee?",
      content: "No, participation in SLIoT 2025 is completely free. We aim to encourage innovation and provide a platform for showcasing talent without any financial barriers."
    }
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
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default FAQs;