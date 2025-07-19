import Image from "next/image";
import React from "react";
import InstagramIconData from "../iconData/instagram.svg";

function InstagramIcon() {
  return <Image alt="InstagramIcon" src={InstagramIconData}></Image>;
}

export default InstagramIcon;
