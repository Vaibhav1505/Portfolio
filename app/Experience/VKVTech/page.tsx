"use client";
import ExpressIcon from "@/assets/icons/ExpressIcon";
import MongoDbIcon from "@/assets/icons/MongoDbIcon";
import NodeIcon from "@/assets/icons/NodeIcon";
import ReactIcon from "@/assets/icons/ReactIcon";
import SocketioIcon from "@/assets/icons/socketioIcon";
import TailwindIcon from "@/assets/icons/TailwindIcon";
import WebRTCIcon from "@/assets/icons/WebRTCIcon";
import ExperienceHeroSection from "@/components/ui-components/ExperienceHeroSection";
import ExperienceKeyAchievementsSection from "@/components/ui-components/ExperienceKeyAchievements";
import ExperienceProjectsSection from "@/components/ui-components/ExperienceProjectSection";
import ExperienceTechStackSection from "@/components/ui-components/ExperienceTechStackSection";
import React from "react";

const VKVTechData = {
  heroSectionData: {
    imageUrl: "/assets/images/teal_logo.png",
    heading: {
      first: "VKV Technologies Private Limited",
      second: "Fullstack Developer",
      third: "2024 - Current",
    },
  },
  techStackData: [
    { icon: <ReactIcon />, name: "React.js" },
    { icon: <NodeIcon />, name: "Node.js" },
    { icon: <ExpressIcon />, name: "Express.js" },
    { icon: <MongoDbIcon />, name: "MongoDB" },
    { icon: <TailwindIcon />, name: "TailwindCSS" },
    { icon: <SocketioIcon />, name: "SocketIo" },
    { icon: <WebRTCIcon />, name: "WebRTC" },
  ],
  keyAchievementData: [
    "Transitioned from frontend-only to full-stack by learning backend development with Node.js, Express & MongoDB.",
    "Contributed to the development of an in-house CRM platform, handling both frontend and backend modules.",
    "Built a Flutter-based dating app (Flings) integrating Firebase, real-time chat, and payment features.",
    "Implemented WebRTC and Socket.io for seamless real-time communication features.",
    "Worked on multiple MERN stack projects, improving code scalability and performance.",
    "Enhanced UI/UX using Tailwind CSS and optimized React components for better reusability.",
  ],
  projects: [
    {
      title: "CRM Platform",
      description:
        "Developed an end-to-end CRM web application for internal clients, including features for sales tracking, lead management, and analytics dashboard.",
      tech: ["React.js", "Node.js", "MongoDB","ExpressJS"],
      link: "https://accounts.leadnab.com",
      image:"/assets/images/leadnab_working_image.png"
    },
    {
      title: "Twined Dating App",
      description:
        "Built a cross-platform dating app in Flutter, integrating real-time chat, matchmaking algorithms, and payment gateway.",
      tech: ["Flutter", "NodeJS","ExpressJS","MongoDB","WebRTC", "Socket.io"],
      link: "https://twined.vkvtech.com",
      image:"/assets/images/flingsWorkingImage.png"
    },
  ],
  
};

const VKVTechPage = () => {
  return (
    <div className="py-7 px-6">
      <ExperienceHeroSection data={VKVTechData.heroSectionData} />
      <ExperienceTechStackSection data={VKVTechData.techStackData} />
      <ExperienceProjectsSection data={VKVTechData.projects} />
      <ExperienceKeyAchievementsSection data={VKVTechData.keyAchievementData} />
      
    </div>
  );
};

export default VKVTechPage;
