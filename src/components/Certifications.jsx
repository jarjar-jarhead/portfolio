import React from 'react';
import styles from './Certifications.module.css';

function Certifications() {
  return (
    <section id="certifications" className={styles.certsSection}>
      <h2 className={styles.sectionTitle}>Certifications</h2>
      <ul className={styles.certList}>
        <li className={styles.certItem}>
          <span className={styles.bullet}>⚡</span> 
          <div>
            <strong>Certificate Title Name</strong> — Issuing Organization (Year)
          </div>
        </li>
      </ul>
    </section>
  );
}

export default Certifications;