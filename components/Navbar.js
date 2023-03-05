import React, { useEffect, useState } from "react";
import styles from "/styles/Navbar.module.css";
import { BiBowlingBall } from "react-icons/bi";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navBody}>
      <div className={styles.navLogoSection}>
        <Link href="/">
          <BiBowlingBall size={50} className={styles.BiBowlingBall} />
        </Link>
      </div>
      <div className={styles.navLinkSection}>
        <Link href="/" className={styles.navLinks}>
          Home
        </Link>
        <Link href="/work" className={styles.navLinks}>
          Work
        </Link>
        <Link href="/about" className={styles.navLinks}>
          About
        </Link>
      </div>
      <div className={styles.navSocialSection}>
        <a href="https://github.com/Rahilsiddique/">
          <FiGithub size={30} className={styles.FiGithub} />
        </a>
        <a href="https://www.linkedin.com/in/rahilsiddique/">
          <FiLinkedin size={30} className={styles.FiLinkedin} />
        </a>
        <a href="https://twitter.com/Rahil1900">
          <FiTwitter size={30} className={styles.FiTwitter} />
        </a>
      </div>
      <div className={styles.navResumeSection}>🚧</div>
    </div>
  );
};

export default Navbar;
