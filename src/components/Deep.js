import { motion } from "framer-motion";
import Link from "next/link";

const Deep = () => {
  return (
    <section className="h-screen flex flex-col items-center justify-center text-center">
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1 className="text-5xl font-bold">Hi, I&apos;m Thanmai Patha</h1>
        <p className="text-xl mt-4">Full Stack Developer | MERN | Junior Software Engineer</p>
        <Link href="/projects">
          <span className="mt-6 inline-block bg-blue-500 text-white py-2 px-4 rounded cursor-pointer">
            View My Work
          </span>
        </Link>
      </motion.div>
    </section>
  );
};

export default Deep;
