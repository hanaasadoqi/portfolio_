import ProjectGalleryCard from "./ProjectGalleryCard";

interface ProjectGridProps {
  featuredProject: any;
  rightProjects: any[];
  bottomProjects: any[];
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ featuredProject, rightProjects, bottomProjects }) => {
  return (
    <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 grid-rows-2 gap-4">

      {/* Featured Project - Takes 2/3 Width */}
      <div className="col-span-1 md:col-span-2 row-span-1 md:row-span-2">
        <div className="h-full w-full">
          <ProjectGalleryCard project={featuredProject} size="large" />
        </div>
      </div>

      {/* Right Side Projects - Stacked Vertically */}
      <div className="col-span-1 row-span-1 md:row-span-2 flex flex-col space-y-4">
        {rightProjects.map((project) => (
          <div key={project.id} className="h-1/2">
            <ProjectGalleryCard project={project} size="medium" />
          </div>
        ))}
      </div>

      {/* Bottom Row Projects */}
      <div className="row-span-1 col-span-1 md:col-span-3 flex flex-col md:flex-row -space-y-32 md:space-y-0 md:space-x-4">
        {bottomProjects.map((project) => (
          <div key={project.id} className="w-full md:w-1/3 h-1/2 md:h-full hover:h-full hover:z-50">
            <ProjectGalleryCard project={project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectGrid;