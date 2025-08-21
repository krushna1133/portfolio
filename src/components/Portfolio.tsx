import { useEffect, useState } from "react";
import Preloader from "./Preloader";
import Navigation from "./Navigation";
import HeroSection from "./HeroSection";
import AboutSection from "./AboutSection";
import ProjectsSection from "./ProjectsSection";
import ContactSection from "./ContactSection";
import Footer from "./Footer";
import Education from "./Education";
import Experience from "./Experience";

const Portfolio: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const handlePreloaderComplete = (): void => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Block scroll while loading
    document.body.style.overflow = isLoading ? "hidden" : "unset";

    return () => {
      document.body.style.overflow = "unset"; // Cleanup
    };
  }, [isLoading]);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Preloader */}
      {isLoading && <Preloader onComplete={handlePreloaderComplete} />}

      {/* Main Content */}
      <div
        className={`transition-opacity duration-1000 ${
          isLoading ? "opacity-0 pointer-events-none" : "opacity-100"
        }`}
      >
        <Navigation />
        <main>
          <HeroSection />
          <AboutSection />
          <ProjectsSection />
          <Education />
          <Experience />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Portfolio;
