import Navbar from "../components/Navbar";
import Deep from "../components/Deep";  // ✅ Correct Import
import About from "../components/About";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <Deep />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
