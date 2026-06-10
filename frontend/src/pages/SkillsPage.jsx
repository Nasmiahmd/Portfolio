import React, { useState } from "react";
import Navbar from "../components/Navbar";

const SkillsPage = () => {
  const skills = [
    { name: "Html", level: 1, experience: "Beginner" },
    { name: "Css", level: 5, experience: "Pro" },
    { name: "Js", level: 3, experience: "Advanced" },
    { name: "Php", level: 4, experience: "Expert" },
    { name: "Php", level: 4, experience: "Expert" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState("");

  const nextSkill = () => {
    setSlideDirection("slide-right");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % skills.length);
      setSlideDirection("");
    }, 300);
  };

  const prevSkill = () => {
    setSlideDirection("slide-left");
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + skills.length) % skills.length);
      setSlideDirection("");
    }, 300);
  };

  const getLevelColor = (level) => {
    const colors = {
      1: "#ff6b6b",
      2: "#ffa500",
      3: "#4ecdc4",
      4: "#45b7d1",
      5: "#00b894",
    };
    return colors[level];
  };

  const getLevelDescription = (level) => {
    const descriptions = {
      1: "🎯 Just getting started with basics",
      2: "📚 Comfortable with fundamentals",
      3: "🚀 Building complex projects",
      4: "💡 Solving advanced problems",
      5: "🏆 Teaching and mentoring others",
    };
    return descriptions[level];
  };

  const currentSkill = skills[currentIndex];

  return (
    <div className="min-h-screen py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-4xl font-bold text-white text-center mb-10 drop-shadow-lg">
          Skills Assessment
        </h2>

        <div className="flex items-center justify-center gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSkill}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white w-12 h-12 rounded-full 
                       flex items-center justify-center text-2xl transition-all duration-300 
                       hover:scale-110 shadow-lg"
          >
            ◀
          </button>

          {/* Skill Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div
              className={`p-8 transition-all duration-300 ${
                slideDirection === "slide-right"
                  ? "animate-slide-right"
                  : slideDirection === "slide-left"
                    ? "animate-slide-left"
                    : ""
              }`}
            >
              {/* Skill Name */}
              <div
                className="text-6xl font-bold text-center mb-8 
                            bg-linear-to-r from-purple-600 to-indigo-600 
                            bg-clip-text text-transparent"
              >
                {currentSkill.name}
              </div>

              {/* Level Slider */}
              <div className="mb-6">
                <div className="flex gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className="flex-1 h-3 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor:
                          level <= currentSkill.level
                            ? getLevelColor(currentSkill.level)
                            : "#e5e7eb",
                      }}
                    />
                  ))}
                </div>

                {/* Level Badge */}
                <div className="flex justify-center">
                  <div
                    className="inline-flex items-center px-4 py-2 rounded-full text-white font-semibold"
                    style={{
                      backgroundColor: getLevelColor(currentSkill.level),
                    }}
                  >
                    Level {currentSkill.level}
                  </div>
                </div>
              </div>

              {/* Experience Label */}
              <div className="text-3xl font-bold text-center text-gray-800 mb-4">
                {currentSkill.experience}
              </div>

              {/* Description */}
              <div className="text-center text-gray-600 text-sm pt-4 border-t border-gray-200">
                {getLevelDescription(currentSkill.level)}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSkill}
            className="bg-white/20 backdrop-blur-sm hover:bg-white/30 text-white w-12 h-12 rounded-full 
                       flex items-center justify-center text-2xl transition-all duration-300 
                       hover:scale-110 shadow-lg"
          >
            ▶
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-3 mt-8">
          {skills.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setSlideDirection(
                  index > currentIndex ? "slide-right" : "slide-left",
                );
                setTimeout(() => {
                  setCurrentIndex(index);
                  setSlideDirection("");
                }, 300);
              }}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="text-center text-white/70 text-sm mt-6">
          {currentIndex + 1} / {skills.length}
        </div>
      </div>

      {/* Add custom animations */}
      <style jsx>{`
        @keyframes slideRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slideLeft {
          from {
            transform: translateX(-100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-slide-right {
          animation: slideRight 0.3s ease-out;
        }

        .animate-slide-left {
          animation: slideLeft 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default SkillsPage;
