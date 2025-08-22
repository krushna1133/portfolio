import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block backdrop-blur-md p-6 rounded-xl shadow-gray-900 hover:shadow-[0_0_15px_rgba(89,130,246,0.2)] transform transition duration-300 border-gray-400 bg-black/90 shadow-[0_0_55px_rgba(99,130,246,0.2)]"
    >
      {/* shadow-[0_0_55px_rgba(99,130,246,0.2)] */}
      {/* Image with hover effect */}
      <div className="overflow-hidden rounded-lg mb-4">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg transform transition duration-300 group-hover:scale-110 group-hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]"
        />
      </div>

      {/* Title with hover color change */}
      <h3 className="text-xl font-semibold text-white mb-2 transition-colors duration-300 group-hover:text-blue-400">
        {project.title}
      </h3>

      <p className="text-gray-400">{project.description}</p>
    </Link>
  );
};

export default ProjectCard;
