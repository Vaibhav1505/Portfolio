import React from "react";
import TailwindIconData from "../../assets/iconData/tailwind.svg";
import Image from "next/image";

function TailwindIcon() {
  return <Image className="h-5 w-5" src={TailwindIconData} alt="mongo" />;
}

export default TailwindIcon;
