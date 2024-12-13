import { completed } from "@/assets";
import TimeLine from "@/components/design/TimeLine";
import { useEffect, useState } from "react";

const Home = () => {
  const events = [
    {
      date: "10 Dec 2023",
      title: "Registrations Opening (Expression of Interest)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/completed.png",
      completed: true,
    },
    {
      date: "10 Dec 2023",
      title: "Introductory Session",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
    },
    {
      date: "17 Dec 2023",
      title: "Proposal Submission Deadline",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
    },
    {
      date: "22 Dec 2023",
      title: "Announcement of Elimination Round Winners",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
    },
    {
      date: "13 Jan 2024",
      title: "School Category Workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
    },
    {
      date: "20 Jan 2024",
      title: "Progress Evaluation Deadline",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
    },
    {
      date: "25 Jan 2024",
      title: "Announcing semi-finalists",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
    },
    {
      date: "25 Jan 2025",
      title: "University and open category workshop",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
    },
    {
      date: "To be decided",
      title: "Semi Finals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
    },
    {
      date: "To be decided",
      title: "Announcing Finalists",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
    },
    {
      date: "To be decided",
      title: "Finals",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis malesuada aliquet porttitor. Nunc tempus eget massa vitae scelerisque.",
      imgSrc: "assets/3.png",
    },
  ];

  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const today = new Date();
    const lastCompletedIndex = events.findIndex(
      (event) => new Date(event.date) > today
    );
    setCurrentEventIndex(
      lastCompletedIndex === -1 ? events.length - 1 : lastCompletedIndex - 1
    );
  }, [events]);

  return (
    <div className="w-full">
      <section id="timeline" className="items-center justify-center my-16">
        {/* <div className="timeline-anim animated-div">
          <h2 className="mb-8 text-3xl font-bold text-center">Timeline</h2>
          <div className="relative mx-4">
            <div className="absolute w-1 h-full transform -translate-x-1/2 bg-gradient-to-b from-purple-700 to-pink-500 left-1/2"></div>
            {events.map((event, index) => (
              <div
                key={index}
                className={`relative w-1/4 p-4 ${
                  index % 2 === 0 ? "left-1/4" : "left-1/2"
                } transform ${
                  index % 2 === 0 ? "translate-x-0" : "-translate-x-full"
                } animate-movedown opacity-100`}
              >
                <div className="relative p-6 bg-white border-purple-700 border-3">
                  <h6 className="mb-1 text-lg font-semibold">{event.date}</h6>
                  <h4 className="mb-1 font-semibold">{event.title}</h4>
                  <span
                    className={`absolute top-5 z-1 ${
                      index % 2 === 0
                        ? "right-[-13px] border-l-13 border-l-purple-700"
                        : "left-[-13px] border-r-13 border-r-purple-700"
                    }`}
                  ></span>
                </div>
              </div>
            ))}

            <img
              src={completed}
              alt="Completed"
              className="absolute z-10 rounded-full w-9 h-9 animate-bounce"
              style={{
                left: "49%", // Center horizontally
                transform: "translate(-50%, -50%)", // Center perfectly
                top: `${currentEventIndex * 160}px`, // Dynamically position vertically
              }}
            />
          </div>
        </div> */}
        <TimeLine/>
      </section>
    </div>
  );
};

export default Home;
