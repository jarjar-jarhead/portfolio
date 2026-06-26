import React, { useState } from "react";
import styles from "./Projects.module.css";

function Projects() {
  // Track the active project object for the modal view (null = closed)
  const [activeProject, setActiveProject] = useState(null);

  const myProjects = [
    {
      title: "SDPT Learn",
      desc: "An interactive learning management web application featuring gamified learning system, structured roadmaps, progress tracking, and dynamic quiz features for students.",
      tools: ["React", "Firebase", "CSS", "Javascript", "JSON"],
      media: { type: "image", src: "https://youtu.be/w18Ha1udr6Q" } // placeholder path inside public/
    },
    {
      title: "Student Fitness Profile System",
      desc: "A secure web platform built to track physical assessments, manage fitness metrics, and generate comprehensive health profiles for students.",
      tools: ["Python", "Django", "SQL"],
      media: { type: "video", src: "https://www.youtube.com/embed/YOUR_VIDEO_ID" } // link for your walkthrough
    },
    {
      title: "E-Commerce Catalogue System",
      desc: "An interactive digital catalog featuring a sleek front-end layout and integrated 3D product previews for seamless motorcycle parts exploration.",
      tools: ["Figma", "Prototyping"],
      media: { type: "iframe", src: "https://www.figma.com/embed?embed_host=share&url=YOUR_FIGMA_URL" }
    },
    {
      title: "Foxbyte Note App",
      desc: "A lightweight, responsive note-taking application designed for efficient markdown editing, real-time saving, and clean workspace organization.",
      tools: ["React", "JavaScript", "CSS Modules"],
      media: { type: "image", src: "/foxbyte-preview.gif" } // supports animations
    },
    {
      title: "Olympus 2D",
      desc: "An action-packed 2D tower defense game featuring strategic lane placement, dynamic enemy wave scaling, and custom upgrade mechanics.",
      tools: ["Unity", "C#", "Game Design"],
      media: { type: "video", src: "https://www.youtube.com/embed/YOUR_VIDEO_ID" }
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
            
            {/* Action Trigger Button */}
            <button 
              className={styles.demoBtn} 
              onClick={() => setActiveProject(project)}
            >
              [ View Showcase ]
            </button>
          </div>
        ))}
      </div>

      {/* Dynamic Pop-up Modal */}
      {activeProject && (
        <div className={styles.modalOverlay} onClick={() => setActiveProject(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <div className={styles.modalHeader}>
              <h3>{activeProject.title}</h3>
              <button className={styles.closeBtn} onClick={() => setActiveProject(null)}>✕ Close</button>
            </div>
            
            <div className={styles.mediaContainer}>
              {/* Type 1: Standard Image or GIF asset */}
              {activeProject.media.type === "image" && (
                <img src={activeProject.media.src} alt={activeProject.title} className={styles.responsiveImg} />
              )}
              
              {/* Type 2: Streaming video context / YouTube iframes */}
              {activeProject.media.type === "video" && (
                <iframe 
                  src={activeProject.media.src} 
                  title="Video Walkthrough"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className={styles.responsiveIframe}
                />
              )}

              {/* Type 3: Direct Live Embedded Previews like Figma Frames */}
              {activeProject.media.type === "iframe" && (
                <iframe 
                  src={activeProject.media.src} 
                  title="Prototype Canvas"
                  allowFullScreen
                  className={styles.responsiveIframe}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;