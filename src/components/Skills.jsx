import React from "react";
import styles from "./Skills.module.css";

function Skills() {
  // Categorized skills matching your backend, frontend, and enterprise toolkit
  const skillCategories = [
    {
      category: "Enterprise Systems",
      tags: ["SAP ABAP", "ABAP Dictionary", "Internal Tables", "Modularization", "Clean Core Architecture"],
    },
    {
      category: "Backend & Databases",
      tags: ["Python", "Django", "SQL", "Firebase Runtime", "Java", "C++", "C#"],
    },
    {
      category: "Frontend Web Infrastructure",
      tags: ["React.js", "Vite Ecosystem", "JavaScript (ES6+)", "CSS Modules", "HTML5 Layouts"],
    },
    {
      category: "Design & Interactive Media",
      tags: ["Figma UI/UX Design", "Unity 2D/3D Engine", "Interactive Prototyping", "Canva Graphics"],
    },
  ];

  return (
    <section id="skills" className={styles.skillsSection}>
      <h2 className={styles.sectionTitle} data-text="System Proficiencies">
        System Proficiencies
      </h2>
      
      <div className={styles.terminalContainer}>
        <div className={styles.terminalHeader}>
          <span className={styles.terminalDot}></span>
          <span className={styles.terminalDot}></span>
          <span className={styles.terminalDot}></span>
          <span className={styles.terminalTitle}>core_capabilities.sh</span>
        </div>

        <div className={styles.grid}>
          {skillCategories.map((group, index) => (
            <div key={index} className={styles.categoryCard}>
              <h3 className={styles.categoryTitle}>
                <span className={styles.promptArrow}>&gt;</span> {group.category}
              </h3>
              <div className={styles.tagCloud}>
                {group.tags.map((tag, idx) => (
                  <span key={idx} className={styles.skillTag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;