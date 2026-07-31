import React, { useState } from "react";
import styles from "./Navbar.module.css";

function Navbar() {
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  // Default to your general dev resume path
  const [selectedResume, setSelectedResume] = useState("/resume-dev.pdf");

  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.logo}>
          NocturneJake<span>.</span>
        </div>

        <ul className={styles.navLinks}>
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#certifications">Certs</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <button className={styles.resumeBtn} onClick={() => setIsResumeOpen(true)}>
          Resume
        </button>
      </nav>

      {/* Pop-up Modal Container for Dual Resumes */}
      {isResumeOpen && (
        <div className={styles.modalOverlay} onClick={() => setIsResumeOpen(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <div className={styles.resumeSwitchGroup}>
                <button
                  className={`${styles.switchBtn} ${selectedResume === "/resume-dev.pdf" ? styles.activeSwitch : ""}`}
                  onClick={() => setSelectedResume("/resume-dev.pdf")}
                >
                  [ Software Dev ]
                </button>
                <button
                  className={`${styles.switchBtn} ${selectedResume === "/resume-ai.pdf" ? styles.activeSwitch : ""}`}
                  onClick={() => setSelectedResume("/resume-ai.pdf")}
                >
                  [ AI / Data ]
                </button>
              </div>

              <button className={styles.closeBtn} onClick={() => setIsResumeOpen(false)}>
                ✕ Close
              </button>
            </div>

            <iframe
              src={selectedResume}
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