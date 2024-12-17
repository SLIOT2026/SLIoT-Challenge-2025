import React from "react";
import "./prizes.scss";
import { first, second, third } from "../../assets";

const Prizes = () => {
  const [category, setCategory] = React.useState("school");
  const [categoryChange, setCategoryChange] = React.useState(false);

  const prizes = {
    school: ["LKR 15,000", "LKR 10,000", "LKR 7,000"],
    university: ["LKR 25,000", "LKR 15,000", "LKR 10,000"],
    open: ["LKR 25,000", "LKR 15,000", "LKR 10,000"],
  }

  const changeCategory = (category) => {
    setCategory(category);
    setCategoryChange(false);
    setCategoryChange(true);
    setTimeout(() => setCategoryChange(false), 1000);
  }

  return (
    <div className="mt-10 w-full mx-auto text-white body-container">
      <h1 className="text-6xl text-center">Prizes</h1>

      <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-10 mt-10 px-4 md:px-0">
        <button className={`blob-btn ${category == "school" && "active-category"}`} onClick={() => changeCategory("school")}>
          School Category
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>

        <button className={`blob-btn ${category == "university" && "active-category"}`} onClick={() => changeCategory("university")}>
          University Category
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>

        <button className={`blob-btn ${category == "open" && "active-category"}`} onClick={() => changeCategory("open")}>
          Open Category
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
      </div>

      <div className={`w-full flex flex-wrap-reverse justify-center items-center text-center mt-6 px-4 md:px-0 gap-x-4 md:gap-x-10 ${categoryChange && "animate-fade-up animate-once animate-duration-895 anianimate-linear"}`}>
        <div className="order-3 md:order-2">
          <div class="image-wrapper shine scale-75 transform transition duration-80 hover:scale-90">
            <img src={first} alt="trophy" className="h-[350px]" />
          </div>
          <span className="text-4xl font-bold">
            {prizes[category][0]}
          </span>
        </div>

        <div className="order-2 md:order-1">
          <div class="image-wrapper shine scale-75 transform transition duration-80 hover:scale-90">
            <img src={second} alt="trophy" className="h-[335px]" />
          </div>
          <span className="text-4xl font-bold">
            {prizes[category][1]}
          </span>
        </div>

        <div className="order-1 md:order-3">
          <div class="image-wrapper shine scale-75 transform transition duration-80 hover:scale-90">
            <img src={third} alt="trophy" className="h-[320px]" />
          </div>
          <span className="text-4xl font-bold">
            {prizes[category][2]}
          </span>
        </div>
      </div>

      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10"></feGaussianBlur>
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 21 -7" result="goo"></feColorMatrix>
            <feBlend in2="goo" in="SourceGraphic" result="mix"></feBlend>
          </filter>
        </defs>
      </svg>
    </div>
  );
};

export default Prizes;
