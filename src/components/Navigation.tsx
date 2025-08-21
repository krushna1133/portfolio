import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X, Github, Linkedin, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    // Initial nav animation
    gsap.fromTo(
      navRef.current,
      {
        y: -100,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay: 3.5,
        ease: "power2.out",
      }
    );
  }, []);
  useEffect(() => {
    if (isOpen && menuRef.current) {
      gsap.fromTo(
        menuRef.current,
        {
          x: "100%",
          opacity: 0,
        },
        {
          x: "0%",
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
        }
      );
    }
  }, [isOpen]);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
    setIsOpen(false);
  };
  const navItems = [
    {
      label: "Home",
      id: "hero",
    },
    {
      label: "About",
      id: "about",
    },
    {
      label: "Projects",
      id: "projects",
    },
    {
      label: "Contact",
      id: "contact",
    },
  ];
  return (
    <>
      {/* Desktop Navigation */}
      <nav ref={navRef} className="fixed top-0 left-0 right-0 z-40 p-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div
            className="text-2xl font-bold gradient-text cursor-pointer"
            onClick={() => scrollToSection("hero")}
          >
            RK
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium"
              >
                {item.label}
              </button>
            ))}

            {/* Social Icons */}
            <div className="flex items-center space-x-4 ml-8">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <FaWhatsapp size={20} />
              </a>
            </div>

            {/* Hire Me Button */}
            <a
              href="https://wa.me/919623221020?text=Hi%20Krushna"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="neon-button flex items-center gap-2">
                <FaWhatsapp size={20} className="text-green-500" />
                Let’s Talk
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-foreground p-2"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

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
              {/* Mobile Menu Items */}
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

              {/* Mobile Social Icons */}
              <div className="flex space-x-6 mt-8 pt-8 border-t border-border">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Github size={24} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>

              {/* Mobile Hire Me Button */}
              <button className="neon-button w-full mt-8">Hire Me</button>
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default Navigation;
