import React from "react";

interface descriptionProps {
  data: {
    description: string;
  };
}

function ProjectDescriptionSection({ data }: descriptionProps) {
  return (
    <div className="my-8">
        <div>
      <h2 className="text-white text-2xl font-bold ">Description</h2>
      <div className="w-38 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mb-6"></div>
      </div>
<div className="my-3"> <p className="text-secondary">{data.description}</p></div>
     
    </div>
  );
}

export default ProjectDescriptionSection;
