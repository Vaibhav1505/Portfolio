import React from "react";
import ProjectCard from "./ui-components/ProjectCard";
import FlingsIcon from "@/assets/icons/flingsIcon";
import GithubIcon from "@/assets/icons/githubIcon";
import GlobeIcon from "@/assets/icons/GlobeIcon";
import CommunityIcon from "@/assets/icons/communityIcon";

function ProjectsSection() {
  const projects = [
    {
      id: 1,
      icon: <FlingsIcon />,
      title: "Flings: Dating App",
      description:
        "Introducing Flings – the dynamic dating app designed for those seeking genuine connections and spontaneous excitement. Crafted with innovation in mind, Flings is built on a robust tech stack: Flutter for a seamless cross-platform experience, Node.js and Express for lightning-fast backend performance, MongoDB for secure data management, Socket.IO for real-time chat, and WebRTC for crisp video calls—all wrapped in a striking, creative UI.",
      techStack: [
        "Flutter",
        "NodeJs",
        "ExpressJS",
        "MongoDB",
        "WebRTC",
        "Socket.io",
      ],
      links: [
        {
          icon: <GithubIcon />,
          url: "https://github.com/Vaibhav1505/Flings",
        },
        {
          icon: <GlobeIcon />,
          url: "flings.vkvtech.com",
        },
      ],
      projectType: "Organization",
    },
     {
      id: 2,
      icon: <CommunityIcon/>,
      title: "commUnity: A Team Collaboration Platform",
      description:
        "The platform empowers teams to efficiently manage their workflows, supporting essential features like adding, deleting, updating, and assigning tasks to specific users. With a user-friendly interface inspired by leading workplace tools like Microsoft Teams, Community enables team members to chat, video conference, and coordinate projects—all in one place.",
      techStack: [
        "React",
        "NodeJs",
        "ExpressJS",
        "MongoDB",
        "WebRTC",
        "Socket.io",
        "NextUI"
      ],
      links: [
        {
          icon: <GithubIcon />,
          url: "https://github.com/Vaibhav1505/commUnity",
        },
        {
          icon: <GlobeIcon />,
          url: "",
        },
      ],
      projectType: "Personal",
    },
    
  ];

  return (
    <div className="py-10">
      {/* Top Section */}
      <div className="space-y-2">
        <h1 className="bg-clip-text text-2xl font-semibold text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 backdrop-blur, bg-opacity  backdrop-blur bg-opacity">
          Projects
        </h1>
        <p className="text-secondary text-sm">
          A collection of my work spanning from Full Stack Applications to
          full-stack projects, both personal and professional.
        </p>
      </div>
      {/* Content Section */}
      <div>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            icon={project.icon}
            title={project.title}
            description={project.description}
            techStack={project.techStack}
            projectType={project.projectType}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}

export default ProjectsSection;
