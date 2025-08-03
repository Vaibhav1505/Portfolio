import React from "react";
import reactIconData from "../../assets/iconData/react.svg";
import Image from "next/image";

function ReactIcon() {
  return <Image className="h-5 w-5" src={reactIconData} alt="react" />;
}

export default ReactIcon;
