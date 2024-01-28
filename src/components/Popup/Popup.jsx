import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import styles from "./Popup.module.css";
const Popup = ({ setColor, groupName, handleNotes }) => {
  function notifySelection(color) {
    toast.success(`${color} Selected !`, {
      style: {
        border: "1px solid #713200",
        padding: "16px",
        color: "#713200",
      },
      iconTheme: {
        primary: "#713200",
        secondary: "#FFFAEE",
      },
    });
  }
  return (
    <div className={styles.popup}>
      <Toaster position="top-right" reverseOrder={false} />
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
              notifySelection("Purple");
            }}
          ></button>
          <button
            className={`${styles.popup__color} ${styles.popup__color_pink}`}
            onClick={() => {
              setColor("#FF79F2");
              notifySelection("Pink");
            }}
          ></button>
          <button
            className={`${styles.popup__color} ${styles.popup__color_coral}`}
            onClick={() => {
              setColor("#43E6FC");
              notifySelection("Coral");
            }}
          ></button>
          <button
            className={`${styles.popup__color} ${styles.popup__color_orange} `}
            onClick={() => {
              setColor("#F19576");
              notifySelection("Orange");
            }}
          ></button>
          <button
            className={`${styles.popup__color} ${styles.popup__color_blue} `}
            onClick={() => {
              setColor("#0047FF");
              notifySelection("Blue");
            }}
          ></button>
          <button
            className={`${styles.popup__color} ${styles.popup__color_lightblue}`}
            onClick={() => {
              setColor("#6691FF");
              notifySelection("Light Blue");
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
