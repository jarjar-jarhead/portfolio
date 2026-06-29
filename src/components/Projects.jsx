import React, { useState } from "react";
import styles from "./Projects.module.css";

function Projects() {
  // We only need state for local asset models now (like images/GIFs)
  const [activeImage, setActiveImage] = useState(null);

  const myProjects = [
    {
      title: "SDPT Learn",
      desc: "An interactive learning management web application featuring gamified learning system, structured roadmaps, progress tracking, and dynamic quiz features for students.",
      tools: ["React", "Firebase", "CSS", "Javascript", "JSON"],
      action: { type: "link", url: "https://youtu.be/w18Ha1udr6Q", label: "[ Watch Demo ]" }
    },
    {
      title: "Student Fitness Profile System",
      desc: "A secure web platform built to track physical assessments, manage fitness metrics, and generate comprehensive health profiles for students. (Website takes a minute to load in free tier. Teacher UID and pass is Teach and password123",
      tools: ["Python", "Django", "SQL"],
      // Update this url later with your unlisted YouTube link once recorded!
      action: { type: "link", url: "https://zonecheck.onrender.com/", label: "[ View Project ]" }
    },
    {
      title: "E-Commerce Catalogue System",
      desc: "An interactive digital catalog featuring a sleek front-end layout and integrated 3D product previews for seamless motorcycle parts exploration.",
      tools: ["Figma", "Prototyping"],
      // Changed to the clean prototype link architecture
      action: { type: "link", url: "https://www.figma.com/design/faj59z9SbLf8qimhKd6v4J/SAD-UI-DESIGN--Copy-?node-id=0-1&m=dev", label: "[ View Prototype ]" }
    },
    {
      title: "Foxbyte Note App",
      desc: "A lightweight, responsive note-taking application designed for efficient markdown editing, real-time saving, and clean workspace organization.",
      tools: ["React", "JavaScript", "CSS Modules"],
      // Keeps an in-app popup workflow because it uses a local project asset image/GIF
      action: { type: "modal", url: "/foxbyte-preview.gif", label: "[ View Showcase ]" }
    },
    {
      title: "Olympus 2D",
      desc: "An action-packed 2D tower defense game featuring strategic lane placement, dynamic enemy wave scaling, and custom upgrade mechanics.",
      tools: ["Unity", "C#", "Game Design"],
      action: { type: "link", url: "https://sites.google.com/bulsu.edu.ph/mgd-24-25/project-showcase-24-25/bsit-3h-g1/g6", label: "[ View Project Hub ]" }
    },
  ];

  return (
    <section id="projects" className={styles.projectsSection}>
      <h2 className={styles.sectionTitle}>Featured Projects</h2>
      <div className={styles.grid}>
        {myProjects.map((project, index) => (
          <div key={index} className={styles.card}>
            <div>
              <h3>{project.title}</h3>
              <p>{project.desc}</p>
              <div className={styles.tools}>
                {project.tools.map((tool, idx) => (
                  <span key={idx}>{tool}</span>
                ))}
              </div>
            </div>
            
            {/* Contextual Action Buttons */}
            <div className={styles.actionContainer}>
              {project.action.type === "link" ? (
                <a 
                  href={project.action.url} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.demoLink}
                >
                  {project.action.label}
                </a>
              ) : (
                <button 
                  className={styles.demoBtn} 
                  onClick={() => setActiveImage({ src: project.action.url, title: project.title })}
                >
                  {project.action.label}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Simplified Image Showcase Overlay Modal */}
      {activeImage && (
        <div className={styles.modalOverlay} onClick={() => setActiveImage(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{activeImage.title}</h3>
              <button className={styles.closeBtn} onClick={() => setActiveImage(null)}>✕ Close</button>
            </div>
            <div className={styles.mediaContainer}>
              <img src={activeImage.src} alt={activeImage.title} className={styles.responsiveImg} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;