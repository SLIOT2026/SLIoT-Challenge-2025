
import Prizes from "@/components/section/Prizes";
import Gallery from "@/components/Gallery";
import About from "../components/About";
import TimeLine from "@/components/design/TimeLine";

import EventOrganizers from "@/components/EventOrganizers";
import ContactUs from "@/components/ContactUs";
import JoinNow from "@/components/JoinNow";
import Details from "@/components/Details";
import SLIoTHeroSection from "@/components/SLIoTHeroSection";
import { SpotlightNew } from "@/components/SpotlightNew";
import GuideLines from "@/components/GuideLines";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className="w-full">
      <Header />
      <SLIoTHeroSection />
      <JoinNow />
      <About />
      <Prizes />
      <Details />
      {/* <GuideLines /> */}
      <TimeLine/>
      {/* <ShiftingCountdown/> */}
      <Gallery />
      <SpotlightNew />
      <EventOrganizers />
      <ContactUs />

    </div>
  );

};

export default Home;