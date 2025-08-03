"use client";
import ExternalLinkIcon from "@/assets/icons/ExternalLinkIcon";
import React from "react";

interface cardData {
  icon: React.ReactNode;
  jobRole: string;
  jobDuration: string;
  jobDescription: string;
  companyName: string;
  companyLink: string;
  techStack: {
    icon: React.ReactNode;
    name: string;
  }[];
}

function ExperienceCard({
  icon,
  jobRole,
  jobDuration,
  jobDescription,
  companyName,
  companyLink,
  techStack,
}: cardData) {
  const handleClick = () => {
    window.open(companyLink, "_blank");
  };

  return (
    <div className="bg-neutral-900 space-y-6 rounded-xl p-10 my-5  ease-in-out duration-100">
      {/* Top Section */}
      <div className="flex items-start space-x-4">
        <div className="bg-neutral-700 p-2 rounded-xl">{icon}</div>
        <div className="space-y-2">
          <div className="space-x-1 flex">
            <span className="text-white font-semibold">{jobRole}</span>
            <span className="text-secondary">at</span>
            <div
              className="flex space-x-2 cursor-pointer"
              onClick={handleClick}
            >
              <p className="font-semibold  text-white">{companyName}</p>
              <ExternalLinkIcon />
            </div>
          </div>
          <div className="inline-block bg-blue-500/20 rounded-md px-3 py-0.5 backdrop-blur-sm">
            <span className="text-blue-600 font-semibold text-sm">
              {jobDuration}
            </span>
          </div>

          <p className="text-secondary text-sm">{jobDescription}</p>
        </div>
      </div>
      {/* Bottom Section */}
      <div className="space-x-2 ">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="inline-flex   items-center gap-1 px-2 py-1 border border-secondary rounded-md bg-secondary/10 hover:bg-secondary/20 transition"
          >
            {tech.icon}
            <span className="text-xs text-white">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExperienceCard;
