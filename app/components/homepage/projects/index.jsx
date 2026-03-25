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
        title="PROFESSIONAL EXPERIENCE"
        projects={professionalProjects}
      />
      <Projects
        title="FREELANCE PROJECTS"
        projects={freelanceProjects}
      />
      <Projects
        title="PERSONAL PROJECTS"
        projects={personalProjects}
      />




    </>
  );
};

export default ProjectsSection;