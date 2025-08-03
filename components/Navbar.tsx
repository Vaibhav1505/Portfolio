import Link from "next/link";
import React from "react";

function Navbar() {
  return (
      <div className="flex justify-between py-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to bg-neutral-400 backdrop-blur, bg-opacity  backdrop-blur bg-opacity">
        <div>
          <Link href={"/"}>
            <span className="font-semibold">Vaibhav Singh</span>
          </Link>
        </div>
        <div className="flex gap-4 font-normal ">
          <Link className="hover:text-gray-300" href={"/"}>
            Home
          </Link>
          <Link className="hover:text-gray-300" href={"/about"}>
            About
          </Link>
          <Link className="hover:text-gray-300" href={"/contact"}>
            Contact{" "}
          </Link>
          <Link className="hover:text-gray-300" href={"/projects"}>
            Projects
          </Link>
        </div>
      </div>
  );
}

export default Navbar;
