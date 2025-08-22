// components/ExperienceWithGallery.jsx
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import profile from "/assets/profile.png"; // replace with real images

const experiences = [
  {
    title: "Pickgo Courier App",
    date: "May 2025 - Present",
    role: "UIUX Designer · Remote",
  },
  {
    title: "Ubiti Fiat App",
    date: "April 2025 - Present",
    role: "UIUX Designer · Remote",
  },
  {
    title: "Puxpay Fiat App",
    date: "April 2025 - Present",
    role: "UIUX Designer · Remote",
  },
  {
    title: "Pgold Fintech App",
    date: "Dec 2024 – March 2025",
    role: "UIUX Designer · Remote",
  },
  {
    title: "Cabz UK Ride Service App",
    date: "Dec 2024 – Feb 2025",
    role: "UIUX Designer · Remote",
  },
];

// Replace with your real images
const galleryImages = [profile, profile, profile, profile, profile];

export default function Experience() {
  return (
    <section id="experience" className="py-16 px-6 bg-black text-white">
      {/* Make left smaller, right bigger */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-12">
        {/* LEFT COLUMN - Experience Timeline */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-white">
            Experience <span className="text-gray-400">03 Years</span>
          </h2>

          <div className="relative border-l border-gray-700 pl-8">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 relative group">
                {/* Timeline Dot - CENTERED */}
                <span
                  className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-5 h-5 
                         bg-gray-700 rounded-full border-2 border-gray-900 
                         group-hover:border-green-400 transition"
                ></span>

                {/* Card */}
                <Card className="bg-gradient-to-r from-[#111] to-gray-900 border border-gray-800 shadow-md min-h-[100px] flex transition group-hover:border-green-400">
                  <CardContent className="p-4 flex flex-col justify-center">
                    <h3 className="text-lg font-semibold text-white">
                      {exp.title}
                    </h3>
                    <p className="text-sm text-gray-400">{exp.date}</p>
                    <p className="text-sm text-gray-500">{exp.role}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN - Infinite Vertical Galleries */}
        <div className="grid grid-cols-3 gap-4 overflow-hidden rounded-2xl h-[600px] ">
          {[0, 1, 2].map((col) => (
            <motion.div
              key={col}
              className="flex flex-col gap-4"
              animate={{
                y: col === 1 ? ["-50%", "0%"] : ["0%", "-50%"], // middle column downward, others upward
              }}
              transition={{
                repeat: Infinity,
                duration: col % 2 === 0 ? 25 : 35, // alternate speeds
                ease: "linear",
              }}
            >
              {[...galleryImages, ...galleryImages].map((src, i) => {
                // Define different heights for images per column
                let imgHeight;
                if (col === 0) imgHeight = i % 2 === 0 ? "h-80" : "h-56";
                else if (col === 1) imgHeight = i % 2 === 0 ? "h-72" : "h-60";
                else imgHeight = i % 2 === 0 ? "h-48" : "h-64";

                return (
                  <img
                    key={`${col}-${i}`}
                    src={src}
                    alt={`gallery-${col}-${i}`}
                    className={`w-full object-cover rounded-xl ${imgHeight}`}
                  />
                );
              })}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
