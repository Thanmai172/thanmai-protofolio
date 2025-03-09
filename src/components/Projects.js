const projects = [
  {
    title: "Tork Motors UI",
    description: "Developed an interactive UI for Tork Motors' e-bike dashboard using QML and C++.",
    link: "#",
  },
  {
    title: "JobHub & Explore",
    description: "A full-stack freelance marketplace built with MongoDB, Express, React, and Node.js.",
    link: "#",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-10 text-white">
      <h2 className="text-3xl font-bold text-primary">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {projects.map((project, index) => (
          <div key={index} className="p-4 border rounded shadow-lg bg-gray-800">
            <h3 className="text-xl font-semibold">{project.title}</h3>
            <p className="mt-2">{project.description}</p>
            <a href={project.link} className="text-primary mt-2 block">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
