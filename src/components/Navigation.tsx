import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { User, Monitor, Briefcase } from "lucide-react";
import { motion } from "framer-motion";

const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const [showStars, setShowStars] = useState(false);

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleProfileClick = () => {
    scrollToSection("hero");
    setShowStars(true);
    setTimeout(() => setShowStars(false), 1000); // Hide stars after 1s
  };

  const starPositions = [
    { x: -30, y: -30 },
    { x: 40, y: -20 },
    { x: -20, y: 40 },
    { x: 30, y: 30 },
    { x: -40, y: 10 },
  ];

  return (
    <div
      className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-0"
      ref={navRef}
    >
      <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-neutral-900/70 backdrop-blur-3xl rounded-full px-3 sm:px-5 py-2 border border-white/10 shadow-lg max-w-fit mx-auto relative">
        {/* Avatar with stars */}
        <div className="relative">
          <img
            src="/src/assets/profile.png"
            alt="profile"
            onClick={handleProfileClick}
            className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 cursor-pointer hover:scale-105 transition"
          />

          {/* Stars moving outward */}
          {showStars &&
            starPositions.map((pos, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2 w-2 h-2 bg-yellow-400 rounded-full"
                initial={{ x: 0, y: 0, opacity: 1, scale: 1 }}
                animate={{ x: pos.x, y: pos.y, opacity: 0, scale: 1.5 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              />
            ))}
        </div>

        {/* Nav Icons */}
        <div className="flex items-center gap-2 sm:gap-3 px-1 sm:px-2">
          <button
            onClick={() => scrollToSection("about")}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-neutral-800/70 hover:bg-neutral-700 transition"
          >
            <User size={16} className="sm:size-18" />
          </button>

          <button
            onClick={() => scrollToSection("projects")}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-neutral-800/70 hover:bg-neutral-700 transition"
          >
            <Monitor size={16} className="sm:size-18" />
          </button>

          <button
            onClick={() => scrollToSection("experience")}
            className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full bg-neutral-800/70 hover:bg-neutral-700 transition"
          >
            <Briefcase size={16} className="sm:size-18" />
          </button>
        </div>

        {/* Divider */}
        <div className="w-px h-6 bg-white/20 hidden sm:block"></div>

        {/* Hire Me Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => scrollToSection("contact")}
          className="bg-white text-black font-medium px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-1 sm:gap-2 shadow-md text-sm sm:text-base whitespace-nowrap"
        >
          Hire me <span className="hidden sm:inline">👋</span>
        </motion.button>
      </div>
    </div>
  );
};

export default Navigation;
