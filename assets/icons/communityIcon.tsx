import Image from "next/image";
import React from "react";
import communityIconData from "../iconData/cIconData.webp";

function CommunityIcon() {
  return <Image src={communityIconData} alt="Flings" />;
}

export default CommunityIcon;
