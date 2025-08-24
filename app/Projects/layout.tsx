import DynamicNavbar from "@/components/ui-components/DynamicNavbar";
import React from "react";

const ProjectLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <DynamicNavbar heading="Projects" navigationUrl="/" />
      {children}
    </>
  );
};

export default ProjectLayout;
