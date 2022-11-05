import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "../styles/WorkSection.module.css";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";

const WorkSection = ({ slidesInfo }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToNext = () => {
    const isLast = currentIndex === slidesInfo.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  const goToPrevious = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? slidesInfo.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };
  console.log(slidesInfo);
  return (
    <div className={styles.workSection}>
      <div className={styles.projectImage}>
        <Image
          src={slidesInfo[currentIndex].img}
          width="0"
          height="0"
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className={styles.projectDescription}>
        {slidesInfo[currentIndex].description}
      </div>
      <div className={styles.projectTitle}>
        <div className={styles.projectLeftTitle}>
          {slidesInfo[currentIndex].title}
        </div>
        <div className={styles.projectLinks}>
          {slidesInfo[currentIndex].links.map((link, index) => {
            if (index === 1) {
              return (
                <Link href={`${link}`}>
                  <FaExternalLinkAlt className={styles.projectLiveLink} />
                </Link>
              );
            }
            return (
              <Link href={`${link}`}>
                <FaGithubAlt className={styles.projectGithubLink} />
              </Link>
            );
          })}
        </div>
      </div>
      <div className={styles.projectNav}>
        <div className={styles.projectNavLeft} onClick={goToPrevious}>
          <BsArrowLeft size={100} />
        </div>
        <div className={styles.projectNavRight} onClick={goToNext}>
          <BsArrowRight size={100} />
        </div>
      </div>
    </div>
  );
};

export default WorkSection;
