import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Education", link: "#education" },
    { name: "Certificate", link: "#certificate" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a href="#home" className="navbar-logo">
          Zahira<span>.</span>
        </a>

        {/* Desktop & Mobile Menu */}
        <nav className={menuOpen ? "navbar-menu active" : "navbar-menu"}>
          {navLinks.map((item) => (
            <a
              key={item.name}
              href={item.link}
              className="navbar-link"
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}

          <a
            href="https://github.com/zahirakp"
            target="_blank"
            rel="noreferrer"
            className="navbar-button"
          >
            GitHub
          </a>
        </nav>

        {/* Mobile Menu Icon */}
        <div
          className="navbar-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

      </div>
    </header>
  );
};

export default Navbar;