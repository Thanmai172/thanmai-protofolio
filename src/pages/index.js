import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Deep from "../components/Deep";
import Projects from "../components/Projects";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [activeSection, setActiveSection] = useState("deep");

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-[#0a192f] to-[#020c1b] text-foreground flex flex-col items-center">
      {/* Buttons for Navigation */}
      <div className="fixed top-4 flex gap-4 bg-black/50 p-3 rounded-lg shadow-lg backdrop-blur-md">
        {["deep", "projects", "navbar", "footer"].map((section) => (
          <button
            key={section}
            onClick={() => setActiveSection(section)}
            className={`px-4 py-2 rounded-md transition ${
              activeSection === section
                ? "bg-highlight text-black font-bold"
                : "bg-primary text-background hover:bg-highlight"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </div>

      {/* Smooth Component Transitions */}
      <main className="mt-20 w-full flex justify-center">
        <AnimatePresence mode="wait">
          {activeSection === "deep" && (
            <motion.div
              key="deep"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Deep />
            </motion.div>
          )}
          {activeSection === "projects" && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Projects />
            </motion.div>
          )}
          {activeSection === "navbar" && (
            <motion.div
              key="navbar"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Navbar />
            </motion.div>
          )}
          {activeSection === "footer" && (
            <motion.div
              key="footer"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
