import Navbar from "../components/Navbar";
import Deep from "../components/Deep";  
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div className="relative min-h-screen text-foreground">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#020c1b]">
        {/* Radial Glow */}
        <div className="absolute top-1/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                        w-[600px] h-[600px] bg-[#233554] opacity-30 rounded-full blur-3xl"></div>
      </div>

      <Navbar />

      {/* Main Content */}
      <main className="relative flex flex-col gap-16">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
          className="relative"
        >
          <Deep />
        </motion.section>

        {/* About Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <About />
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1, delay: 0.4 }}
          className="relative"
        >
          <Projects />
        </motion.section>
      </main>

      <Footer />
    </div>
  );
}
