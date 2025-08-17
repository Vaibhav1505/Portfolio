import React from "react";
import { Button } from "../ui/stateful-button";
import DownloadIcon from "@/assets/icons/DownloadIcon";

function ResumeDownloadButton() {
  return (
    <a href="/resume.pdf" download>
      <Button>
        {" "}
        <span className="flex items-center gap-1">
          <DownloadIcon /> Download Resume
        </span>{" "}
      </Button>
    </a>
  );
}

export default ResumeDownloadButton;
