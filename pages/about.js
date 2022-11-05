import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutBody}>
      <div className={styles.flexBody}>
        <div className={styles.name}>Rahil Siddique</div>
        <div className={styles.description}>Student and Developer</div>
        <div className={styles.aboutLinks}>
          <a href="https://github.com/Rahilsiddique/">
            <FiGithub size={40} className={styles.FiGithub} />
          </a>
          <a href="https://www.linkedin.com/in/rahilsiddique/">
            <FiLinkedin size={40} className={styles.FiLinkedin} />
          </a>
          <a href="https://twitter.com/Rahil1900">
            <FiTwitter size={40} className={styles.FiTwitter} />
          </a>
        </div>
        <div className={styles.aboutResume}>Resume</div>
      </div>
    </div>
  );
};

export default About;
