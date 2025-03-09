import Navbar from "../components/Navbar";
import Deep from "../components/Deep";  
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] to-[#020c1b]"></div>

      <Navbar />

      {/* Main Content */}
      <main className="relative flex flex-col gap-16">
        {/* Hero Section (Deep.js) */}
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        >
          <Deep />
        </motion.section>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          <About />
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Projects />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
