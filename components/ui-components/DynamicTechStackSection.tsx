import React from "react";

interface TechStackSectionProp {
  data: {
    icon: React.ReactNode;
    name: string;
  }[];
}

function DynamicTechStackSection({ data }: TechStackSectionProp) {
  return (
    <section className="mt-10">
      <p className="text-white font-bold text-2xl ">Tech Stack</p>
      <p className="text-neutral-500 mb-2">
        Below are the technologies I worked with during my tenure.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {data.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center gap-2 border-2 border-neutral-700 hover:bg-neutral-800  shadow-md rounded-lg p-4 hover:shadow-xl transition-all hover:scale-110"
          >
            <span className="text-4xl text-blue-600">{tech.icon}</span>
            <span className="text-sm font-medium text-neutral-400">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default DynamicTechStackSection;
