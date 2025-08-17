"use client";
import React from "react";
import IconLink from "./IconLink";

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
}

function ProjectCard({
  icon,
  title,
  description,
  techStack,
  links,
  projectType,
}: projectPropType) {
  return (
    <div className="flex bg-neutral-900 rounded-xl p-8 my-5 ease-in-out duration-100 hover:scale-102 delay-75 justify-between">
      <div className="flex items-start space-x-4 flex-1">
        <div className="bg-neutral-700 p-2 w-12 rounded-xl flex items-center justify-center">
          {icon}
        </div>
        <div className="space-y-2 flex-1">
          <div className="flex items-center space-x-1">
            <span className="text-white font-semibold">{title}</span>
          </div>
          <div className="inline-block bg-gray-800 rounded-md px-3 py-0.5 backdrop-blur-sm">
            <span className="text-neutral-200 font-sm text-sm">
              {projectType}
            </span>
          </div>
          <p className="text-secondary text-sm py-3">{description}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="text-xs text-white bg-neutral-800 p-1.5 rounded"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      <div className="text-white flex flex-col items-center space-y-3 w-1/6 min-w-[60px]">
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
