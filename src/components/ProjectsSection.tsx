import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ExternalLink, Github } from "lucide-react";

// Import project images
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";

gsap.registerPlugin(ScrollTrigger);

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Futuristic Gaming UI",
      description: "Advanced 3D gaming interface with real-time statistics and immersive user experience.",
      image: project1,
      tech: ["React", "Three.js", "GSAP", "WebGL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "E-Commerce Platform",
      description: "Modern shopping experience with AR product preview and seamless checkout flow.",
      image: project2,
      tech: ["Next.js", "Stripe", "Framer", "Prisma"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Analytics Dashboard",
      description: "Real-time data visualization with interactive charts and predictive analytics.",
      image: project3,
      tech: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "3D Portfolio Site",
      description: "Interactive portfolio showcasing creative projects with immersive 3D navigation.",
      image: project4,
      tech: ["React", "Spline", "GSAP", "Locomotive"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Social Media App",
      description: "Modern social platform with real-time messaging and story features.",
      image: project5,
      tech: ["React Native", "Socket.io", "Express", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Crypto Trading Platform",
      description: "Secure trading interface with real-time charts and portfolio management.",
      image: project6,
      tech: ["Angular", "Chart.js", "WebSocket", "Redis"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%"
          }
        }
      );

      // Project cards stagger animation
      gsap.fromTo(".project-card",
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
            start: "top 80%"
          }
        }
      );

      // Horizontal scroll for mobile
      if (window.innerWidth <= 768) {
        gsap.to(containerRef.current, {
          x: () => -(containerRef.current!.scrollWidth - window.innerWidth),
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            pin: true,
            scrub: 1,
            end: () => "+=" + containerRef.current!.scrollWidth,
            invalidateOnRefresh: true
          }
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-6 lg:gap-8"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card glass-card p-6 rounded-2xl group hover:scale-105 transition-all duration-500 hover:shadow-2xl cursor-pointer"
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
                  >
                    <ExternalLink size={20} className="text-primary-foreground" />
                  </a>
                  <a 
                    href={project.githubUrl}
                    className="p-3 bg-secondary rounded-full hover:bg-secondary/80 transition-colors"
                  >
                    <Github size={20} className="text-secondary-foreground" />
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
                
                {/* Tech Stack */}
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