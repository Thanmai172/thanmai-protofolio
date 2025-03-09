import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed w-full top-0 flex justify-between items-center px-8 py-4 bg-black/50 backdrop-blur-md text-white shadow-lg">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-primary">Thanmai</h1>

      {/* Navigation Links */}
      <div className="flex space-x-8 text-lg font-medium">
        <Link href="#about" className="hover:text-highlight transition">
          About
        </Link>
        <Link href="#projects" className="hover:text-highlight transition">
          Projects
        </Link>
        <Link href="#contact" className="hover:text-highlight transition">
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
