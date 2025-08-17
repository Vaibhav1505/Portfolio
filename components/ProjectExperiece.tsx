import React from "react";
import { TracingBeam } from "./ui/tracing-beam";
import Experience from "./Experience";
import ProjectsSection from "./ProjectsSection";
import LetsTalkSection from "./LetsTalkSection";

function ProjectExperience() {
  return (
    <div>
      <TracingBeam>
        <Experience />
        <ProjectsSection />
        <LetsTalkSection />
      </TracingBeam>
    </div>
  );
}

export default ProjectExperience;
