import OpenSourceSection from "./OpenSourceSection";
import Projects from "./Projects";

import {
  personalProjects,
  professionalProjects,
  freelanceProjects,
  openSourceProjects,
} from "@/utils/data/projects-data";

const ProjectsSection = () => {
  return (
    <div
      id="projects"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      <Projects
        title="PROFESSIONAL EXPERIENCE"
        projects={professionalProjects}
      />
      <OpenSourceSection
        title="OPEN SOURCE & PACKAGES"
        projects={openSourceProjects}
      />
      <Projects title="FREELANCE PROJECTS" projects={freelanceProjects} />

      <Projects title="PERSONAL PROJECTS" projects={personalProjects} />
    </div>
  );
};

export default ProjectsSection;
