import React, { useEffect } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import TimeLineCard from "../ui/TimeLineCard";
export default function TimeLine() {
  const events = [
    {
      date: "To Be Decided",
      title: "Registrations Opening (Expression of Interest)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/completed.png",
      isActive: true,
    },
    {
      date: "08 Jan 2025",
      title: "Introductory Session",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: true,
    },
    {
      date: "10 Jan 2025",
      title: "Open Proposal Submission",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: true,
    },
    {
      date: "To Be Decided",
      title: "Proposal Submission Deadline",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: true,
    },
    // {
    //   date: "20 Jan 2023",
    //   title: "Announcement of Elimination Round Winners",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
    //   imgSrc: "assets/3.png",
    //   isActive: false,
    // },
    {
      date: "To Be Decided",
      title: "School Category Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    {
      date: "To Be Decided",
      title: "University & Open Category Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    {
      date: "To Be Decided",
      title: "Progress Evaluation / Video Submission",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    {
      date: "To Be Decided",
      title: "University & Open Category Semifinals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    {
      date: "To Be Decided",
      title: "School Category Semifinals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    // {
    //   date: "To be decided",
    //   title: "Announcing Finalists",
    //   description:
    //     "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
    //   imgSrc: "assets/3.png",
    //   isActive: false,
    // },
    {
      date: "To Be Decided",
      title: "Grand Finale",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
  ];

  // useEffect(() => {
    // Using GSAP to animate timeline items when they come into view
  //   const timelineItems = document.querySelectorAll(".timeline-item");

  //   // GSAP ScrollTrigger will trigger animations when elements come into view
  //   timelineItems.forEach((item, index) => {
  //     gsap.fromTo(
  //       item,
  //       { opacity: 0, y: 50 }, // initial state (hidden and positioned)
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         delay: index * 0.3, // stagger animation for each item
  //         scrollTrigger: {
  //           trigger: item,
  //           start: "top 80%", // when the top of the element is 80% into the viewport
  //           end: "bottom 30%", // until the bottom of the element goes 30% out of the viewport
  //           scrub: true, // smooth animation when scrolling
  //           toggleActions: "play none none none", // animation controls
  //         },
  //       }
  //     );
  //   });
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen align-middle bg-transparent" id="timeline">
      <motion.h1
      initial={{opacity:0,y:50}}
      whileInView={{opacity:1, y:0,  transition: {
        duration: 1 // Animation duration
      }}}
      
      
      
      className="py-2 mt-20 mb-10 text-4xl text-white sm:text-5xl font-poppins" >EVENT TIMELINE</motion.h1>
      <div className="space-y-8 w-[80%] md:w-[60%] relative mx-10 my-5 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {events.map((event, index) => (
            <TimeLineCard key={index} event={event} index={index} />

       
        ))}
      </div>
    </div>
  );
}
