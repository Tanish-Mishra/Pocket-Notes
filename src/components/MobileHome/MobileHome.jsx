import React, { useState, useRef, useEffect } from "react";
import styles from "./MobileHome.module.css";
import uuid from 'react-uuid'
import MobileNote from "../MobileNote/MobileNote";
import MobileHero from "../MobileHero/MobileHero";
import MobileMain from "../MobileMain/MobileMain";
import MobilePopup from "../MobilePopup/MobilePopup";
import { Routes,Route } from "react-router-dom";


import Banner from "/assets/images/study-notes.png";
const MobileHome = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [notes, setNotes] = useState([]);
  const [color, setColor] = useState("");
  const [active,setActive] = useState(false)
  const [notesText,setNotesText] = useState([{}])
  const [activeNotesData,setActiveNotesData] = useState([])
  const groupName = useRef(null);

  const handleNotes = () => {
    if (groupName.current.value === "" || color === "") {
      return;
    }
    const newNotes = {
      id: uuid(),
      name: groupName.current.value,
      text: "",
      color: `${color}`,
      date: new Date().toLocaleDateString("en-GB", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      time: new Date().toLocaleTimeString(),
    };
    setNotes([...notes, newNotes]);
    setIsPopup(false);
  };

const onUpdateNote = (updatedNote) => {
  const updatedNotesArray = notes.map((note) => {
    if(note.id === active) {
      return updatedNote
    }
    return note
  })

  setNotesText([...notesText,...updatedNotesArray])
  setNotes(updatedNotesArray)
}

useEffect(()=>{
    const updatedNotes = notesText.filter((note)=>{
          if(note.id === active) {
            return note.id
          }
    })

    setActiveNotesData(updatedNotes)
    console.log(notesText)
},[notesText,active])

  const activeNote = () => {
    return notes.find((notes)=> notes.id === active)
  }
  return (
    <div className={styles.container}>
      {isPopup ? (
        <MobilePopup
          color={color}
          setColor={setColor}
          groupName={groupName}
          handleNotes={handleNotes}
        />
      ) : (
        <></>
      )}
     <MobileNote notes={notes} setIsPopup={setIsPopup} active={active} setActive={setActive} /> 

     {!active ? <MobileMain/>:  <MobileHero active={active} activeNote={activeNote()} onUpdateNote={onUpdateNote} notesText={notesText} activeNotesData={activeNotesData}/>}
    </div>
  );
};

export default MobileHome;
