import React from "react";
import NodeJSIconData from "../../assets/iconData/nodejs.svg";
import Image from "next/image";

function NodeJSIcon() {
  return <Image className="h-5 w-5" src={NodeJSIconData} alt="mongo" />;
}

export default NodeJSIcon;
