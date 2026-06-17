import React from 'react';
import styles from './Hero.module.css';
import profpic from '../assets/profpic.jpg';
function Hero() {
  return (
    <section id="hero" className={styles.heroContainer}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm <span className={styles.highlight}>Jarred Excel A. Oliveros</span></h1>
        <h2 className={styles.subtitle}>Web & Mobile App Developer</h2>
        <p className={styles.description}>
          I build high-performance applications and clean digital experiences.
        </p>
        <a href="#projects" className={styles.heroBtn}>View My Work</a>
      </div>
      <div className={styles.imagePlaceholder}>
        {/* Your profile image will go here */}
        <div className={styles.avatar}> <img src={profpic}></img></div>
      </div>
    </section>
  );
}

export default Hero;