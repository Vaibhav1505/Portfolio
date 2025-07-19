import GithubIcon from "@/assets/icons/githubIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedInIcon from "@/assets/icons/linkedInIcon";
import React from "react";
import IconLink from "./ui-components/IconLink";
import PersonalImage from '../assets/images/WhatsApp Image 2025-07-19 at 11.43.01_960a0d70.jpg';
import Image from "next/image";

function HeroSection() {
  const navigationData = [
    {
      title: "Github",
      iconData: <GithubIcon />,
      url: "https://github.com/Vaibhav1505",
    },
    {
      title: "LinkedIn",
      iconData: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/vaibhav-singh-a697581b5/",
    },
    {
      title: "Instagram",
      iconData: <InstagramIcon />,
      url: "https://www.instagram.com/vbs.vaibhav_singh/",
    },
  ];

  return (
    <div className="flex h-84 my-8">
      <div className="w-3/4 h-full bg-green-50">
        <div className="h-32 rounded-xl">
            <Image className="object-cover" src={PersonalImage} alt="PersonalImage"/>
        </div>
      </div>
      <div className="w-1/4 ">
        {navigationData.map((icon) => (
          <IconLink
            key={icon.title}
            icon={icon.iconData}
            link={icon.url}
            external={false}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
