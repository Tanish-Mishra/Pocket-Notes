import React, { useEffect, useRef } from "react";
import styles from "./NotesList.module.css";

import Add from "/assets/icons/add.png";
const NotesList = ({ notes, setIsPopup, active, setActive,setIsStyleActive,isStyleActive,screenSize }) => {
   const notesActive = useRef(null)
   useEffect(()=>{
   if(screenSize<=500){
      if(isStyleActive){
         notesActive.current.style.display = "none"
      } else {
         notesActive.current.style.display = "block"
      }
   }
   },[isStyleActive])

   useEffect(()=>{
   if(screenSize<=500){
      if(isStyleActive){
         notesActive.current.style.display = "none"
      } 
   } else if(screenSize > 500) {
      notesActive.current.style.display = "block"
   }
   },[screenSize])

  return (
    <div className={styles.notes} ref={notesActive}>
      <h3 className={styles.notes__heading}>Pocket Notes</h3>
      <div className={styles.notes__list}>
        {notes.map((note) => (
          <div
            className={`${styles.notes__list_item} ${
              note.id === active && styles.active
            }`}
            onClick={() => {
              setActive(note.id);
              setIsStyleActive(true)
            }}
          >
            <div
              className={styles.notes__profile}
              style={{ background: `${note.color}` }}
            >
              {note.name
                .split(" ")
                .map((word) => word.charAt(0))
                .join("")
                .toUpperCase()}
            </div>
            <div className={`${styles.notes__name}`}>{note.name}</div>
          </div>
        ))}
      </div>
      <button
        className={styles.notes__btn}
        onClick={() => {
          setIsPopup(true);
        }}
      >
        <img src={Add} alt="error" />
      </button>
    </div>
  );
};

export default NotesList;
