import React from "react";
import { skills } from "./constants/skillsInfo";
import styles from "../styles/AboutSection.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsBox}>
      {skills.map((e, index) => (
        <div className={styles.skill} key={index}>
          {e}
        </div>
      ))}
    </div>
  );
};

export default Skills;
