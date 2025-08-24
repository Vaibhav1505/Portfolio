"use client";
import React from "react";
import IconLink from "./IconLink";
import { useRouter } from "next/navigation";

interface projectPropType {
  icon: React.ReactNode;
  title: string;
  description: string;
  techStack: string[];
  links: {
    icon: React.ReactNode;
    url: string;
  }[];
  projectType: string;
  redirectUrl:string
}

function ProjectCard({
  icon,
  title,
  description,
  techStack,
  links,
  projectType,
  redirectUrl,
}: projectPropType) {

const router= useRouter();

  const handleCardClick = () => {
    router.push(redirectUrl);
  };

  
  return (
    <div onClick={handleCardClick} className="flex bg-neutral-900 rounded-xl p-6 my-6 transition-transform transform-gpu hover:scale-102 hover:shadow-lg hover:bg-gradient-to-br hover:from-neutral-800 hover:via-neutral-900 hover:to-neutral-950 hover:opacity-95">
      {/* Left Section */}
      <div className="flex items-start space-x-4 flex-1">
        {/* Icon */}
        <div className="bg-neutral-700 p-3 w-14 h-14 rounded-xl flex items-center justify-center">
          {icon}
        </div>

        {/* Content */}
        <div className="space-y-2 flex-1">
          {/* Title */}
          <div className="flex items-center space-x-2">
            <h3 className="text-white text-lg font-bold">{title}</h3>
          </div>

          {/* Project Type Badge */}
          <div className="inline-block bg-gradient-to-r from-purple-700 to-indigo-700 rounded-md px-3 py-0.5 text-xs font-medium text-white shadow-sm">
            {projectType}
          </div>

          {/* Description */}
          <p className="text-neutral-300 text-sm py-2 leading-relaxed">
            {description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-white bg-neutral-800 px-2 py-1 rounded-full border border-neutral-700 shadow-sm hover:bg-neutral-700 transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section: Links */}
      <div className="flex flex-col items-center justify-center space-y-4 w-1/6 min-w-[60px]">
        {links.map((link) => (
          <IconLink
            key={link.url}
            icon={link.icon}
            link={link.url}
            external={true}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectCard;
