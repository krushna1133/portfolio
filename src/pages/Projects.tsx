import Navbar from "../components/Navigation";
import { projects } from "../data/projectsData";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  return (
    <div className="bg-secondary/5 min-h-screen text-white">
      <Navbar />

      <section className="px-6 md:px-16 lg:px-32 pt-24 pb-16">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold inline-block relative mt-10">
            My <span className="gradient-text">Projects</span>
            {/* Accent line */}
            <span className="block w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"></span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
