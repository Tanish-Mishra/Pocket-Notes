import React, { useState } from "react";
import styles from "./Popup.module.css";
const Popup = ({ setColor, groupName, handleNotes }) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <div className={styles.popup}>
      <h2 className={styles.popup__header}>Create New Group</h2>
      <div className={styles.popup__body}>
        <span className={styles.popup__body_text}>Group Name</span>
        <input
          type="text"
          ref={groupName}
          className={styles.popup__body_input}
          placeholder="Enter Group Name"
        />
      </div>
      <div className={styles.popup__footer}>
        <span className={styles.popup__footer_text}>Color</span>
        <div className={styles.popup__colors}>
          <button
            className={`${styles.popup__color} ${styles.popup__color_purple} `}
            onClick={() => {
              setColor("#B38BFA");
            }}
          ></button>
          <button
            className={`${styles.popup__color} ${styles.popup__color_pink}`}
            onClick={() => {
              setColor("#FF79F2");
            }}
          ></button>
          <button
            className={`${styles.popup__color} ${styles.popup__color_coral}`}
            onClick={() => {
              setColor("#43E6FC");
            }}
          ></button>
          <button
            className={`${styles.popup__color} ${styles.popup__color_orange} `}
            onClick={() => {
              setColor("#F19576");
            }}
          ></button>
          <button
            className={`${styles.popup__color} ${styles.popup__color_blue} `}
            onClick={() => {
              setColor("#0047FF");
            }}
          ></button>
          <button
            className={`${styles.popup__color} ${
              styles.popup__color_lightblue
            } ${isSelected && styles.active}`}
            onClick={() => {
              setColor("#6691FF");
            }}
          ></button>
        </div>
      </div>
      <button className={styles.popup__btn} onClick={handleNotes}>
        Create
      </button>
    </div>
  );
};

export default Popup;
