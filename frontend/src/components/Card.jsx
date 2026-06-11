import React from "react";

const Card = ({ project, setProjects }) => {
  // Function to handle GitHub link click
  const handleViewProject = () => {
    if (project.githubLink) {
      window.open(project.githubLink, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="
      bg-gray-800 
      rounded-xl 
      overflow-hidden 
      shadow-lg 
      transition-all 
      duration-300 
      ease-out
      hover:shadow-2xl 
      hover:shadow-blue-500/20
      hover:scale-110 
      hover:-translate-y-4
      hover:z-20
      hover:ring-2
      hover:ring-blue-500/50
      cursor-pointer
      w-full
      max-w-sm
      mx-auto
      h-full
      flex
      flex-col
      relative
    "
    >
      {/* Image Section with Zoom */}
      <div className="h-40 sm:h-44 md:h-48 lg:h-52 overflow-hidden bg-gray-700 relative">
        {project.imageUrl ? (
          <img
            className="w-full h-full object-cover transition-all duration-500 hover:scale-125"
            src={project.imageUrl}
            alt={project.name}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-gray-500">
            No Image Available
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col transition-all duration-300 group-hover:bg-gray-700">
        <h3
          className="
          text-lg 
          sm:text-xl 
          md:text-2xl 
          font-bold 
          text-white 
          mb-2
          line-clamp-1
          transition-all
          duration-300
          group-hover:text-blue-400
        "
        >
          {project.name}
        </h3>

        <p
          className="
          text-gray-400 
          text-sm 
          sm:text-base 
          mb-4 
          line-clamp-3
          flex-1
          transition-all
          duration-300
          group-hover:text-gray-300
        "
        >
          {project.description}
        </p>

        {/* Tech Stack Tags - Optional but nice to have */}
        {project.techStack && project.techStack.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {project.techStack.map((tech, index) => (
              <span
                key={index}
                className="
                  text-xs 
                  sm:text-sm 
                  bg-blue-600/20 
                  text-blue-400 
                  px-2 
                  py-1 
                  rounded-full
                "
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Button with Pop Effect */}
        <button
          className="
          w-full 
          bg-blue-600 
          text-white 
          py-2 
          rounded-lg 
          transition-all 
          duration-300
          text-sm
          sm:text-base
          font-medium
          hover:bg-blue-700 
          hover:scale-105
          active:scale-95
        "
          onClick={handleViewProject}
        >
          View Project →
        </button>
      </div>
    </div>
  );
};

export default Card;
