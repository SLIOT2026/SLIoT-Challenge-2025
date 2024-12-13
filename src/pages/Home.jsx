import Gallery from "@/components/Gallery";
import About from "../components/About";
import Spotlight from "@/components/Spotlight";

const Home = () => {
  return (
    <div className="w-full">
      <About />
      <Gallery />
      <Spotlight />
    </div>
  );
};

export default Home;
