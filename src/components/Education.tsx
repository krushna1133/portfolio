import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// college images
import college1 from "@/assets/project2.png";
import college2 from "@/assets/gpg.png";

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const educationData = [
    {
      id: 1,
      name: "Yeshwantrao Chavan College of Engineering, Nagpur",
      branch: "Artificial Intelligence and Data Science",
      year: "2024 – Current",
      image: college1,
    },
    {
      id: 2,
      name: "Government Polytechnic College, Gadchiroli",
      branch: "Computer Engineering",
      year: "2022 – 2024",
      image: college2,
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

      // Project cards stagger animation
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
    });

    return () => ctx.revert();
  }, []);
  return (
    <section
      id="education"
      ref={sectionRef}
      className="py-24 lg:py-36 relative overflow-hidden"
    >
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-20">
          <h2
            ref={titleRef}
            className="text-4xl md:text-5xl font-bold inline-block relative"
          >
            My <span className="gradient-text">Education</span>
            {/* Accent line */}
            <span className="block w-24 h-1 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-4 rounded-full"></span>
          </h2>
        </div>

        {/* Education Cards */}
        <div
          ref={containerRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {educationData.map((edu) => (
            <div
              key={edu.id}
              className="edu-card glass-card p-6 rounded-2xl h-full flex flex-col justify-between 
              hover:-translate-y-2 transition-transform duration-500 hover:shadow-2xl hover:shadow-primary/30"
            >
              {/* College Image */}
              <div className="relative overflow-hidden rounded-xl mb-6 group">
                <img
                  src={edu.image}
                  alt={edu.name}
                  className="w-full h-56 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* College Info */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  {edu.name}
                </h3>
                <p className="text-muted-foreground text-sm">{edu.branch}</p>
                <p className="text-sm font-medium text-primary">{edu.year}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
