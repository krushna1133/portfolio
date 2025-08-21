import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project2.png";
import project3 from "@/assets/project3.png";
import project4 from "@/assets/project4.png";
import project5 from "@/assets/project5.png";
import project6 from "@/assets/project6.png";
// import other images as needed

export const projects = [
  {
    id: 1,
    title: "Grainly UI/UX",
    description:
      "Advanced 3D gaming interface with real-time statistics and immersive user experience.",
    image: project1,
    tech: ["Figma", "Three.js", "GSAP", "WebGL"],
    liveUrl: "https://example.com/grainly",
    githubUrl: "https://github.com/yourrepo/grainly",
  },
  {
    id: 2,
    title: "E-Commerce Platform",
    description:
      "Modern shopping experience with AR product preview and seamless checkout flow.",
    image: project2,
    tech: ["Next.js", "Stripe", "Framer", "Prisma"],
    liveUrl: "https://example.com/ecommerce",
    githubUrl: "https://github.com/yourrepo/ecommerce",
  },
  {
    id: 3,
    title: "Analytics Dashboard",
    description:
      "Real-time data visualization with interactive charts and predictive analytics.",
    image: project3,
    tech: ["Vue.js", "D3.js", "Node.js", "MongoDB"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "3D Portfolio Site",
    description:
      "Interactive portfolio showcasing creative projects with immersive 3D navigation.",
    image: project4,
    tech: ["React", "Spline", "GSAP", "Locomotive"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "Social Media App",
    description:
      "Modern social platform with real-time messaging and story features.",
    image: project5,
    tech: ["React Native", "Socket.io", "Express", "PostgreSQL"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: 6,
    title: "Crypto Trading Platform",
    description:
      "Secure trading interface with real-time charts and portfolio management.",
    image: project6,
    tech: ["Angular", "Chart.js", "WebSocket", "Redis"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
