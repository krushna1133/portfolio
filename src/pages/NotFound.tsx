import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="relative w-screen h-screen bg-black flex items-center justify-center overflow-hidden">
      {/* Background glow circles */}
      <div className="absolute w-96 h-96 bg-indigo-600/20 rounded-full blur-3xl -top-32 -left-32 animate-pulse"></div>
      <div className="absolute w-72 h-72 bg-pink-600/20 rounded-full blur-2xl -bottom-32 -right-20 animate-pulse"></div>

      {/* Glassmorphic Card */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
          scale: 1.03,
          boxShadow: "0 0 12px #FF00FF/50",
        }}
        transition={{ duration: 0.3 }}
        className="relative z-10 bg-gray-900/40 backdrop-blur-xl border border-gray-700/40 rounded-3xl p-12 text-center flex flex-col items-center gap-6 shadow-md max-w-md"
      >
        <h1 className="text-8xl font-extrabold text-white">404</h1>
        <h2 className="text-3xl font-semibold text-gray-200">Page Not Found</h2>
        <p className="text-gray-400 text-sm">
          Sorry, the page you are looking for does not exist.
        </p>
        <motion.a
          href="/"
          whileHover={{
            scale: 1.03,
            boxShadow: "0 0 8px #FF00FF/50",
          }}
          transition={{ duration: 0.3 }}
          className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-md text-white font-semibold shadow-md hover:bg-white/20 transition-all duration-300"
        >
          Return to Home
        </motion.a>
      </motion.div>
    </div>
  );
};

export default NotFound;
