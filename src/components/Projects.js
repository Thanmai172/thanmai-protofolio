const Projects = () => {
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
  
    return (
      <section className="p-10">
        <h2 className="text-3xl font-bold text-center">Projects</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={index} className="p-4 border rounded shadow-lg">
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="mt-2">{project.description}</p>
              <a href={project.link} className="text-blue-500 mt-2 block">View Project</a>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Projects;
  