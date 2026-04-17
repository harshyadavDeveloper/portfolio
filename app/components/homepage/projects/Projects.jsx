import ProjectCard from './project-card';

const Projects = ({ title, projects }) => {
  return (
    <div className="relative z-50 my-12 lg:my-24">

      {/* Section Title */}
      <div className="sticky top-10">
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] text-white px-5 py-3 text-xl rounded-md">
            {title}
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Projects */}
      <div className="pt-24 flex flex-col gap-6">
        {projects?.map((project, index) => (
          <div
            key={index}
            className="sticky-card w-full mx-auto max-w-2xl sticky"
          >
            <div className="rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)]">
              <ProjectCard project={project} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;