import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "ZyraCart",
      description:
        "A MERN Stack women's fashion e-commerce website with a responsive interface and modern shopping experience.",
      technologies: "React.js • Express.js • Node.js • MongoDB",
      github: "https://github.com/zahirakp/zyraCart",
      live: "https://zyra-cart.vercel.app/",
    },
    {
      title: "GreenWander",
      description:
        "A modern and responsive travel agency website developed using React.",
      technologies: "React.js • CSS • JavaScript",
      github: "https://github.com/zahirakp/GreenWander",
      live: "https://green-wander.vercel.app/",
    },
    {
      title: "My Todo App",
      description:
        "A full-stack To-Do application with CRUD functionality and backend integration.",
      technologies: "React.js • Express.js • MongoDB",
      github: "https://github.com/zahirakp/my-todo-app",
      live: "https://my-todo-app-eight-sepia.vercel.app/",
    },
  ];

  return (
    <section className="projects section" id="projects">

      <div className="section-title">
        <h2>My Projects</h2>
        <p>Some of my recent work</p>
      </div>

      <div className="projects-container">

        {projects.map((project, index) => (
          <div className="project-card" key={index}>


            <div className="project-content">

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <p className="project-tech">
                {project.technologies}
              </p>

              <div className="project-buttons">

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn"
                >
                  <FaGithub />
                  GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="project-btn live-btn"
                >
                  <FaExternalLinkAlt />
                  Live Demo
                </a>

              </div>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Projects;