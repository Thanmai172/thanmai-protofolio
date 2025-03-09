import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Deep from "../components/Deep";
import Projects from "../components/Projects";

export default function Home() {
  const [activeSection, setActiveSection] = useState("deep");

  return (
    <div className="relative min-h-screen text-foreground bg-background-dark flex flex-col items-center">
      {/* Buttons for Navigation */}
      <div className="fixed top-4 flex gap-4 bg-black/50 p-3 rounded-lg">
        <button
          onClick={() => setActiveSection("deep")}
          className="px-4 py-2 rounded-md bg-primary text-background hover:bg-highlight transition"
        >
          Deep
        </button>
        <button
          onClick={() => setActiveSection("projects")}
          className="px-4 py-2 rounded-md bg-primary text-background hover:bg-highlight transition"
        >
          Projects
        </button>
        <button
          onClick={() => setActiveSection("navbar")}
          className="px-4 py-2 rounded-md bg-primary text-background hover:bg-highlight transition"
        >
          Navbar
        </button>
        <button
          onClick={() => setActiveSection("footer")}
          className="px-4 py-2 rounded-md bg-primary text-background hover:bg-highlight transition"
        >
          Footer
        </button>
      </div>

      {/* Conditionally Render Components */}
      <main className="mt-20 w-full flex justify-center">
        {activeSection === "deep" && <Deep />}
        {activeSection === "projects" && <Projects />}
        {activeSection === "navbar" && <Navbar />}
        {activeSection === "footer" && <Footer />}
      </main>
    </div>
  );
}
