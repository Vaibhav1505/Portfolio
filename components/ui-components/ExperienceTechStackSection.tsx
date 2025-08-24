import React from "react";

interface TechStackSectionProp {
  data: {
    icon: React.ReactNode;
    name: string;
  }[];
}

function ExperienceTechStackSection({ data }: TechStackSectionProp) {
  return (
    <section className="mt-12 md:mt-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white">
          Tech Stack
        </h2>
        <div className="w-42 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl">
          Technologies and tools I worked with during my tenure, showcasing the diverse tech ecosystem I`&apos;ve gained experience in.
        </p>
      </div>

      {/* Tech Stack Grid */}
      <div
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 md:gap-6"
        role="list"
      >
        {data.map((tech, index) => (
          <div
            key={tech.name}
            className="group relative flex flex-col items-center justify-center gap-3 p-4 md:p-6 rounded-2xl bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 backdrop-blur-sm border border-neutral-700/40 hover:border-neutral-500/60 transition-all duration-500 hover:scale-105 hover:shadow-xl hover:-translate-y-1 focus-within:ring-2 focus-within:ring-blue-500/50 focus-within:ring-offset-2 focus-within:ring-offset-neutral-900 cursor-pointer"
            tabIndex={0}
            style={{
              animationDelay: `${index * 50}ms`
            }}
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            {/* Tech Icon */}
            <div className="relative z-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <span className="text-3xl md:text-4xl text-blue-400 group-hover:text-blue-300 transition-colors duration-300">
                {tech.icon}
              </span>
            </div>
            
            {/* Tech Name */}
            <span className="relative z-10 text-xs md:text-sm font-semibold text-neutral-300 group-hover:text-white transition-colors duration-300 text-center leading-tight">
              {tech.name}
            </span>

            {/* Subtle Decorative Elements */}
            <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
            <div className="absolute bottom-2 left-2 w-1 h-1 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-40 transition-all duration-700 transform scale-0 group-hover:scale-100"></div>
          </div>
        ))}
      </div>

      {/* Optional: Tech Count Display */}
      <div className="mt-8 md:mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/30 rounded-full">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <span className="text-neutral-400 text-sm font-medium">
            {data.length} Technologies Mastered
          </span>
        </div>
      </div>
    </section>
  );
}

export default ExperienceTechStackSection;