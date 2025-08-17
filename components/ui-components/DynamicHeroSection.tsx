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

function DynamicHeroSection({ data }: HeroSectionProps) {
  return (
    <>
      <p className="text-white font-bold text-2xl mb-1">Description</p>{" "}
      <div className="flex gap-5">
        <div className="py-20 px-10 bg-gray-800 rounded-2xl">
          <Image
            width={200}
            height={200}
            src={data.imageUrl}
            alt="image"
          ></Image>
        </div>
        <div>
          <p className="font-semibold text-xl text-white">
            {data.heading.first}
          </p>
          <p className="text-md text-secondary">{data.heading.second}</p>
          <div className="bg-gray-500 mt-3 text-md inline-flex px-2   text-white rounded-full ">
            {data.heading.third}
          </div>
        </div>
      </div>
    </>
  );
}

export default DynamicHeroSection;
