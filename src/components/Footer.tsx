import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);
const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer slide up animation
      gsap.fromTo(
        footerRef.current,
        {
          y: 60,
          opacity: 0,
          filter: "blur(10px)",
        },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
          },
        }
      );

      // Floating particles animation
      gsap.to(".particle", {
        y: -20,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
        stagger: {
          amount: 2,
          from: "random",
        },
      });

      // Social icons hover animations
      const socialIcons = document.querySelectorAll(".social-icon");
      socialIcons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
          gsap.to(icon, {
            scale: 1.2,
            rotation: 360,
            duration: 0.3,
            ease: "power2.out",
          });
        });
        icon.addEventListener("mouseleave", () => {
          gsap.to(icon, {
            scale: 1,
            rotation: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });
    return () => ctx.revert();
  }, []);
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const navLinks = [
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
    <footer
      ref={footerRef}
      className="relative py-16 border-t border-border/50 bg-gradient-to-t from-background to-background/50 overflow-hidden"
    >
      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {Array.from({
          length: 20,
        }).map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold gradient-text">RK</h3>
              <p className="text-muted-foreground leading-relaxed">
                Crafting digital experiences that inspire and engage through
                innovative design and cutting-edge technology.
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4">
              <a
                href="https://github.com/krushna1133"
                className="social-icon p-3 glass-card rounded-xl text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/krushna-rathod0077/"
                className="social-icon p-3 glass-card rounded-xl text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:krushnarathod0077@gmail.com"
                className="social-icon p-3 glass-card rounded-xl text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
              </a>
              <a
                href="https://wa.me/919623221020?text=>Hi%20Krushna"
                target="_blank"
                rel="noopener noreferrer"
                className="social-icon p-3 glass-card rounded-xl text-muted-foreground hover:text-green-500 transition-colors"
              >
                <FaWhatsapp size={24} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="space-y-3">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-lg font-semibold">Get In Touch</h4>
            <div className="space-y-3 text-muted-foreground">
              <p>krushnarathod0077@gmail.com</p>
              <p>+91 9623221020</p>
              <p>Nagpur, India</p>
            </div>

            {/* Status */}
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm text-green-400 font-medium">
                Available for Work
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground flex items-center space-x-1">
              <span>© 2024 Made with</span>
              <Heart size={14} className="text-red-400 animate-pulse" />
              <span>by Krushna Rathod</span>
            </p>

            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-primary transition-colors">
                Privacy
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Terms
              </a>
              <a href="#" className="hover:text-primary transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
