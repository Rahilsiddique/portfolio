import React from "react";
import styles from "../styles/AboutSection.module.css";
import Experience from "../components/Experience";
import { exp } from "../components/constants/experienceInfo.js";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutEdu}>
        <div className={styles.education}>Education</div>
        <div className={styles.educationContent}>
          Computer Science undergrad
        </div>
      </div>
      <div className={styles.aboutExp}>
        <div className={styles.experience}>Experience</div>
        <div className={styles.experienceContent}>
          <div className={styles.experience1}>
            {exp.map((e) => (
              <Experience {...e} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.aboutSkills}>
        <div className={styles.skills}>Skills</div>
        <div className={styles.skillsContent}>
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default About;
