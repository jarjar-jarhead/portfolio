import React from "react";
import styles from "./Hero.module.css";
import profpic from "../assets/profpic.jpg";

function Hero() {
  return (
    <section id="hero" className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>
          Hi, I'm <span className={styles.highlight}>Jarred Excel A. Oliveros</span>
        </h1>
        <h2 className={styles.subtitle}>Web & Mobile App Developer</h2>
        <p className={styles.description}>
          A developer who consumes knowledge and continues to improve. Utilizing
          the different tools and platforms to discover new things and expand his
          current knowledge and experience. Specializes in creating projects that
          implement logical and functional features.
        </p>
        <a href="#projects" className={styles.heroBtn}>
          View My Work
        </a>
      </div>
      <div className={styles.imagePlaceholder}>
        <div className={styles.avatar}>
          <img src={profpic} alt="Jarred Oliveros Profile" />
        </div>
      </div>
    </section>
  );
}

export default Hero;