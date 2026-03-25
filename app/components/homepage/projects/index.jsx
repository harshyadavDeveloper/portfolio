import Projects from './Projects';

import {
  personalProjects,
  professionalProjects,
  freelanceProjects
} from '@/utils/data/projects-data';

const ProjectsSection = () => {
  return (
    <>
      <Projects
        title="PERSONAL PROJECTS"
        projects={personalProjects}
      />

      <Projects
        title="PROFESSIONAL EXPERIENCE"
        projects={professionalProjects}
      />

      <Projects
        title="FREELANCE PROJECTS"
        projects={freelanceProjects}
      />
    </>
  );
};

export default ProjectsSection;