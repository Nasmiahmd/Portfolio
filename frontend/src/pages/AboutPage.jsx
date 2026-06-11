import React from "react";
import Navbar from "../components/Navbar";
import nasmiPic from "../assets/nasmi-shadow-pic.png";
import { FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";

const AboutPage = () => {
  return (
    <>
      <div
        className="h-full flex items-center justify-center gap-10 mx-4 min-w-fit "
        style={{ minHeight: "calc(100vh - 68px)" }}
      >
          <div className="">
            <img className="w-80 h-84" src={nasmiPic} alt="My Picture" />
          </div>
          <div className="w-1/2">
            <h1 className="mb-4 text-5xl font-semibold text-yellow-200">
              ABOUT ME
            </h1>
            <h2 className="mb-2 text-2xl font-semibold text-red-400">
              MNA Nasmi - Software Engineer
            </h2>
            <p className="text-gray-400 hover:text-white">
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
            <div className="flex gap-5 mt-2 ms-2">
              <span><CiLinkedin /></span>
              <span><FaGithub /></span>
              <span><FaFacebook /></span>
              <span><FaInstagram /></span>
            </div>
            
          </div>
      </div>
    </>
  );
};

export default AboutPage;
