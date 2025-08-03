import React from "react";
import FlutterIconData from "../../assets/iconData/flutter-svgrepo-com.svg";
import Image from "next/image";

function FlutterIcon() {
  return <Image className="h-5 w-5" src={FlutterIconData} alt="mongo" />;
}

export default FlutterIcon;
