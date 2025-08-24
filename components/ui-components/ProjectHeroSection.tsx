import React from "react";
import IconLink from "./IconLink";

interface ProjectHeroProps {
  data: {
    imageUrl: React.ReactNode;
    projectName: string;
    organization: string;
    iconLinkData: {
      icon: React.ReactNode;
      link: string;
      external: boolean;
    };
  };
}

function ProjectHeroSection({ data }: ProjectHeroProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-center gap-4 md:gap-8">
      {/* Project Image */}
      <div className="h-32 w-32 sm:h-40 sm:w-40 md:h-56 md:w-56 rounded-2xl overflow-hidden bg-gradient-to-br from-neutral-800/40 to-neutral-900/60 flex-shrink-0 shadow-2xl backdrop-blur-sm border border-neutral-700/20">
        {data.imageUrl}
      </div>
      
      {/* Project Info */}
      <div className="flex-1 min-w-0 space-y-4 md:space-y-3 text-center md:text-left w-full">
        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight tracking-tight">
            {data.projectName}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-neutral-300 font-medium tracking-wide">
            {data.organization}
          </p>
        </div>
        
        {/* Live Link */}
        <div className="inline-flex items-center gap-2 md:gap-3 px-3 md:px-4 py-2 md:py-1 rounded-xl text-xs md:text-sm text-neutral-300 hover:text-white bg-neutral-900/30 hover:bg-neutral-800/50 transition-all duration-300 backdrop-blur-sm border border-neutral-600/20 hover:border-neutral-500/40 cursor-pointer group shadow-lg hover:shadow-xl">
          <div className="transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
            <IconLink
              icon={data.iconLinkData.icon}
              link={data.iconLinkData.link}
              external={data.iconLinkData.external}
            />
          </div>
          <span className="font-semibold tracking-wide">Live Link</span>
        </div>
      </div>
    </div>
  );
}

export default ProjectHeroSection;