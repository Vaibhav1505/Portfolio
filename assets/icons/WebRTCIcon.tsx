import React from "react";
import WebRTCIconData from "../iconData/webrtcIconData.png";
import Image from "next/image";

function WebRTCIcon() {
  return <Image className="h-5 w-5" src={WebRTCIconData} alt="webrtc" />;
}

export default WebRTCIcon;
