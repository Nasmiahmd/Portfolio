import React, { useState, useCallback, useMemo } from "react";

const SkillsPage = () => {
  const skills = useMemo(() => [
    { id: 1, name: "HTML", level: 1, experience: "Beginner" },
    { id: 2, name: "CSS", level: 5, experience: "Pro" },
    { id: 3, name: "JavaScript", level: 3, experience: "Advanced" },
    { id: 4, name: "PHP", level: 4, experience: "Expert" },
    { id: 5, name: "React", level: 4, experience: "Expert" },
    { id: 6, name: "Python", level: 2, experience: "Intermediate" },
  ], []);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const levelColors = useMemo(() => ({
    1: "#ff6b6b",
    2: "#ffa500",
    3: "#4ecdc4",
    4: "#45b7d1",
    5: "#00b894",
  }), []);

  const levelDescriptions = useMemo(() => ({
    1: "🎯 Just getting started with basics",
    2: "📚 Comfortable with fundamentals",
    3: "🚀 Building complex projects",
    4: "💡 Solving advanced problems",
    5: "🏆 Teaching and mentoring others",
  }), []);

  const getLevelColor = useCallback((level) => levelColors[level], [levelColors]);
  const getLevelDescription = useCallback((level) => levelDescriptions[level], [levelDescriptions]);

  const navigateSkill = useCallback((direction) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    setTimeout(() => {
      setCurrentIndex(prev => {
        if (direction === 'next') {
          return (prev + 1) % skills.length;
        } else if (direction === 'prev') {
          return (prev - 1 + skills.length) % skills.length;
        }
        return prev;
      });
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, skills.length]);

  const goToSkill = useCallback((index) => {
    if (isAnimating || index === currentIndex) return;
    
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating, currentIndex]);

  const nextSkill = useCallback(() => navigateSkill('next'), [navigateSkill]);
  const prevSkill = useCallback(() => navigateSkill('prev'), [navigateSkill]);

  const currentSkill = skills[currentIndex];

  return (
    <div 
      className="min-h-screen flex items-center justify-center py-8 sm:py-12 px-4 sm:px-6"
      style={{ minHeight: 'calc(100vh - 68px)' }}
    >
      <div className="max-w-2xl w-full mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center mb-6 sm:mb-8 md:mb-10 drop-shadow-lg">
          Skills Assessment
        </h2>

        {/* Main Slider Container */}
        <div className="flex items-center justify-center gap-2 sm:gap-4">
          {/* Previous Button */}
          <button
            onClick={prevSkill}
            disabled={isAnimating}
            className="
              bg-white/20 backdrop-blur-sm 
              hover:bg-white/30 
              disabled:opacity-50 
              disabled:cursor-not-allowed
              text-white 
              w-10 h-10 sm:w-12 sm:h-12 
              rounded-full 
              flex items-center justify-center 
              text-xl sm:text-2xl 
              transition-all duration-300 
              hover:scale-110 
              shadow-lg
              focus:outline-none
              focus:ring-2
              focus:ring-white/50
              flex-shrink-0
            "
            aria-label="Previous skill"
          >
            ◀
          </button>

          {/* Skill Card */}
          <div className="flex-1 bg-white rounded-2xl shadow-2xl overflow-hidden">
            <div className="p-4 sm:p-6 md:p-8">
              {/* Skill Name */}
              <div className="
                text-4xl sm:text-5xl md:text-6xl 
                font-bold text-center mb-6 sm:mb-8
                bg-gradient-to-r from-purple-600 to-indigo-600 
                bg-clip-text text-transparent
              ">
                {currentSkill.name}
              </div>

              {/* Level Slider */}
              <div className="mb-6">
                <div className="flex gap-1 sm:gap-2 mb-4">
                  {[1, 2, 3, 4, 5].map((level) => (
                    <div
                      key={level}
                      className="flex-1 h-2 sm:h-3 rounded-full transition-all duration-300"
                      style={{
                        backgroundColor: level <= currentSkill.level
                          ? getLevelColor(currentSkill.level)
                          : "#e5e7eb",
                      }}
                      role="presentation"
                    />
                  ))}
                </div>

                {/* Level Badge */}
                <div className="flex justify-center">
                  <div
                    className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-white font-semibold text-sm sm:text-base"
                    style={{ backgroundColor: getLevelColor(currentSkill.level) }}
                  >
                    Level {currentSkill.level}
                  </div>
                </div>
              </div>

              {/* Experience Label */}
              <div className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-4">
                {currentSkill.experience}
              </div>

              {/* Description */}
              <div className="text-center text-gray-600 text-xs sm:text-sm pt-4 border-t border-gray-200">
                {getLevelDescription(currentSkill.level)}
              </div>
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSkill}
            disabled={isAnimating}
            className="
              bg-white/20 backdrop-blur-sm 
              hover:bg-white/30 
              disabled:opacity-50 
              disabled:cursor-not-allowed
              text-white 
              w-10 h-10 sm:w-12 sm:h-12 
              rounded-full 
              flex items-center justify-center 
              text-xl sm:text-2xl 
              transition-all duration-300 
              hover:scale-110 
              shadow-lg
              focus:outline-none
              focus:ring-2
              focus:ring-white/50
              flex-shrink-0
            "
            aria-label="Next skill"
          >
            ▶
          </button>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center gap-2 sm:gap-3 mt-6 sm:mt-8">
          {skills.map((skill, index) => (
            <button
              key={skill.id}
              onClick={() => goToSkill(index)}
              disabled={isAnimating}
              className={`
                transition-all duration-300 rounded-full
                focus:outline-none focus:ring-2 focus:ring-white/50
                ${index === currentIndex
                  ? "w-6 sm:w-8 h-1.5 sm:h-2 bg-white"
                  : "w-1.5 sm:w-2 h-1.5 sm:h-2 bg-white/50 hover:bg-white/70"
                }
              `}
              aria-label={`Go to skill ${index + 1}`}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div className="text-center text-white/70 text-xs sm:text-sm mt-4 sm:mt-6">
          {currentIndex + 1} / {skills.length}
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;