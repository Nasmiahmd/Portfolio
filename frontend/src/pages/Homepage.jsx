import React from "react";
import { TypeAnimation } from "react-type-animation";
import nasmiPic from "../assets/nasmi-pic.jpg";
import {Link} from "react-router";
const Homepage = () => {
  return (
    <div 
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ minHeight: 'calc(100vh - 68px)' }}
    >
      {/* Typing Animation */}
      <div className="text-center mb-8">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold italic">
          <TypeAnimation
            sequence={[
              "Hey folks, Myself Nasmi.",
              1500,
              "Here We are 👋.",
              1500,
            ]}
            wrapper="span"
            speed={40}
            style={{ fontSize: "1em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h1>
        <hr className="w-32 sm:w-40 mx-auto border-4 mt-3 rounded-full border-gradient-to-r from-purple-500 to-pink-500" />
      </div>

      {/* Content Container */}
      <div className="container mx-auto px-4">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center gap-12 lg:gap-20">
          
          {/* Left Side - Text */}
          <div className="text-center lg:text-right space-y-4">
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              Software
            </h2>
            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-blue-500">
              Engineer
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-lg mx-auto lg:mx-0">
              I'm a Software Engineer based in Sri Lanka. I'll help you through my knowledge and experience.
            </p>
            <div className="flex gap-4 justify-center">
              <Link to={"/projects"}><button className="px-6 py-2 border border-blue-600 rounded-lg hover:bg-blue-600/20 transition-all hover:scale-105">
                Projects
              </button></Link>
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative">
            <div className="absolute inset-0 bg-blue-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
            <img
              className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover border-4 border-blue-500 shadow-2xl hover:scale-105 transition-all duration-500"
              src={nasmiPic}
              alt="Nasmi's Picture"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;