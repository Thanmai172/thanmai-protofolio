import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Contact() {
  return (
    <div>
      <Navbar />
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center">Contact Me</h2>
        <p className="text-center mt-2">Let&apos;s connect! Reach out to me at:</p>
        <div className="text-center mt-4">
          <p>Email: <a href="mailto:thanmai172@gmail.com" className="text-blue-500">thanmai172@gmail.com</a></p>
          <p>LinkedIn: <a href="https://linkedin.com/in/thanmai-patha" className="text-blue-500">thanmai-patha</a></p>
          <p>GitHub: <a href="https://github.com/thanmaipatha" className="text-blue-500">thanmaipatha</a></p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
