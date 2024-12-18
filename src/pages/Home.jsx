
import Prizes from "@/components/section/Prizes";


import Gallery from "@/components/Gallery";
import About from "../components/About";
import Spotlight from "@/components/Spotlight";
import TimeLine from "@/components/design/TimeLine";
import ShiftingCountdown from "@/components/design/CountDown";
import EventOrganizers from "@/components/EventOrganizers";
import ContactUs from "@/components/ContactUs";
import Details from "@/components/Details";

const Home = () => {
  return (
    <div className="w-full">
      <About />
      <Prizes />
      <Details />
      <TimeLine/>
      <ShiftingCountdown/>
      <Gallery />
      <Spotlight />
      <EventOrganizers />
      <ContactUs />
    </div>
  );

};

export default Home;
