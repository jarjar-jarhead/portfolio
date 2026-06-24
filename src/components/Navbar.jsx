import React, { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  // State to handle opening and closing the resume modal
  const [isResumeOpen, setIsResumeOpen] = useState(false);

  return (
    <>
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

        {/* Set state to true on click to reveal modal */}
        <button className={styles.resumeBtn} onClick={() => setIsResumeOpen(true)}>
          Resume
        </button>
      </nav>

      {/* The Pop-up Modal Container for Resume */}
      {isResumeOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsResumeOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={() => setIsResumeOpen(false)}>✕ Close</button>
            <iframe 
              src="/resume.pdf" 
              title="Resume Viewer" 
              className={styles.pdfViewer}
            />
          </div>
        </div>
      )}
    </>
  );
}

export default Navbar;