import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function About() {
  return (
    <div>
      <Navbar />
      <section className="p-10">
        <h2 className="text-3xl font-bold">About Me</h2>
        <p className="mt-4">
          I am a passionate Full Stack Developer specializing in the MERN stack.
          Currently working as a Junior Software Engineer at People Tech Group.
          I have experience in QML, C++, Python, React, and Node.js.
        </p>
      </section>
      <Footer />
    </div>
  );
}
