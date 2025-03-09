import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 flex justify-between items-center p-4 bg-background text-white z-50">
      <h1 className="text-2xl font-bold text-primary">Thanmai</h1>
      <div className="space-x-6">
        <Link href="#about">About</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
