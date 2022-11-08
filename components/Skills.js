import React from "react";
import { skills } from "./constants/skillsInfo";
import styles from "../styles/AboutSection.module.css";

const Skills = () => {
  return (
    <div className={styles.skillsBox}>
      {skills.map((e) => (
        <div className={styles.skill}>{e}</div>
      ))}
    </div>
  );
};

export default Skills;
