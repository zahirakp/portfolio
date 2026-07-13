import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
} from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <a href="#home" className="footer-logo">
          Zahira<span>.</span>
        </a>

        <p className="footer-role">
          Aspiring MERN Stack Developer
        </p>

        <div className="footer-social">

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

        <p className="footer-copy">
          Designed & Developed with{" "}
          <FaHeart className="heart-icon" /> by
          <strong> Sainabath Zahira</strong>
        </p>

        <p className="footer-year">
          © {year} All Rights Reserved.
        </p>

        <a href="#home" className="scroll-top">

          <FaArrowUp />

        </a>

      </div>

    </footer>
  );
};

export default Footer;