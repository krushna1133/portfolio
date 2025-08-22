import { Link } from "react-router-dom";
import { projects } from "../data/projectsData";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  return (
    <section
      id="projectSection"
      className="px-6 md:px-16 lg:px-32 py-16 bg-secondary/5 text-white"
    >
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
          My <span className="gradient-text">Projects</span>
          {/* Accent line */}
          <span className="block w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"></span>
        </h2>
      </div>

      {/* Show only first 6 projects */}
      {/* bg-black/60   bg-gray-950  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.slice(0, 6).map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* View All button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/projects"
          className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition"
        >
          View All
        </Link>
      </div>
    </section>
  );
};

export default ProjectSection;
