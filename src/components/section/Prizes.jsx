import React from "react";
import "./prizes.scss";

const Prizes = () => {
  const [category, setCategory] = React.useState("school");

  const prizes = {
    school: ["LKR 15,000", "LKR 10,000", "LKR 7,000"],
    university: ["LKR 25,000", "LKR 15,000", "LKR 10,000"],
    open: ["LKR 25,000", "LKR 15,000", "LKR 10,000"],
  }

  return (
    <div className="mt-10 w-full mx-auto text-white body-container">
      <h1 className="text-6xl text-center">Prizes</h1>

      <div className="flex flex-wrap justify-center items-center gap-x-4 md:gap-x-10 mt-10 px-4 md:px-0">
        <button className={`blob-btn ${category == "school" && "active-category"}`} onClick={() => setCategory("school")}>
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

        <button className={`blob-btn ${category == "university" && "active-category"}`} onClick={() => setCategory("university")}>
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

        <button className={`blob-btn ${category == "open" && "active-category"}`} onClick={() => setCategory("open")}>
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

      <div className="w-full flex flex-wrap-reverse justify-center items-center text-center mt-6 px-4 md:px-0">
        <div className="product order-3 lg:order-2">
          <div className="effect-1"></div>
          <div className="effect-2"></div>
          <div className="content">
            <div className="text-black">1st</div>
          </div>
          <span className="title">
            LKR 25,000
          </span>
        </div>
        <div className="bg"></div>

        <div className="product order-2 lg:order-3">
          <div className="effect-1"></div>
          <div className="effect-2"></div>
          <div className="content">
            <div className="text-black">2nd</div>
          </div>
          <span className="title">
            LKR 15,000
          </span>
        </div>
        <div className="bg"></div>

        <div className="product order-1 lg:order-1">
          <div className="effect-1"></div>
          <div className="effect-2"></div>
          <div className="content">
            <div className="text-black">3rd</div>
          </div>
          <span className="title">
            LKR 10,000
          </span>
        </div>
        <div className="bg"></div>
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
