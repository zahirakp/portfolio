import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaMapMarkerAlt,
  FaDownload,
  FaWhatsapp,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="section-title">
        <h2>Contact Me</h2>
        <p>Let's connect and build something amazing together.</p>
      </div>

      <div className="contact-container">
        {/* Left Side */}
        <div className="contact-info">
          <div className="contact-card">
            <FaPhoneAlt className="contact-icon" />
            <div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+919447035660" className="email-link">
                  +91 9447035660
                </a>
              </p>
            </div>
          </div>

          <div className="contact-card">
            <FaEnvelope className="contact-icon" />
            <div>
              <h3>Email</h3>
              <p>
                <a
                  href="mailto:zahira7050@gmail.com"
                  className="email-link"
                >
                  zahira7050@gmail.com
                </a>
              </p>
            </div>
          </div>

          <div className="contact-card">
            <FaMapMarkerAlt className="contact-icon" />
            <div>
              <h3>Location</h3>
              <p>Kasaragod, Kerala, India</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="contact-links">
          <a
            href="https://github.com/zahirakp"
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://wa.me/919447035660?text=Hello%20Sainabath%20Zahira,%20I%20would%20like%20to%20connect%20with%20you."
            target="_blank"
            rel="noreferrer"
            className="contact-btn"
          >
            <FaWhatsapp />
            WhatsApp
          </a>

          <a
            href="/resume.pdf"
            download
            className="contact-btn"
          >
            <FaDownload />
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;