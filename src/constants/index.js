import {
  twitter,
  instagram,
  telegram,
  facebook,
  house_icon,
  clock_icon,
  openAndUni1,
  openAndUni2,
  openAndUni3,
  openAndUni4,
  openAndUni5,
  openAndUni6,
  openAndUni7,
  openAndUni8,
  openAndUni9,
  openAndUni10,
} from "../assets";

export const navigation = [
  {
    id: "0",
    title: "Home",
    url: "/",
  },
  {
    id: "1",
    title: "About Us",
    url: "/aboutus",
  },
  {
    id: "2",
    title: "OurTeam",
    url: "/ourteam",
  },
  {
    id: "3",
    title: "Events",
    url: "/events",
  },
  {
    id: "4",
    title: "Book Now",
    url: "/booknow",
    onlyMobile: true,
  },
];

export const heroIcons = [];

export const notificationImages = [];

export const companyLogos = [];

export const collabText =
  "With smart automation and top-notch security, it's the perfect solution for teams looking to work smarter.";

export const collabContent = [
  {
    id: "0",
    title: "$10 Million in Public Liability Insurance",
  },
  {
    id: "1",
    title: "Flexible Pick-up and Delivery options",
  },
  {
    id: "2",
    title: "On-site supervision available",
  },
  {
    id: "3",
    title: "Design and Build service for custom courses",
  },
  {
    id: "4",
    title:
      "Portable fencing, scorecards, pencils, and golfer certificates provided",
  },
];

export const collabApps = [];

export const pricing = [];

export const benefits = [];

export const special_benefits = [];

export const socials = [
  {
    id: "0",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "1",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },
  {
    id: "2",
    title: "Telegram",
    iconUrl: telegram,
    url: "#",
  },
  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

export const topbarLinks = [];

export const paymentmethods = [];

export const aboutGridItems = [
  {
    id: 1,
    title: "What is the SLIoT Challenge?",
    description: `The SLIoT Challenge 2023 is an annual IoT competition organized by the Department of Computer Science & Engineering, University of Moratuwa, in collaboration with SLT-MOBITEL and The Institution of Engineers Sri Lanka (IESL).

The goal of this competition is to raise awareness about the "Internet of Things" (IoT) and encourage its usage among Sri Lankans.

The organizers aim to evaluate IoT-based solutions developed to meet industrial-level standards, addressing major global issues. Each year, a theme is announced to define the problem scenario.

We aspire to ignite imagination and creativity by providing a competitive platform for talented and curious participants. Ideas will be evaluated based on creativity, value, benefits, and technologies used. Winners will be selected from the best ideas and performance on the event day.

This year's theme is *Industry 4.0*, and the competition will be held in three categories: 
- School Category 
- Undergraduate Category 
- Open Category.`,
    className:
      "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh] text-n-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 2,
    title: "Where",
    description: "Final competition will be held at University of Moratuwa",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-n-1",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: house_icon,
    spareImg: "",
  },
  {
    id: 3,
    title: "When",
    description: `Grand Finale: 23 rd March 2024 <br> Check the Timeline for more details `,
    className: "lg:col-span-2 md:col-span-3 md:row-span-2 text-n-1",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: clock_icon,
    spareImg: "",
  },
];

export const previousSLIoTShowcases = [
  {
    id: 8,
    title: "SLIoT 2023",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[40vh]",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "justify-end items-end text-end",
    img: "https://img.youtube.com/vi/v6wOjQGANsE/hqdefault.jpg",
    spareImg: "",
    link: "https://www.youtube.com/embed/v6wOjQGANsE",
    overlayClassName: "bg-black bg-opacity-20",
  },
  {
    id: 9,
    title: "Where",
    description: "Final competition will be held at University of Moratuwa",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: house_icon,
    spareImg: "",
  },
  {
    id: 10,
    title: "When",
    description: `Grand Finale: 23 rd March 2024 <br> Check the Timeline for more details `,
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: clock_icon,
    spareImg: "",
  },
  {
    id: 11,
    title: "Where",
    description: "Final competition will be held at University of Moratuwa",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: house_icon,
    spareImg: "",
  },
  {
    id: 12,
    title: "Where",
    description: "Final competition will be held at University of Moratuwa",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: house_icon,
    spareImg: "",
  },
  {
    id: 13,
    title: "Where",
    description: "Final competition will be held at University of Moratuwa",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: house_icon,
    spareImg: "",
  },
];

export const currentSLIoTShowcases = [
  {
    id: 9,
    title: "SLIoT 2023 Open & Uni Workshop",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "w-full h-full object-cover",
    titleClassName: "justify-end items-end text-end",
    img: openAndUni1,
    spareImg: "",
    imageArray: [
      openAndUni1,
      openAndUni2,
      openAndUni2,
      openAndUni3,
      openAndUni4,
      openAndUni5,
      openAndUni6,
      openAndUni7,
      openAndUni8,
      openAndUni9,
      openAndUni10,
    ],
    overlayClassName: "bg-black bg-opacity-30",
  },
  {
    id: 10,
    title: "Where",
    description: "Final competition will be held at University of Moratuwa",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: house_icon,
    spareImg: "",
  },
  {
    id: 11,
    title: "When",
    description: `Grand Finale: 23 rd March 2024 <br> Check the Timeline for more details `,
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: clock_icon,
    spareImg: "",
  },
  {
    id: 12,
    title: "Where",
    description: "Final competition will be held at University of Moratuwa",
    className: "lg:col-span-3 md:col-span-3 md:row-span-1",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: house_icon,
    spareImg: "",
  },
  {
    id: 13,
    title: "Where",
    description: "Final competition will be held at University of Moratuwa",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "mt-5 ml-5 h-20 w-20",
    titleClassName: "justify-end items-end text-end",
    img: house_icon,
    spareImg: "",
  },
];

export const spotlight = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    link: "https://www.youtube.com/embed/mIJdCAKL71I",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    link: "https://youtu.be/kdI_04VvLmk",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    link: "https://youtu.be/vVw2Q92ydsc",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    link: "https://youtu.be/eiyhMLFVdMU",
  },
  {
    id: 5,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    link: "https://youtu.be/Gw6NmLdHqiA",
  },
  {
    id: 6,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    link: "https://youtu.be/LJnJDyBk4_4",
  },
  {
    id: 7,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    link: "https://youtu.be/MHwnCB3-kzA",
  },
  {
    id: 8,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    link: "https://youtu.be/UVdn4ZTJ3_Q",
  },
];
