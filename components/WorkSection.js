import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "../styles/WorkSection.module.css";

const WorkSection = ({ img, description, title, links }) => {
  console.log(img);
  return (
    <div className={styles.workSection}>
      <div className={styles.projectImage}>
        <Image src={img} height={300} />
      </div>
      <div className={styles.projectDescription}>{description}</div>
      <div className={styles.projectTitle}>
        {title}
        {links.map((link) => {
          return <Link href={`${link}`}></Link>;
        })}
      </div>
      <div className={styles.projectNav}>
        <BsArrowLeft size={100} />
        <BsArrowRight size={100} />
      </div>
    </div>
  );
};

export default WorkSection;
