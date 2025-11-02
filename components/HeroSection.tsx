import GithubIcon from "@/assets/icons/githubIcon";
import InstagramIcon from "@/assets/icons/InstagramIcon";
import LinkedInIcon from "@/assets/icons/linkedInIcon";
import React from "react";
import IconLink from "./ui-components/IconLink";
import PersonalImage from "../assets/images/WhatsApp Image 2025-07-19 at 11.43.01_960a0d70.jpg";
import Image from "next/image";
import { PointerHighlight } from "./ui/pointer-highlight";
import { FlipWords } from "./ui/flip-words";

function HeroSection() {

  const roleWords=["Full Stack Development","Frontend Development","Backend Development","Flutter Development"];

  const navigationData = [
    {
      title: "Github",
      iconData: <GithubIcon />,
      url: "https://github.com/Vaibhav1505",
    },
    {
      title: "LinkedIn",
      iconData: <LinkedInIcon />,
      url: "https://www.linkedin.com/in/vaibhav-s-a697581b5/",
    },
    {
      title: "Instagram",
      iconData: <InstagramIcon />,
      url: "https://www.instagram.com/vbs.vaibhav_singh/",
    },
  ];

  return (
    <div className="flex  justify-between flex-col md:flex-row items-center md:items-start my-8 gap-6">
      {/* Left Section: Image and Text */}
      <div className="flex w-4/5 flex-col items-center md:items-start">
        <Image
          className="object-cover rounded-xl w-40 h-40"
          src={PersonalImage}
          alt="PersonalImage"
        />
        <span className="text-3xl flex gap-1.5 text-white font-medium mt-4 text-center md:text-left">
          Hi, I&apos;m <PointerHighlight>Vaibhav</PointerHighlight>
        </span>
        <p className="text-secondary">23, India </p>
       <FlipWords words={roleWords}/>
        <span className="text-secondary text-md my-3  ">
          Turning ambitious ideas into powerful digital products, I specialize
          as a Full Stack Developer using the MERN (MongoDB, Express.js,
          React.js, Node.js) stack and Flutter. From architecting robust backend
          APIs to building visually stunning, high-performance web and mobile
          applications, I bridge the gap between user needs and technological
          innovation.
        </span>
      </div>
      {/* Right Section: Social Icons */}
      <div className="lg:flex md:flex-col gap-4 mt-4 md:mt-0">
        {navigationData.map((icon) => (
          <IconLink
            key={icon.title}
            icon={icon.iconData}
            link={icon.url}
            external={true}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroSection;
