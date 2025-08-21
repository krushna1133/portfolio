import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink } from "lucide-react";
import { useNavigate } from "react-router-dom";

// Project images
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";
import project5 from "@/assets/project5.png";
import project6 from "@/assets/project6.png";

gsap.registerPlugin(ScrollTrigger);

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl: string;
  githubUrl?: string;
}

const ProjectsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const navigate = useNavigate();

  const projects: Project[] = [
    {
      id: 1,
      title: "Grainly UI/UX",
      description:
        "Advanced 3D gaming interface with real-time statistics and immersive user experience.",
      image: project1,
      tech: ["Figma", "Three.js", "GSAP", "WebGL"],
      liveUrl: "#",
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description:
        "Modern shopping experience with AR product preview and seamless checkout flow.",
      image: project2,
      tech: ["Next.js", "Stripe", "Framer", "Prisma"],
      liveUrl: "#",
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description:
        "Real-time data visualization with interactive charts and predictive analytics.",
      image: project3,
      tech: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "#",
    },
    {
      id: 4,
      title: "3D Portfolio Site",
      description:
        "Interactive portfolio showcasing creative projects with immersive 3D navigation.",
      image: project4,
      tech: ["React", "Spline", "GSAP", "Locomotive"],
      liveUrl: "#",
    },
    {
      id: 5,
      title: "Social Media App",
      description:
        "Modern social platform with real-time messaging and story features.",
      image: project5,
      tech: ["React Native", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "#",
    },
    {
      id: 6,
      title: "Crypto Trading Platform",
      description:
        "Secure trading interface with real-time charts and portfolio management.",
      image: project6,
      tech: ["Angular", "Chart.js", "WebSocket", "Redis"],
      liveUrl: "#",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
          },
        }
      );

      // Project cards animation
      gsap.fromTo(
        ".project-card",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
          },
        }
      );

      // Horizontal scroll for mobile
      if (
        window.innerWidth <= 768 &&
        containerRef.current &&
        sectionRef.current
      ) {
        gsap.to(containerRef.current, {
          x: () => -(containerRef.current!.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + containerRef.current!.scrollWidth,
            invalidateOnRefresh: true,
          },
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <h2
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-center mb-16"
        >
          Featured <span className="gradient-text">Projects</span>
        </h2>

        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8 place-items-center"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer"
              onClick={() => navigate(`/projects/${project.id}`)}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden rounded-xl mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Overlay with links */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <a
                    href={project.liveUrl}
                    className="p-3 bg-primary rounded-full hover:bg-primary/80 transition-colors"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink
                      size={20}
                      className="text-primary-foreground"
                    />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-xs bg-muted rounded-full text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
