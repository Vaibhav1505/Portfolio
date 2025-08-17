import Link from "next/link";
import React from "react";

interface NavbarProps {
  navigationUrl: string;
  heading: string;
}

function DynamicNavbar({ navigationUrl, heading }: NavbarProps) {
  return (
    <div className="py-3 bg-clip-text text-2xl text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 backdrop-blur, bg-opacity  backdrop-blur bg-opacity">
      <div>
        <Link href={navigationUrl}>
          <span className="font-semibold">{heading}</span>
        </Link>
      </div>
    </div>
  );
}

export default DynamicNavbar;
