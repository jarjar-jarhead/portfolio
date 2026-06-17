import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const handleResumeClick = () => {
    // Looks directly inside your public/ folder for resume.pdf
    window.open("/resume.pdf", "_blank", "noopener,noreferrer");
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        NocturneJake<span>.</span>
      </div>

      <ul className={styles.navLinks}>
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#certifications">Certs</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <button className={styles.resumeBtn} onClick={handleResumeClick}>
        Resume
      </button>
    </nav>
  );
}

export default Navbar;