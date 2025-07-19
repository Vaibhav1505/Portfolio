"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface IconLinkProps {
  icon: React.ReactNode;
  link: string;
  external: boolean;
}

function IconLink({ icon, link, external = false }: IconLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    if (external) {
      window.open(link, "_blank");
    } else {
      router.push(link);
    }
  };

  return (
    <div
      className="cursor-pointer p-2 mx-1.5  inline-flex rounded-md bg-transparent hover:ease-in-out delay-75 hover:bg-neutral-800 "
      onClick={handleClick}
    >
      {icon}
    </div>
  );
}

export default IconLink;
