import React from "react";
import styles from "../styles/AboutSection.module.css";
import Experience from "../components/Experience";
import { exp } from "../components/constants/experienceInfo.js";
import Skills from "../components/Skills";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.aboutEdu}>
        <div className={styles.education}>About</div>
        <div className={styles.educationContent}>
          Hello, my name is{" "}
          <span className={styles.AboutSectionName}>Rahil Siddique</span>,
          developer from india, I like to develop stuff
        </div>
      </div>
      <div className={styles.aboutExp}>
        <div className={styles.experience}>Experience</div>
        <div className={styles.experienceContent}>
          <div className={styles.experience1}>
            {exp.map((e, index) => (
              <Experience {...e} key={index} />
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
