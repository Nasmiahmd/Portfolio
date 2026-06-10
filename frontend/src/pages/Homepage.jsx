import React from "react";
import Navbar from "../components/Navbar";
import nasmiPic from "../assets/nasmi-pic.jpg";
import { TypeAnimation } from "react-type-animation";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center pt-7 text-xl sm:text-2xl md:text-4xl font-bold italic">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Hey folks, My self Nasmi.",
              1500, // wait 1s before replacing "Mice" with "Hamsters"
              "Here We are 👋.",
              1500,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: "1.5em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <hr className="max-w-3xs mx-auto text-heading-hr border-4 mt-0.5 rounded-2xl " />
        <div className="mt-12 xl:mt-28 flex flex-col-reverse xl:flex-row max-w-full mx-auto items-center xl:justify-between px-6 xl:px-0 gap-8 xl:gap-0">
          <div className="text-center xl:text-left ps-0 xl:ps-56">
            <h2 className="text-5xl sm:text-7xl xl:text-9xl hover:text-shadow-sm hover:text-shadow-amber-100 hover:animate-bounce transition-shadow duration-75">Software</h2>
            <h2 className="text-5xl sm:text-7xl xl:text-9xl hover:text-shadow-sm hover:text-shadow-amber-100 hover:animate-pulse transition-shadow duration-75">Engineer</h2>
            <p className="text-base sm:text-xl text-slate-300 hover:text-slate-800 max-w-2xl mx-auto py-6 text-wrap">
              I'm a Software Engineer based in Sri Lanka, I'll Help you through my knowledge.
            </p>
          </div>
          <img
            className="mx-auto w-64 h-64 sm:w-80 sm:h-80 xl:w-auto xl:h-auto xl:max-w-lg xl:max-h-lg mt-8 rounded-full p-6 xl:p-10 border-2 border-slate-400 hover:ring-2 transition-all duration-500 object-cover"
            src={nasmiPic}
            alt="Nasmi's Picture"
          />
        </div>
      </div>
    </>
  );
};

export default Homepage;
