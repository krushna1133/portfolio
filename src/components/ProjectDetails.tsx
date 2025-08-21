import { useParams } from "react-router-dom";
import { projects } from "@/data/projectsData";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  
  // Convert id to number before comparing
  const project = projects.find(p => p.id === Number(id));

  if (!project) {
    return <div className="p-10 text-center text-xl">Project not found.</div>;
  }

  return (
    <section className="p-10 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">{project.title}</h1>
      <img
        src={project.image}
        alt={project.title}
        className="w-full rounded-lg mb-6"
      />
      <p className="mb-4">{project.description}</p>
      <h3 className="font-semibold mb-2">Technologies Used:</h3>
      <ul className="list-disc list-inside mb-6">
        {project.tech.map((tech, idx) => (
          <li key={idx}>{tech}</li>
        ))}
      </ul>
      <a
        href={project.liveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="text-primary underline"
      >
        View Live Project
      </a>
    </section>
  );
};

export default ProjectDetails;
