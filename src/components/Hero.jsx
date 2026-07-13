import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaEnvelope,
  FaArrowDown,
} from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero" id="home">

      <div className="hero-container">

        {/* Left Side */}
        <div className="hero-content">

          <p className="hero-subtitle">
            👋 Hello, I'm
          </p>

          <h1 className="hero-title">
            Sainabath <span>Zahira</span>
          </h1>

          <h2 className="hero-role">
            Aspiring MERN Stack Developer
          </h2>

          <p className="hero-description">
            Passionate about building responsive and user-friendly web
            applications using React.js, Express.js, Node.js, and MongoDB.
            Currently seeking internship opportunities to grow as a Full Stack
            Developer and contribute to real-world projects.
          </p>

          <div className="hero-buttons">

            <a
              href="/resume.pdf"
              download
              className="primary-btn"
            >
              <FaDownload />
              Download Resume
            </a>

            <a
              href="#contact"
              className="secondary-btn"
            >
              <FaEnvelope />
              Contact Me
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://github.com/zahirakp"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
            </a>

             {/* <a
              href="#"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
            </a> */}

          </div>

        </div>

        {/* Right Side */}

        <div className="hero-image">

          <div className="profile-card">

            <img
              src="/images/profile.jpg"
              alt="Sainabath Zahira"
              className="profile-image"
            />

          </div>

        </div>

      </div>

      {/* Scroll Down */}

      <a href="#about" className="scroll-down">

        <FaArrowDown />

      </a>

    </section>
  );
};

export default Hero;