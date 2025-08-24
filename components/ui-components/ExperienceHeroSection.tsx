"use client";
import Image from "next/image";
import React from "react";

interface HeroSectionProps {
  data: {
    imageUrl: string;
    heading: {
      first: string;
      second: string;
      third: string;
    };
  };
}

function ExperienceHeroSection({ data }: HeroSectionProps) {
  return (
    <section className="flex flex-col md:flex-row gap-8 items-center max-w-5xl mx-auto p-6 md:p-8">
      
      {/* Simple Image Container */}
      <div className="relative group flex-shrink-0">
        <div className="w-48 h-32 md:w-60 md:h-40 rounded-2xl overflow-hidden bg-neutral-800/50 border border-neutral-700/50 transition-all duration-300 hover:border-neutral-500/70 hover:shadow-xl">
          <Image
            width={240}
            height={160}
            src={data.imageUrl}
            alt="Company logo"
            className="w-full h-full object-contain p-4 transition-transform duration-300 hover:scale-105"
          />
        </div>
      </div>
      
      {/* Content Container */}
      <div className="text-center md:text-left flex-1 space-y-6">
        
        {/* Main Heading */}
        <div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-2">
            {data.heading.first}
          </h1>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto md:mx-0"></div>
        </div>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl text-neutral-300 leading-relaxed max-w-2xl">
          {data.heading.second}
        </p>
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800/60 backdrop-blur-sm border border-neutral-600/40 rounded-xl text-sm font-medium text-neutral-300 hover:text-white hover:border-neutral-500/60 transition-all duration-300">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          {data.heading.third}
        </div>
      </div>
    </section>
  );
}

export default ExperienceHeroSection;