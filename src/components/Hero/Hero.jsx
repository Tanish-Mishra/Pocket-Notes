import React, { useEffect,useRef, useState } from "react";
import styles from "./Hero.module.css";

import Arrow from "/assets/icons/arrow.svg";
import BlueArrow from '/assets/icons/blue-arrow.svg'
const Hero = ({ activeNote,onUpdateNote,notesText }) => {
     const [inputValue,setInputValue] = useState()
     const arrowHighlight = useRef(null)
     const textValue = useRef(null)
     const onEditField = (value) => {
          onUpdateNote({
            id: activeNote.id,
            name: activeNote.name,
            text: value,
            color: activeNote.color,
            date: new Date().toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              }),
              time: new Date().toLocaleTimeString(),
          })
     }

   useEffect(()=>{
    if(textValue.current.value) {
     arrowHighlight.current.innerHTML = `<img src=${BlueArrow} alt="error"/>`
    } else {
        arrowHighlight.current.innerHTML = `<img src=${Arrow} alt="error"/>`
    }
   },[inputValue])
  return (
    <div className={styles.hero}>
      <div className={styles.hero__header}>
        <div className={styles.hero__profile} style={{background: `${activeNote?.color}`}}>MN</div>
        <div className={styles.hero__header_name}>{activeNote?.name}</div>
      </div>
      
      <div className={styles.hero__body}>
        <div className={styles.hero__display}>
          <p>{activeNote?.text}</p>
          <div className={styles.hero__date}>
            <span>{activeNote?.date}</span>
            <span>&#x2B2C;</span>
            <span>{activeNote?.time}</span>
          </div>
        </div>

      </div>

      <div className={styles.hero__footer}>
        <textarea
          className={styles.hero__textarea}
          placeholder="Enter Your text here........."
          autoFocus
          onChange={(e)=>{
          setInputValue(e.target.value)
         }}
         ref={textValue}
          spellCheck="false"
        ></textarea>
        <button className={styles.hero__btn} ref={arrowHighlight} onClick={()=>{
             onEditField(inputValue) 
             textValue.current.value = " "
        }}>
          <img src={Arrow}  alt="enter" />
        </button>
      </div>
    </div>
  );
};

export default Hero;
