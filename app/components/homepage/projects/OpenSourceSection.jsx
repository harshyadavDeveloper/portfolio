import OpenSourceCard from "./OpenSourceCard";

const OpenSourceSection = ({ title, projects }) => {
  return (
    <div className="relative z-50 my-12 lg:my-24">
      {/* Section Title */}
      <div className="sticky top-10 z-10">
        <div className="flex items-center">
          <span className="bg-[#1a1443] text-white px-5 py-3 text-xl rounded-md whitespace-nowrap">
            {title}
          </span>

          <span className="w-full h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Cards */}
      <div className="pt-20 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects?.map((project) => (
          <OpenSourceCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default OpenSourceSection;
