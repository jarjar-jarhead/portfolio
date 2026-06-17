import React from "react";
import styles from "./About.module.css";

function About() {
  return (
    <section id="about" className={styles.aboutSection}>
      <h2 className={styles.sectionTitle}>About Me</h2>
      <div className={styles.container}>
        <div className={styles.info}>
          <p>
            Hi there! I specialize in modern web development frameworks and tech
            ecosystems, bringing a versatile skillset that bridges both web and
            enterprise systems. My core engineering capabilities include
            full-stack development using React Vite with Firebase backends, as
            well as robust backend architecture using Python Django and
            enterprise-level SAP ABAP. Beyond code, I can rapidly design
            creative prototypes in Canva and build immersive, interactive
            experiences through game development in Unity. This unique
            combination allows me to adapt quickly to diverse tech environments
            and translate complex requirements into polished, high-performance
            applications.
          </p>
          <h3>Languages</h3>
          <p>English, Filipino</p>
        </div>
        <div className={styles.experience}>
          <h3>Experience & Internships</h3>
          <div className={styles.timelineItem}>
            <h4>SAP ABAP Intern</h4>
            <p className={styles.company}>Accenture</p>
            <p className={styles.details}>
              • Ranked Top 4 among co-interns based on technical performance,
              final grading, and comprehensive case study evaluations by mentors
              and executive panelists.
              <br />
              <br />• Completed the intensive SAP ABAP Academy, gaining hands-on
              proficiency in Object-Oriented ABAP, data modeling, and business
              process frameworks on internal training environments (ALPS).
              <br />
              <br />• Developed and presented a hands-on case study to a panel
              of technical experts, passing the rigorous benchmark examination
              required for graduation and consultant certification tracks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
