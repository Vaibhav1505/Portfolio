import React from "react";
import socketIOIconData from "../iconData/socketioIconData.webp";
import Image from "next/image";

function SocketioIcon() {
  return <Image className="h-5 w-5" src={socketIOIconData} alt="socketio" />;
}

export default SocketioIcon;
