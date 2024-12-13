import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import OurTeam from "./pages/OurTeam";
import Events from "./pages/Events";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/ourteam" element={<OurTeam />} />
            <Route path="/events" element={<Events />} />
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
};

export default App;
