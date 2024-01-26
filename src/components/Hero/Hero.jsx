import React from "react";
import styles from "./Hero.module.css";

import Arrow from "/assets/icons/arrow.svg";
const Hero = ({ activeNote }) => {

  return (
    <div className={styles.hero}>
      <div className={styles.hero__header}>
        <div className={styles.hero__profile} style={{background: `${activeNote?.color}`}}>MN</div>
        <div className={styles.hero__header_name}>{activeNote?.name}</div>
      </div>

      <div className={styles.hero__body}>
        <div className={styles.hero__display}>
          <p>You Wrote Me......</p>
          <div className={styles.hero__date}>
            <span>9 March 2023</span>
            <span>&#x2B2C;</span>
            <span>10:20 AM</span>
          </div>
        </div>
      </div>

      <div className={styles.hero__footer}>
        <textarea
          className={styles.hero__textarea}
          placeholder="Enter Your text here........."
          autoFocus
          spellCheck="false"
        ></textarea>
        <button className={styles.hero__btn}>
          <img src={Arrow} alt="enter" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
