import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import styles from "../styles/WorkSection.module.css";
import { FaExternalLinkAlt, FaGithubAlt } from "react-icons/fa";

export const CarDel = ({ info }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    const isLast = currentIndex === info.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handlePrev = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? info.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div>
      {info.map((e, i) =>
        <div key={i}>
          <div className={styles.workSection}>
            <div className={styles.projectImage}>
              <Image
                src={e.img}
                width="0"
                height="0"
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                alt="deez"
              />
            </div>
            <div className={styles.projectDescription}>
              {e.description}
            </div>
            <div className={styles.projectTitle}>
              <div className={styles.projectLeftTitle}>
                {e.title}
              </div>
              <div className={styles.projectLinks}>
                {e.links.map((link, index) => {
                  if (index === 1) {
                    return (
                      <Link href={`${link}`} key={index}>
                        <FaExternalLinkAlt className={styles.projectLiveLink} />
                      </Link>
                    );
                  }
                  return (
                    <Link href={`${link}`} key={index}>
                      <FaGithubAlt className={styles.projectGithubLink} />
                    </Link>
                  );
                })}
              </div>
            </div>
            <div className={styles.projectNav}>
              <div className={styles.projectNavLeft} onClick={handleNext}>
                <BsArrowLeft size={100} />
              </div>
              <div className={styles.projectNavRight} onClick={handlePrev}>
                <BsArrowRight size={100} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
