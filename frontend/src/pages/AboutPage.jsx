import React from "react";
import nasmiPic from "../assets/nasmi-shadow-pic.png";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const AboutPage = () => {
  return (
    <div 
      className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-8 lg:gap-10 px-4 sm:px-6 md:px-8 lg:px-10"
      style={{ minHeight: "calc(100vh - 68px)" }}
    >
      {/* Image Section */}
      <div className="flex justify-center w-full lg:w-auto">
        <img 
          className="
            w-48 h-48 
            sm:w-56 sm:h-56 
            md:w-64 md:h-64 
            lg:w-80 lg:h-84 
            xl:w-96 xl:h-96
            object-cover 
            rounded-full 
            lg:rounded-lg
            shadow-2xl
            hover:scale-105
            transition-transform
            duration-300
          " 
          src={nasmiPic} 
          alt="My Picture" 
        />
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 px-2 sm:px-4 md:px-6 lg:px-0">
        <h1 className="
          mb-2 sm:mb-3 md:mb-4 
          text-2xl sm:text-3xl md:text-4xl lg:text-5xl 
          font-bold 
          text-yellow-200 
          text-center lg:text-left
        ">
          ABOUT ME
        </h1>
        
        <h2 className="
          mb-2 sm:mb-3 md:mb-4 
          text-lg sm:text-xl md:text-2xl lg:text-2xl 
          font-semibold 
          text-red-400 
          text-center lg:text-left
        ">
          MNA Nasmi - Software Engineer
        </h2>
        
        <p className="
          text-gray-400 
          hover:text-white 
          text-sm sm:text-base 
          leading-relaxed
          text-center lg:text-left
          transition-colors
          duration-300
          px-2 sm:px-4 lg:px-0
        ">
          As a software engineer, I have developed and contributed to
          several practical projects focused on solving real-world problems
          and improving user experience. My work includes mobile
          applications, web-based systems, and small utility tools built
          using technologies like Java, Android Studio, and modern web
          frameworks. These projects involve features such as user
          authentication, data storage, API integration, and responsive
          interfaces. I focus on clean code, modular design, and continuous
          learning through hands-on development. Each project helps me
          strengthen my problem-solving skills and understanding of software
          architecture while preparing me for more advanced engineering
          roles in the future and collaborative development environments.
        </p>
        
        {/* Social Icons */}
        <div className="
          flex 
          justify-center lg:justify-start 
          gap-4 sm:gap-5 md:gap-6 
          mt-4 sm:mt-5 md:mt-6
        ">
          <a 
            href="#" 
            className="
              text-gray-400 
              hover:text-blue-500 
              transition-all 
              duration-300 
              hover:scale-125
              text-xl sm:text-2xl md:text-3xl
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <CiLinkedin />
          </a>
          <a 
            href="#" 
            className="
              text-gray-400 
              hover:text-gray-300 
              transition-all 
              duration-300 
              hover:scale-125
              text-xl sm:text-2xl md:text-3xl
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a 
            href="#" 
            className="
              text-gray-400 
              hover:text-blue-600 
              transition-all 
              duration-300 
              hover:scale-125
              text-xl sm:text-2xl md:text-3xl
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a 
            href="#" 
            className="
              text-gray-400 
              hover:text-pink-500 
              transition-all 
              duration-300 
              hover:scale-125
              text-xl sm:text-2xl md:text-3xl
            "
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;