import React from "react";
import styles from "../styles/AboutSection.module.css";

const Experience = ({ title, points, duration }) => {
  return (
    <div>
      <div className={styles.exp1H}>
        {title} <div className={styles.duration}>{duration}</div>
      </div>
      <div className={styles.exp1C}>
        <ul>
          {points.map((e) => (
            <li>{e}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Experience;
