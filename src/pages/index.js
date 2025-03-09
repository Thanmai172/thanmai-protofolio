import Navbar from "../components/Navbar"; // Adjusted path
import Deep from "../components/Deep"; // Adjusted path
import Footer from "../components/Footer"; // Adjusted path

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Deep />
      </main>
      <Footer />
    </div>
  );
}
