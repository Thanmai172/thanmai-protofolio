const Footer = () => {
  return (
    <footer className="text-center p-4 bg-gray-900 text-white mt-10">
      <p>&copy; {new Date().getFullYear()} Thanmai Patha. All rights reserved.</p>
      <div className="mt-2">
        <a href="https://linkedin.com/in/thanmai-patha" className="mx-2 text-primary">LinkedIn</a>
        <a href="https://github.com/thanmaipatha" className="mx-2 text-primary">GitHub</a>
      </div>
    </footer>
  );
};

export default Footer;
