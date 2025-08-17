import DynamicNavbar from "@/components/ui-components/DynamicNavbar";
import React from "react";

const ExperienceLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <DynamicNavbar heading="Experience" navigationUrl="VKVTech" />
      {children}
    </>
  );
};

export default ExperienceLayout;
