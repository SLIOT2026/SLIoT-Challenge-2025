import { Route, Routes, Navigate } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect, useRef } from "react";
import Loader from "./components/Loader";
import "locomotive-scroll/dist/locomotive-scroll.css";
import SubmissionGuidelines from "./components/SubmissionGuidelines";

import FAQs from "./components/Rules";


const App = () => {

  const lenisRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (

    
    <>
      <div  className="flex flex-col min-h-screen bg-transparent pt-[4.75rem] lg:pt-[5.25rem] overflow-x-hidden ">
        <Loader />
     
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/guidelines" element={<SubmissionGuidelines />} />
            <Route path="/faqs" element={<FAQs/>} />
           
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
};

export default App;