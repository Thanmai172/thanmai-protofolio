const Footer = () => {
    return (
      <footer className="text-center p-4 bg-gray-900 text-white mt-10">
        <p>&copy; {new Date().getFullYear()} Thanmai Patha. All rights reserved.</p>
        <div className="mt-2">
          <a href="https://linkedin.com/in/thanmai-patha" target="_blank" rel="noopener noreferrer" className="mx-2">
            LinkedIn
          </a>
          <a href="https://github.com/thanmaipatha" target="_blank" rel="noopener noreferrer" className="mx-2">
            GitHub
          </a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  