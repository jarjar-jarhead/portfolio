import React from 'react';
import styles from './Contact.module.css';

function Contact() {
  return (
    <footer id="contact" className={styles.contactSection}>
      <h2 className={styles.title}>Get In Touch</h2>
      <p className={styles.text}>Looking to collaborate or have a job opportunity? Drop me a line.</p>
      <a href="mailto:youremail@example.com" className={styles.contactBtn}>Say Hello</a>
      <div className={styles.links}>
        <a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </footer>
  );
}

export default Contact;