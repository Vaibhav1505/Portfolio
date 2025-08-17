import Image from "next/image";
import React from "react";

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string; 
}


interface DynamicProjectsSectionProps {
  data: Project[];
}

const DynamicProjectsSection: React.FC<DynamicProjectsSectionProps> = ({ data }) => {
  return (
    <section className="mt-10">
      <h2 className="text-2xl font-bold text-white mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {data.map((project, index) => (
          <div
            key={index}
            className="bg-neutral-900 border border-neutral-700 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
          >
            {project.image && (
              <Image
                src={project.image}
                alt={project.title}
                width={200} height={200}
                className="w-full h-48 object-cover"
              />
            )}
            <div className="p-5">
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-neutral-400">{project.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tech.map((techItem, i) => (
                  <span
                    key={i}
                    className="bg-neutral-800 text-white px-3 py-1 rounded-full text-sm font-medium"
                  >
                    {techItem}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition"
                >
                  🔗 View Project
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};


export default DynamicProjectsSection;
