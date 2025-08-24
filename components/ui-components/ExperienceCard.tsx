"use client";
import ExternalLinkIcon from "@/assets/icons/ExternalLinkIcon";
import { useRouter } from "next/navigation";
import React from "react";

interface cardData {
  icon: React.ReactNode;
  jobRole: string;
  jobDuration: string;
  jobDescription: string;
  companyName: string;
  companyLink: string;
  experienceInfoURL: string;
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
  experienceInfoURL,
}: cardData) {
  const router = useRouter();

  const handleCompanyClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card navigation
    window.open(companyLink, "_blank");
  };

  const handleCardClick = () => {
    router.push(experienceInfoURL);
  };

  return (
    <div
      onClick={handleCardClick}
      className="bg-neutral-900 rounded-xl p-8 my-6 space-y-6 transition-transform transform-gpu hover:scale-102 hover:shadow-lg hover:bg-gradient-to-br hover:from-neutral-800 hover:via-neutral-900 hover:to-neutral-950 hover:opacity-95 cursor-pointer"
    >
      {/* Top Section */}
      <div className="flex items-start gap-4">
        {/* Icon */}
        <div className="bg-neutral-700 p-3 rounded-xl w-14 h-14 flex items-center justify-center">
          {icon}
        </div>

        {/* Job Info */}
        <div className="flex flex-col space-y-2 flex-1">
          {/* Role & Company */}
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-white font-semibold text-lg">{jobRole}</span>
            <span className="text-neutral-400 text-sm">at</span>
            <button
              onClick={handleCompanyClick}
              className="flex items-center gap-1 text-white font-semibold hover:underline"
              aria-label={`Visit ${companyName}`}
            >
              {companyName}
              <ExternalLinkIcon />
            </button>
          </div>

          {/* Duration */}
          <div className="inline-block bg-gradient-to-r from-purple-700 to-indigo-700 rounded-md px-2 backdrop-blur-sm w-fit">
            <span className="text-white font-medium text-xs">
              {jobDuration}
            </span>
          </div>

          {/* Description */}
          <p className="text-neutral-300 text-sm leading-relaxed">
            {jobDescription}
          </p>
        </div>
      </div>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech) => (
          <div
            key={tech.name}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-800 border border-neutral-700 hover:bg-neutral-700 transition"
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
