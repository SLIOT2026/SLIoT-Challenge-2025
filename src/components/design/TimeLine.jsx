import React, { useEffect } from "react";
import { gsap } from "gsap";
import { FaCalendarAlt } from "react-icons/fa";
import { FaCheck } from "react-icons/fa";
export default function TimeLine() {
  const events = [
    {
      date: "10 Dec 2023",
      title: "Registrations Opening (Expression of Interest)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/completed.png",
      isActive: true,
    },
    {
      date: "10 Dec 2023",
      title: "Introductory Session",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: true,
    },
    {
      date: "17 Dec 2023",
      title: "Proposal Submission Deadline",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: true,
    },
    {
      date: "22 Dec 2023",
      title: "Announcement of Elimination Round Winners",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    {
      date: "13 Jan 2024",
      title: "School Category Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    {
      date: "20 Jan 2024",
      title: "Progress Evaluation Deadline",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    {
      date: "25 Jan 2024",
      title: "Announcing semi-finalists",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    {
      date: "25 Jan 2025",
      title: "University and open category workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: true,
    },
    {
      date: "To be decided",
      title: "Semi Finals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    {
      date: "To be decided",
      title: "Announcing Finalists",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
    {
      date: "To be decided",
      title: "Finals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
      isActive: false,
    },
  ];

  useEffect(() => {
    // Using GSAP to animate timeline items when they come into view
    const timelineItems = document.querySelectorAll(".timeline-item");

    // GSAP ScrollTrigger will trigger animations when elements come into view
    timelineItems.forEach((item, index) => {
      gsap.fromTo(
        item,
        { opacity: 0, y: 50 }, // initial state (hidden and positioned)
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.3, // stagger animation for each item
          scrollTrigger: {
            trigger: item,
            start: "top 80%", // when the top of the element is 80% into the viewport
            end: "bottom 30%", // until the bottom of the element goes 30% out of the viewport
            scrub: true, // smooth animation when scrolling
            toggleActions: "play none none none", // animation controls
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen align-middle bg-n-15">
      <div className="space-y-8 w-[60%] relative mx-10 my-5 before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
        {events.map((event, index) => (
          <div
            key={index}
            className="relative flex items-center justify-between timeline-item rounded-3xl md:justify-normal md:odd:flex-row-reverse group"
          >
            <div className="flex items-center justify-center w-8 h-8 rounded-full group-[.is-active]:bg-n-14 bg-n-14 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-6 md:group-even:translate-x-6">
             {event.isActive? <FaCheck/>:<FaCalendarAlt/>}
            </div>
            <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-transparent relative group z-0 rounded-2xl justify-center align-middle shadow-2xl shadow-blue-800">
              <div className="p-10 w-full bg-n-4 m-auto hover:border border border-transparent hover:border-n-4 hover:shadow-lg hover:shadow-black transition-all duration-700 rounded-[1em] overflow-hidden relative group z-0">
                <div className="circle absolute h-[10em] w-[10em] -top-[5.5em] -right-[5.5em] rounded-full bg-n-3 group-hover:scale-[800%] duration-1000 z-[-1] op"></div>
                <h1 className="z-20 text-white font-poppins font-bold group-hover:text-n-14 duration-500 text-[1.4em]">
                  {event.date}
                </h1>
                <h1 className="z-20 text-3xl font-Poppins font-semibold group-hover:text-white duration-500 text-[1.4em]">
                  {event.title}
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
