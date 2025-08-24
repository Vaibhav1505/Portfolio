import ChatIcon from "@/assets/icons/ChatIcon";
import CommunityIcon from "@/assets/icons/communityIcon";
import ExpressIcon from "@/assets/icons/ExpressIcon";
import GlobeIcon from "@/assets/icons/GlobeIcon";
import GroupIcon from "@/assets/icons/GroupIcon";
import NodeJSIcon from "@/assets/icons/NodeIcon";
import NotificationIcon from "@/assets/icons/NotificationIcon";
import ReactIcon from "@/assets/icons/ReactIcon";
import ShareIcon from "@/assets/icons/ShareIcon";
import SocketioIcon from "@/assets/icons/socketioIcon";
import SQLIcon from "@/assets/icons/SQLIcon";
import StackIcon from "@/assets/icons/StackIcon";
import VideoCallIcon from "@/assets/icons/VideoCallIcon";
import WebRTCIcon from "@/assets/icons/WebRTCIcon";
import ProjectDescriptionSection from "@/components/ui-components/ProjectDescriptionSection";
import ProjectHeroSection from "@/components/ui-components/ProjectHeroSection";
import ProjectKeyFeaturesSection from "@/components/ui-components/ProjectKeyFeaturesSection";
import ProjectTechStackSection from "@/components/ui-components/ProjectTechStackSection";
import React from "react";

function Community() {
  const communityData = {
    heroSectionData: {
      imageUrl: <CommunityIcon />,
      projectName: "Community: A Team Collaboration Platform",
      organization: "Personal",
      iconLinkData: {
        icon: <GlobeIcon />,
        link: "https://github.com/Vaibhav1505/commUnity",
        external: true,
      },
    },
    descriptionData: {
      description:
        "Community is a modern team collaboration platform designed to bring people, projects, and workflows together seamlessly. Built for speed, simplicity, and productivity, Community helps teams communicate through real-time chat, organize discussions with channels, share files instantly, and stay aligned with powerful integrations.Whether you’re managing a startup, scaling a business, or coordinating remote teams, Community keeps everyone connected and focused. With features like group messaging, voice & video calls, task integration, and secure file sharing, it ensures communication and collaboration happen without friction.Stay connected. Stay productive. Build better together with Community.",
    },
    techStackData: {
      tech: [
        { icon: <ReactIcon />, techName: "Flutter" },
        { icon: <NodeJSIcon />, techName: "Node.js" },
        { icon: <ExpressIcon />, techName: "Express.js" },
        { icon: <SQLIcon />, techName: "PostgreSQL" },
        { icon: <SocketioIcon />, techName: "Socket.IO" },
        { icon: <WebRTCIcon />, techName: "WebRTC" },
      ],
    },
    communityFeatures: [
      {
        icon: < ChatIcon/>,
        title: "Real-Time Messaging",
        description:
          "Communicate instantly with your team through direct messages or group discussions. Stay connected without switching tabs.",
      },
      {
        icon: <GroupIcon />,
        title: "Team Channels",
        description:
          "Create dedicated channels for projects, departments, or topics to keep conversations organized and easy to follow.",
      },
      {
        icon: <ShareIcon />,
        title: "File Sharing & Collaboration",
        description:
          "Upload, preview, and share files securely within conversations, ensuring team members always have the resources they need.",
      },
      {
        icon: <VideoCallIcon />,
        title: "Voice & Video Calls",
        description:
          "Start quick voice or video meetings right inside Community to collaborate in real time, no third-party apps required.",
      },
      {
        icon: <NotificationIcon />,
        title: "Smart Notifications",
        description:
          "Stay in the loop with customizable notifications so you never miss important updates but avoid unnecessary noise.",
      },
      {
        icon: <StackIcon />,
        title: "Task & Workflow Alignment",
        description:
          "Keep your team’s tasks and workflows on track with lightweight project tracking right inside your collaboration hub.",
      },
    ],
  };

  return (
    <div>
      <div>
        <ProjectHeroSection data={communityData.heroSectionData} />
        <ProjectDescriptionSection data={communityData.descriptionData} />
        <ProjectTechStackSection data={communityData.techStackData} />
        <ProjectKeyFeaturesSection data={communityData.communityFeatures} />
        {/* <ProjectGallerySection data={communityData.flingsGalleryData}/> */}
      </div>
    </div>
  );
}

export default Community;
