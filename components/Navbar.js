import React, { useEffect, useState } from "react";
import styles from "/styles/Navbar.module.css";
import { BiBowlingBall } from "react-icons/bi";
import { FiTwitter, FiLinkedin, FiGithub } from "react-icons/fi";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className={styles.navBody}>
      <div className={styles.navLogoSection}>
        <BiBowlingBall size={50} className={styles.BiBowlingBall} />
      </div>
      <div className={styles.navLinkSection}>
        <Link href="/about" className={styles.navLinks}>
          About
        </Link>
        <Link href="/work" className={styles.navLinks}>
          Work
        </Link>
        <Link href="/blogs" className={styles.navLinks}>
          Blogs
        </Link>
      </div>
      <div className={styles.navSocialSection}>
        <a href="">
          <FiGithub size={30} className={styles.FiGithub} />
        </a>
        <a href="">
          <FiLinkedin size={30} className={styles.FiLinkedin} />
        </a>
        <a href="">
          <FiTwitter size={30} className={styles.FiTwitter} />
        </a>
      </div>
      <div className={styles.navResumeSection}>Resume</div>
    </div>
  );
};

export default Navbar;
