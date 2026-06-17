import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  // Hardcoded temporary array to display projects cleanly
  const myProjects = [
    {
      title: "Project One",
      desc: "A cool web application built with modern tech.",
      tools: ["React", "Firebase"],
    },
    {
      title: "Project Two",
      desc: "Another platform solving real-world problems.",
      tools: ["Java", "SQL"],
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Featured Projects</h2>
      <div className={styles.grid}>
        {myProjects.map((project, index) => (
          <div key={index} className={styles.card}>
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <div className={styles.tools}>
              {project.tools.map((tool, idx) => (
                <span key={idx}>{tool}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
