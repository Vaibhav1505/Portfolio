import React from "react";
import mongodbIconData from "../../assets/iconData/mongodb.svg";
import Image from "next/image";

function MongoDBIcon() {
  return <Image className="h-5 w-5" src={mongodbIconData} alt="mongo" />;
}

export default MongoDBIcon;
