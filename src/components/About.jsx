import {
  FaLaptopCode,
  FaCode,
  FaGraduationCap,
  FaRocket,
} from "react-icons/fa";

const About = () => {
  return (
    <section className="about section" id="about">

      <div className="section-title">
        <h2>About Me</h2>
        <p>Get to know me</p>
      </div>

      <div className="about-container">

        {/* Left Side */}

        <div className="about-content">

          <h3>Who am I?</h3>

          <p>
            Hello! I'm <strong>Sainabath Zahira</strong>, an aspiring MERN Stack
            Developer from Kasaragod, Kerala.
          </p>

          <p>
            I enjoy creating responsive and user-friendly web applications
            using React.js, Express.js, Node.js, and MongoDB.
          </p>

          <p>
            My goal is to continuously improve my development skills and build
            modern web applications while gaining real-world experience through
            internship opportunities.
          </p>

        </div>

        {/* Right Side */}

        <div className="about-cards">

          <div className="about-card">

            <FaLaptopCode className="about-icon" />

            <h4>Projects</h4>

            <p>3+ Completed Projects</p>

          </div>

          <div className="about-card">

            <FaCode className="about-icon" />

            <h4>Tech Stack</h4>

            <p>React, Node.js, Express & MongoDB</p>

          </div>

          <div className="about-card">

            <FaGraduationCap className="about-icon" />

            <h4>Education</h4>

            <p>Plus Two (Commerce with Computer Application)</p>

          </div>

          <div className="about-card">

            <FaRocket className="about-icon" />

            <h4>Career Goal</h4>

            <p>Seeking MERN Stack Internship</p>

          </div>

        </div>

      </div>

    </section>
  );
};

export default About;