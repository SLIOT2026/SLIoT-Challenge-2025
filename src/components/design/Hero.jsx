import React from "react";
import { Link } from "react-router-dom";
import heroImage from "../assets/images/hero-image.jpg"; // Replace with your image path

const HeroSection = () => {
  return (
    <section className="relative bg-white">
      {/* Background */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-50 to-purple-100"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 lg:px-20 flex flex-col lg:flex-row items-center justify-between py-16 lg:py-28">
        {/* Left Side: Text Content */}
        <div className="text-center lg:text-left lg:max-w-lg">
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight text-gray-800 mb-6">
            Build Your Digital Future <br />
            <span className="bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text">
              With Us
            </span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            We craft exceptional web experiences, blending creativity with
            functionality to help businesses thrive online.
          </p>
          <div className="flex justify-center lg:justify-start gap-4">
            {/* Primary Button */}
            <Link
              to="/contact"
              className="inline-block px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-blue-500 to-pink-500 rounded-full transition-all hover:from-blue-600 hover:to-pink-600 shadow-lg"
            >
              Get Started
            </Link>

            {/* Secondary Button */}
            <Link
              to="/learn-more"
              className="inline-block px-6 py-3 text-sm font-medium text-gray-800 border-2 border-transparent rounded-full bg-gradient-to-r from-blue-500 to-pink-500 text-transparent bg-clip-text hover:text-white hover:bg-blue-500 transition-all"
              style={{
                borderImageSource: "linear-gradient(to right, #3b82f6, #ec4899)",
                borderImageSlice: 1,
              }}
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Right Side: Hero Image */}
        <div className="mt-10 lg:mt-0 lg:ml-12 w-full lg:w-1/2">
          <img
            src={heroImage}
            alt="Hero"
            className="rounded-3xl shadow-xl w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
