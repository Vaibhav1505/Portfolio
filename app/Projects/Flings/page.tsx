import ChatIcon from "@/assets/icons/ChatIcon";
import ExpressIcon from "@/assets/icons/ExpressIcon";
import FilterIcon from "@/assets/icons/FilterIcon";
import FirebaseIcon from "@/assets/icons/FireabseIcon";
import FlingsIcon from "@/assets/icons/flingsIcon";
import FlutterIcon from "@/assets/icons/FlutterIcon";
import GlobeIcon from "@/assets/icons/GlobeIcon";
import LocationIcon from "@/assets/icons/LocationIcon";
import MongoDBIcon from "@/assets/icons/MongoDbIcon";
import NodeJSIcon from "@/assets/icons/NodeIcon";
import PriceIcon from "@/assets/icons/PriceIcon";
import ShieldIcon from "@/assets/icons/ShieldIcon";
import SocketioIcon from "@/assets/icons/socketioIcon";
import StarIcon from "@/assets/icons/StarIcon";
import WebRTCIcon from "@/assets/icons/WebRTCIcon";
import ProjectDescriptionSection from "@/components/ui-components/ProjectDescriptionSection";
import ProjectGallerySection from "@/components/ui-components/ProjectGalleySection";
import ProjectHeroSection from "@/components/ui-components/ProjectHeroSection";
import ProjectKeyFeaturesSection from "@/components/ui-components/ProjectKeyFeaturesSection";
import ProjectTechStackSection from "@/components/ui-components/ProjectTechStackSection";
import React from "react";

function Flings() {
  const flingsData = {
    heroSectionData: {
      imageUrl: <FlingsIcon />,
      projectName: "Flings: Dating App",
      organization: "VKV Technologies Private Limited",
      iconLinkData: {
        icon: <GlobeIcon />,
        link: "flings.vkvtech.com",
        external: true,
      },
    },
    descriptionData: {
      description:
        "Flings is a modern dating app designed to deliver a seamless experience for users seeking genuine connections. Built with Flutter for a cross-platform approach, Flings emphasizes smooth navigation, fast performance, and an intuitive interface tailored to make meeting new people effortless. Users can explore matches, chat securely in real time, and benefit from advanced features like plan-based access controls, ensuring premium members get exclusive benefits. The app leverages modular architecture to keep the interface clean and maintainable, delivering frictionless onboarding, responsive UI elements, and smart user matching algorithms. With a focus on privacy, reliability, and user-friendly design, Flings stands out as a go-to platform for dating in the digital age.",
    },
    techStackData: {
      tech: [
        { icon: <FlutterIcon />, techName: "Flutter" },
        { icon: <NodeJSIcon />, techName: "Node.js" },
        { icon: <ExpressIcon />, techName: "Express.js" },
        { icon: <MongoDBIcon />, techName: "MongoDB" },
        { icon: <SocketioIcon />, techName: "Socket.IO" },
        { icon: <WebRTCIcon />, techName: "WebRTC" },
        { icon: <FirebaseIcon />, techName: "Firebase" },
      ],
    },
    flingsKeyFeaturesData: [
      {
        icon: <ChatIcon />,
        title: "Real-Time Messaging",
        description:
          "Instant messaging with read receipts, typing indicators, and emoji support. Share photos and voice messages seamlessly with Socket.IO integration.",
      },
      {
        icon: <FilterIcon />,
        title: "Advanced Filters",
        description:
          "Customize your search with age range, interests, education, profession, and lifestyle preferences. Find exactly who you're looking for.",
      },
      {
        icon: <LocationIcon />,
        title: "Location-Based Search",
        description:
          "Discover matches nearby or expand your search radius. Set preferred distance and explore connections in your area or worldwide.",
      },
      {
        icon: <PriceIcon />,
        title: "Affordable Premium Plans",
        description:
          "Flexible subscription tiers starting from just $9.99/month. Unlock exclusive features like unlimited likes, super boosts, and priority matching.",
      },
      {
        icon: <StarIcon />,
        title: "Premium Features",
        description:
          "Access exclusive perks including unlimited swipes, see who liked you, advanced search filters, and ad-free browsing experience.",
      },
      {
        icon: <ShieldIcon />,
        title: "Privacy & Security",
        description:
          "End-to-end encrypted conversations, photo verification, and robust privacy controls. Your data is protected with Firebase security protocols.",
      },
    ],
    flingsGalleryData: [
      {
        id: 1,
        src: "/assets/images/flings/flings-Home-Screen.jpg",
        alt: "Flings Home Screen",
        title: "Home Screen",
        category: "ui",
      },
      {
        id: 2,
        src: "/assets/images/flings/Flings-basic-filterPage.jpg",
        alt: "Filter Screen",
        title: "Profile Screen",
        category: "ui",
      },
      {
        id: 3,
        src: "/assets/images/flings/matching-page.jpg",
        alt: "Matches List Screen",
        title: "Matches Screen",
        category: "ui",
      },
      {
        id: 4,
        src: "/assets/images/flings/Flings-Login-Page.jpg",
        alt: "App Login Page",
        title: "Settings Screen",
        category: "ui",
      },

      // Chat Interface
      {
        id: 5,
        src: "/assets//images/flings/Flings-Chat-Page.jpg",
        alt: "Real-time Chat Interface",
        title: "Chat Interface",
        category: "chat",
      },
    ],
  };
  return (
    <div>
      <ProjectHeroSection data={flingsData.heroSectionData} />
      <ProjectDescriptionSection data={flingsData.descriptionData} />
      <ProjectTechStackSection data={flingsData.techStackData} />
      <ProjectKeyFeaturesSection data={flingsData.flingsKeyFeaturesData} />
      <ProjectGallerySection data={flingsData.flingsGalleryData} />
    </div>
  );
}

export default Flings;
