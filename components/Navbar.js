import React from "react";
import styles from "/styles/Navbar.module.css";
import { BiBowlingBall } from "react-icons/bi";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navBody}>
      <div className={styles.navLogoSection}>
        <BiBowlingBall size={50} />
      </div>
      <div className={styles.navLinkSection}>
        <Link href="/about">About</Link>
        <Link href="/work">Work</Link>
      </div>
      <div className={styles.navSocialSection}>
        <a href="">
          <FiGithub size={30} />
        </a>
        <a href="">
          <FiLinkedin size={30} />
        </a>
        <a href="">
          <FiTwitter size={30} />
        </a>
      </div>
      <div className={styles.navResumeSection}>Resume</div>
    </div>
  );
};

export default Navbar;
