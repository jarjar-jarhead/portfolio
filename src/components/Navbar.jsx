import React from "react";
import styles from "./Navbar.module.css";

function Navbar() {
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

      <button className={styles.resumeBtn}>Resume</button>
    </nav>
  );
}

export default Navbar;
