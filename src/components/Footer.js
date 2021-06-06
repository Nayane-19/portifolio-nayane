import React from "react";
import { Link } from "react-router-dom";
import '../styles/footer.css'
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-menu">
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/About">
          <p>Sobre mim</p>
        </Link>
        <Link to="/Projetos">
          <p>Projetos</p>
        </Link>
        <Link to="/Contato">
          <p>Contato</p>
        </Link>
      </div>
      <div className="footer-link">
        <a
          href="https://github.com/Nayane-19"
          aria-label="Github"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/nayane-menezes-dev-eng/"
          aria-label="Linkedin"
        >
          <FaLinkedin />
        </a>
      </div>
    </div>
  );
}

export default Footer;
