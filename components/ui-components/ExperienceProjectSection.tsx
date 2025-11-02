import Image from "next/image";
import React from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
}

interface ExperienceProjectsSectionProps {
  data: Project[];
}

const DynamicProjectsSection: React.FC<ExperienceProjectsSectionProps> = ({
  data,
}) => {
  return (
    <section className="mt-12 md:mt-16">
      {/* Section Header */}
      <div className="mb-8 md:mb-12">
        <h2 className="text-2xl md:text-3xl font-bold text-white">Projects</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-4"></div>
        <p className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl">
          Key projects I contributed to during my experience, showcasing
          real-world application of technologies and problem-solving skills.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
        {data.map((project, index) => (
          <div
            key={index}
            className="group relative bg-gradient-to-br from-neutral-900/60 to-neutral-800/40 backdrop-blur-sm border border-neutral-700/40 hover:border-neutral-500/60 rounded-2xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:-translate-y-2"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

            {/* Project Image */}
            {project.image && (
              <div className="relative overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600}
                  height={300}
                  className="w-full h-48 md:h-56 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                {/* Decorative Corner Element */}
                <div className="absolute top-4 right-4 w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full opacity-0 group-hover:opacity-80 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
              </div>
            )}

            {/* Project Content */}
            <div className="relative z-10 p-6 md:p-8">
              {/* Project Title */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 group-hover:text-blue-100 transition-colors duration-300">
                {project.title}
              </h3>

              {/* Project Description */}
              <p className="text-neutral-400 group-hover:text-neutral-300 transition-colors duration-300 leading-relaxed mb-4 text-sm md:text-base">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center px-3 py-1.5 bg-neutral-800/60 backdrop-blur-sm border border-neutral-600/30 hover:border-neutral-500/50 text-neutral-300 hover:text-white rounded-full text-xs md:text-sm font-medium transition-all duration-300 hover:scale-105"
                  >
                    {techItem}
                  </span>
                ))}
              </div>

              {/* Project Link */}
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-blue-500/20 to-purple-500/20 hover:from-blue-500/30 hover:to-purple-500/30 border border-blue-500/30 hover:border-blue-400/50 text-blue-400 hover:text-blue-300 rounded-xl text-sm font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg backdrop-blur-sm"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path

                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                  View Project
                </a>
              )}
            </div>

            {/* Decorative Bottom Element */}
            <div className="absolute bottom-4 left-6 w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-0 group-hover:opacity-60 transition-all duration-700 transform scale-0 group-hover:scale-100"></div>
          </div>
        ))}
      </div>

      {/* Optional: Projects Count */}
      <div className="mt-8 md:mt-12 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/50 backdrop-blur-sm border border-neutral-700/30 rounded-full">
          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <span className="text-neutral-400 text-sm font-medium">
            {data.length} Projects Delivered
          </span>
        </div>
      </div>
    </section>
  );
};

export default DynamicProjectsSection;
