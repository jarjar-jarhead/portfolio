import React from 'react';
import styles from './About.module.css';

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.container}>
        <div className={styles.info}>
          <p>Hi there! I specialize in modern web development frameworks and tech ecosystems.</p>
          <h3>Languages</h3>
          <p>English, Filipino</p>
        </div>
        <div className={styles.experience}>
          <h3>Experience & Internships</h3>
          <div className={styles.timelineItem}>
            <h4>Intern Role</h4>
            <p className={styles.company}>Company Name</p>
            <p className={styles.details}>Briefly describe your top achievements or role here.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;