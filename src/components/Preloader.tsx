import { useEffect, useRef } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onComplete: () => void;
}

const Preloader = ({ onComplete }: PreloaderProps) => {
  const progressBarRef = useRef<HTMLDivElement>(null);
  const preloaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set(logoRef.current, { opacity: 0, scale: 0.8 });
    gsap.set(progressBarRef.current, { width: "0%" });

    // Animate logo appearance
    tl.to(logoRef.current, {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power2.out",
    })

      // Animate progress bar
      .to(
        progressBarRef.current,
        {
          width: "100%",
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.3"
      )

      // Fade out preloader
      .to(
        preloaderRef.current,
        {
          opacity: 0,
          scale: 0.9,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: () => {
            onComplete();
          },
        },
        "+=0.3"
      );
  }, [onComplete]);

  return (
    <div ref={preloaderRef} className="preloader">
      <div className="flex flex-col items-center space-y-8">
        {/* Logo/Name */}
        <div ref={logoRef} className="text-6xl font-bold gradient-text">
          Krushna Rathod
        </div>

        {/* Subtitle */}
        <div className="text-lg text-muted-foreground font-light">
          UI/UX Designer and Fontend Developer
        </div>

        {/* Progress Bar Container */}
        <div className="w-80 h-1 bg-muted rounded-full overflow-hidden">
          <div ref={progressBarRef} className="progress-bar h-full" />
        </div>

        {/* Loading dots */}
        <div className="flex space-x-2">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className="w-2 h-2 bg-primary rounded-full animate-pulse"
              style={{
                animationDelay: `${i * 0.2}s`,
                animationDuration: "1s",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Preloader;
