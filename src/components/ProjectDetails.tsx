import { useParams, Link } from "react-router-dom";
import { projects } from "@/data/projectsData";
import { motion } from "framer-motion";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <div className="p-10 text-center text-xl">
        Project not found.{" "}
        <Link to="/projects" className="text-blue-500 underline">
          Go back
        </Link>
      </div>
    );
  }

  return (
    <section className="p-10 max-w-5xl mx-auto">
      {/* Main image */}
      <img
        src={project.image}
        alt={project.title}
        className="rounded-xl mb-6 shadow-lg w-full"
      />

      {/* Title + description */}
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="text-gray-600 mb-8">{project.description}</p>

      {/* More images masonry grid */}
      {project.moreImages && project.moreImages.length > 0 && (
        <div className="mb-8">
          <h5 className="text-2xl font-semibold mb-4">More Images</h5>
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 h-full">
            {project.moreImages.slice(0, 5).map((img, index) => {
              let colSpanClass = "";
              if (index === 2 || index === 5) colSpanClass = "col-span-2";
              return (
                <div
                  key={index}
                  className={`${colSpanClass} overflow-hidden rounded-lg shadow-md`}
                >
                  <img
                    src={img}
                    alt={`${project.title} extra ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Back button */}
      <Link
        to="/projects"
        className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600"
      >
        Back to Projects
      </Link>

      {/* Contact Section (Replaced with AboutSection-like design) */}
      <div className="mt-20 p-10 bg-primary/5 text-white rounded-3xl grid grid-cols-1 md:grid-cols-2 items-center gap-16 shadow-lg relative">
        {/* Left Side - Profile Image */}
        <div className="relative w-64 h-64 mx-auto">
          {/* Glowing gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-full blur-3xl animate-pulse" />

          {/* Profile image with morph effect */}
          <motion.img
            src="/assets/profile.png"
            alt="Krushna Rathod"
            animate={{
              borderRadius: ["50%", "35%", "20%", "35%", "50%"],
            }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full rounded-full object-cover border-4 border-purple-500 shadow-2xl"
          />

          {/* Floating accent elements */}
          <div className="absolute -top-4 -right-4 w-8 h-8 bg-purple-500 rounded-full animate-bounce" />
          <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-500 rounded-full animate-pulse" />
        </div>

        {/* Right Side - Text + Button */}
        {/* Right Side - Text + Button */}
        <div className="flex flex-col space-y-6 w-full">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-left">
            Let’s Build Something Great
          </h2>
          <p className="text-gray-300 text-lg max-w-md text-left">
            I design and develop modern, user-friendly experiences. Open for
            freelance collaborations and creative projects.
          </p>
          {/* Right Side - Text + Button (button only changed to glassy) */}
          <div className="flex justify-end">
            <a
              href={`https://wa.me/+919623221020?text=Hi%20Krushna,%20I'm%20interested%20in%20your%20project:%20${encodeURIComponent(
                project.title
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-xl
             border border-white/20 bg-white/10 backdrop-blur-md
             text-white font-medium shadow-lg shadow-black/20
             hover:bg-white/15 hover:border-white/30
             transition duration-300"
            >
              {/* subtle inner rim */}
              <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10" />

              {/* glossy highlight */}
              <span
                className="pointer-events-none absolute inset-x-0 -top-1 h-1/2
                 rounded-t-xl bg-gradient-to-b from-white/30 to-transparent opacity-60"
              />

              {/* animated sheen on hover */}
              <span
                className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3
                 bg-gradient-to-r from-transparent via-white/40 to-transparent
                 opacity-0 translate-x-0
                 group-hover:opacity-100 group-hover:translate-x-[250%]
                 transition duration-700"
              />

              <span className="relative">Let’s Talk →</span>
            </a>
          </div>
        </div>
      </div>

      <h6 className="text-center text-gray-400 text-sm mt-10">@2025 rkai.me</h6>
    </section>
  );
};

export default ProjectDetails;

