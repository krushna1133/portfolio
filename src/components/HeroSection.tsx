import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLButtonElement>(null);
  const splineRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = gsap.timeline({
      delay: 3.8,
    });

    // Initial states
    gsap.set([titleRef.current, subtitleRef.current, ctaRef.current], {
      opacity: 0,
      y: 50,
      filter: "blur(10px)",
    });
    gsap.set(splineRef.current, {
      opacity: 0,
      x: 100,
    });

    // Animate elements
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power2.out",
    })
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1,
          ease: "power2.out",
        },
        "-=0.8"
      )
      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .to(
        splineRef.current,
        {
          opacity: 1,
          x: 0,
          duration: 1.2,
          ease: "power2.out",
        },
        "-=1"
      );

    // Floating animation for background elements
    gsap.to(".floating-orb", {
      y: -20,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
      stagger: 0.5,
    });
  }, []);
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-purple-900/20" />

      {/* Floating Background Orbs */}
      <div className="absolute inset-0">
        <div className="floating-orb absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-xl" />
        <div className="floating-orb absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl" />
        <div className="floating-orb absolute bottom-32 left-1/4 w-28 h-28 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-xl" />
      </div>

      {/* Background Spline 3D */}
      <div ref={splineRef} className="absolute inset-0 w-full h-full">
        <iframe
          src="https://my.spline.design/orb-vPTY2jTUigZ49hF59d0wyxzw/"
          frameBorder="0"
          width="100%"
          height="100%"
          className="w-full h-full"
        />

        {/* Overlay to ensure text readability */}
        <div className="absolute inset-0 bg-background/30 backdrop-blur-[1px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col items-center justify-center text-center min-h-screen space-y-8">
          <h1
            ref={titleRef}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm <span className="gradient-text">Krushna Rathod</span>
            <br />
            UI/UX Designer
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl md:text-2xl text-muted-foreground font-light max-w-2xl"
          >
            Passionate UI/UX Designer & Developer with experience in LMS
            platforms, websites, and mobile apps. 
          </p>

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
      </div>
    </section>
  );
};
export default HeroSection;
