import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import styles from "../styles/About.module.css";

const About = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  console.log(width);
  return (
    <div className={styles.aboutBody}>
      <div className={styles.flexBody}>
        <div className={styles.name}>Rahil Siddique</div>
        <div className={styles.description}>Student and Developer</div>
        {width <= 900 ? (
          <>
            <div className={styles.aboutLinks}>
              <a href="">
                <FiGithub size={40} className={styles.FiGithub} />
              </a>
              <a href="">
                <FiLinkedin size={40} className={styles.FiLinkedin} />
              </a>
              <a href="">
                <FiTwitter size={40} className={styles.FiTwitter} />
              </a>
            </div>
            <div className={styles.aboutResume}>Resume</div>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default About;
