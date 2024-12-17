
import Prizes from "@/components/section/Prizes";


import Gallery from "@/components/Gallery";
import About from "../components/About";
import Spotlight from "@/components/Spotlight";
import TimeLine from "@/components/design/TimeLine";
import ShiftingCountdown from "@/components/design/CountDown";

const Home = () => {
  return (
    <div className="w-full">
      <About />
      <Gallery />
      <Spotlight />

     <Prizes />

      <TimeLine/>
      <ShiftingCountdown/>
   
    </div>
  );

};

export default Home;
