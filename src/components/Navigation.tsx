import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import {
  User,
  Monitor,
  Briefcase,
  Menu,
  X,
  Github,
  Linkedin,
  Mail,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navigation = () => {
  const navRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [showStars, setShowStars] = useState(false);

  const starPositions = [
    { x: -30, y: -30 },
    { x: 40, y: -20 },
    { x: -20, y: 40 },
    { x: 30, y: 30 },
    { x: -40, y: 10 },
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  const handleProfileClick = () => {
    scrollToSection("hero");
    setShowStars(true);
    setTimeout(() => setShowStars(false), 1000);
  };

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "About", id: "about" },
    { label: "Projects", id: "projects" },
    { label: "Contact", id: "contact" },
  ];

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power2.out", delay: 1 }
    );
  }, []);

  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 0.5, ease: "power2.out" }
      );
    }
  }, [isOpen]);

  return (
    <>
      <div
        ref={navRef}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full px-4 sm:px-0"
      >
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 bg-neutral-900/70 backdrop-blur-3xl rounded-full px-3 sm:px-5 py-2 border border-white/10 shadow-lg max-w-fit mx-auto relative">
          {/* Avatar with Stars */}
          <div className="relative">
            <img
              src="/src/assets/profile.png"
              alt="profile"
              onClick={handleProfileClick}
              className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border border-white/20 cursor-pointer hover:scale-105 transition"
            />
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
              className="nav-icon"
            >
              <User size={16} />
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="nav-icon"
            >
              <Monitor size={16} />
            </button>
            <button
              onClick={() => scrollToSection("experience")}
              className="nav-icon"
            >
              <Briefcase size={16} />
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
            onClick={() => setIsOpen(false)}
          />
          <div
            ref={menuRef}
            className="fixed top-0 right-0 h-full w-80 bg-background z-50 md:hidden glass-card"
          >
            <div className="p-6 pt-20">
              <div className="space-y-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-lg font-medium text-foreground hover:text-primary transition-colors duration-300"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
              <div className="flex space-x-6 mt-8 pt-8 border-t border-border">
                <Github size={24} />
                <Linkedin size={24} />
                <Mail size={24} />
                <FaWhatsapp size={24} />
              </div>
              <button className="neon-button w-full mt-8">Hire Me</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navigation;
