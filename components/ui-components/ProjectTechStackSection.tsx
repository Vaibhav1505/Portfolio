import React from "react";

interface ProjectTechStackProps {
  data: {
    tech: { icon: React.ReactNode; techName: string }[];
  };
}

function ProjectTechStackSection({ data }: ProjectTechStackProps) {
  return (
    <div className="">
      {/* Section Header */}
      <div className="mb-4 md:mb-10">
        <h2 className="text-2xl md:text-2xl font-bold text-white">
          Tech Stack
        </h2>
        <div className="w-36 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full"></div>
      </div>

      {/* Tech Stack Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
        {data.tech.map((tech, index) => (
          <div
            key={index}
            className="group flex flex-col items-center justify-center p-4 md:p-6 rounded-2xl bg-gradient-to-br from-neutral-900/40 to-neutral-800/60 backdrop-blur-sm border border-neutral-700/30 hover:border-neutral-500/50 transition-all duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
          >
            {/* Tech Icon */}
            <div className="mb-3 transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1 text-2xl md:text-3xl">
              {tech.icon}
            </div>

            {/* Tech Name */}
            <span className="text-xs md:text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors duration-300 text-center leading-tight">
              {tech.techName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTechStackSection;
