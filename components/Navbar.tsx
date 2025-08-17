import Link from "next/link";
import React from "react";
import ResumeDownloadButton from "./ui-components/ResumeDownloadButton";

function Navbar() {
  return (
    <div className="flex justify-between py-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 backdrop-blur, bg-opacity  backdrop-blur bg-opacity">
      <div>
        <Link href={"/about"}>
          <span className="font-semibold">Vaibhav Singh</span>
        </Link>
      </div>
      <div className="flex gap-4  font-semibold">
        <ResumeDownloadButton />
      </div>
    </div>
  );
}

export default Navbar;
