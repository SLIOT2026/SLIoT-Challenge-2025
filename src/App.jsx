import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";
import Loader from "./components/Loader";

const App = () => {

  useEffect( () => {
    const lenis = new Lenis({
      // Valeur entre 0 et 1
      // Valeur par défaut : 0,1
      // Plus la valeur est faible, plus le scroll sera fluide
      lerp: 0.5, 
      // Valeur par défaut : 1
      // Plus la valeur est haute, plus le défilement sera rapide 
      // wheelMultiplier: 1, 
    });
    function raf(time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
},[])
// 
  return (
    <>
      <div className="flex flex-col min-h-screen bg-transparent pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Loader />
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
        <Footer className="mt-auto" />
      </div>
    </>
  );
};

export default App;
