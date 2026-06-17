import React from "react";
import styles from "./Projects.module.css";

function Projects() {
  // Hardcoded temporary array to display projects cleanly
  const myProjects = [
{
      title: "SDPT Learn",
      desc: "An interactive learning management web application featuring gamified learning system, structured roadmaps, progress tracking, and dynamic quiz features for students.",
      tools: ["React", "Firebase", "CSS", "Javascript", "JSON"],
    },
    {
      title: "Student Fitness Profile System",
      desc: "A secure web platform built to track physical assessments, manage fitness metrics, and generate comprehensive health profiles for students.",
      tools: ["Python", "Django", "SQL"],
    },
    {
      title: "E-Commerce Catalogue System",
      desc: "An interactive digital catalog featuring a sleek front-end layout and integrated 3D product previews for seamless motorcycle parts exploration.",
      tools: ["Figma", "Prototyping", ],
    },
    {
      title: "Foxbyte Note App",
      desc: "A lightweight, responsive note-taking application designed for efficient markdown editing, real-time saving, and clean workspace organization.",
      tools: ["React", "JavaScript", "CSS Modules"],
    },
    {
      title: "Olympus 2D",
      desc: "An action-packed 2D tower defense game featuring strategic lane placement, dynamic enemy wave scaling, and custom upgrade mechanics.",
      tools: ["Unity", "C#", "Game Design"],
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
