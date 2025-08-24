import React from "react";

interface ProjectKeyFeaturesProps {
  data: {
    icon: React.ReactNode;
    title: string;
    description: string;
  }[];
}

function ProjectKeyFeaturesSection({ data }: ProjectKeyFeaturesProps) {
  return (
    <div className="py-5">
      {/* Section Header */}
      <div className="mb-8 md:mb-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-1">
          Key Features
        </h2>
        <p className="text-neutral-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
          Discover the powerful features that make this project stand out
        </p>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-2"></div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
        {data.map((feature, index) => (
          <div
            key={index}
            className="group relative p-6 md:p-8 rounded-2xl bg-gradient-to-br from-neutral-900/50 to-neutral-800/30 backdrop-blur-sm border border-neutral-700/30 hover:border-neutral-500/50 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl cursor-pointer overflow-hidden"
          >
            {/* Background Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
            
            {/* Content */}
            <div className="relative z-10">
              {/* Feature Icon */}
              <div className="mb-6">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br text-white from-neutral-800/80 to-neutral-700/60 flex items-center justify-center text-2xl md:text-3xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg">
                  {feature.icon}
                </div>
              </div>

              {/* Feature Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 group-hover:text-blue-100 transition-colors duration-300">
                {feature.title}
              </h3>

              {/* Feature Description */}
              <p className="text-neutral-400 text-sm md:text-base leading-relaxed group-hover:text-neutral-300 transition-colors duration-300">
                {feature.description}
              </p>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-500"></div>
            <div className="absolute bottom-4 left-4 w-1 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-40 group-hover:scale-200 transition-transform duration-700"></div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectKeyFeaturesSection;