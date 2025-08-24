import React from "react";
import Community from "./page";

const CommunityLayout = ({
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="p-3">
   <Community/>
    </div>
  );
};

export default CommunityLayout;
