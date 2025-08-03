import React from "react";
import ExpressIconData from "../../assets/iconData/express.svg";
import Image from "next/image";

function ExpressIcon() {
  return <Image className="h-5 w-5" src={ExpressIconData} alt="express" />;
}

export default ExpressIcon;
