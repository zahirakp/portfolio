import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaGithub,
} from "react-icons/fa";

import { SiExpress, SiMongodb, SiVercel, SiRender } from "react-icons/si";

const Skills = () => {
  const skills = [
    {
      icon: <FaHtml5 />,
      title: "HTML5",
      description: "Semantic and responsive web structure.",
    },
    {
      icon: <FaCss3Alt />,
      title: "CSS3",
      description: "Modern layouts, animations and responsive design.",
    },
    {
      icon: <FaJs />,
      title: "JavaScript",
      description: "ES6+, DOM manipulation and modern JavaScript.",
    },
    {
      icon: <FaReact />,
      title: "React.js",
      description: "Component-based frontend development.",
    },
    {
      icon: <FaBootstrap />,
      title: "Bootstrap",
      description: "Responsive UI development.",
    },
    {
      icon: <FaNodeJs />,
      title: "Node.js",
      description: "Backend development with JavaScript.",
    },
    {
      icon: <SiExpress />,
      title: "Express.js",
      description: "REST API development.",
    },
    {
      icon: <SiMongodb />,
      title: "MongoDB",
      description: "NoSQL database management.",
    },
    {
      icon: <FaGithub />,
      title: "GitHub",
      description: "Version control and project hosting.",
    },
    {
      icon: <SiVercel />,
      title: "Vercel",
      description: "Frontend deployment platform.",
    },
    {
      icon: <SiRender />,
      title: "Render",
      description: "Backend deployment platform.",
    },
  ];

  return (
    <section className="skills section" id="skills">

      <div className="section-title">
        <h2>Technical Skills</h2>
        <p>Technologies I work with</p>
      </div>

      <div className="skills-container">

        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.title}</h3>

            <p>{skill.description}</p>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Skills;