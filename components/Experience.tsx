import React from "react";
import ExperienceCard from "./ui-components/ExperienceCard";
import CompanyIcon from "@/assets/icons/companyIcon";
import ReactIcon from "@/assets/icons/ReactIcon";
import NodeJSIcon from "@/assets/icons/NodeIcon";
import ExpressIcon from "@/assets/icons/ExpressIcon";
import MongoDBIcon from "@/assets/icons/MongoDbIcon";
import TailwindIcon from "@/assets/icons/TailwindIcon";
import FlutterIcon from "@/assets/icons/FlutterIcon";

function Experience() {
  const experienceArray = [
    {
      id: 1,
      icon: <CompanyIcon/>,
      jobRole: "Full Stack Developer",
      jobDuration: "Current",
      jobDescription:
        "Design and develop scalable, high-performing web applications using MERN, with a strong focus on maintainability and security.",
      companyName: "VKV Technologies Pvt. Ltd.",
      companyLink: "https://vkvtech.com",
      techStack: [
        {
          icon: <ReactIcon />,
          name: "ReactJS",
        },
        {
          icon: <NodeJSIcon />,
          name: "NodeJS",
        },
        {
          icon: <ExpressIcon />,
          name: "ExpressJS",
        },
        {
          icon: <MongoDBIcon />,
          name: "MongodB",
        },
        {
          icon: <TailwindIcon />,
          name: "Tailwind CSS",
        },
        {
          icon: <FlutterIcon />,
          name: "Flutter",
        },
      ],
    },
  ];

  return (
    <div className="py-8">
      {/* heading */}
      <div className="space-y-2">
        <h1 className="bg-clip-text text-2xl font-semibold text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 backdrop-blur, bg-opacity  backdrop-blur bg-opacity">
          Experience
        </h1>
        <p className="text-secondary text-sm">
          Here&apos;s a timeline of my professional journey, showcasing my roles
          and contributions in blockchain and full-stack development.
        </p>
      </div>
      {/* content */}
      <div>
        {experienceArray.map((experience) => (
          <ExperienceCard
            key={experience.id}
            icon={experience.icon}
            jobRole={experience.jobRole}
            jobDuration={experience.jobDuration}
            jobDescription={experience.jobDescription}
            companyName={experience.companyName}
            companyLink={experience.companyLink}
            techStack={experience.techStack}
          />
        ))}
      </div>
    </div>
  );
}

export default Experience;
