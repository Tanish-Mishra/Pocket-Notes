import React, { useState, useRef, useEffect } from "react";
import styles from "./Home.module.css";
import uuid from 'react-uuid'
import NotesList from "../NotesList/NotesList";
import Hero from "../Hero/Hero";
import MainArea from "../Main/MainArea";
import Popup from "../Popup/Popup";


import Banner from "/assets/images/study-notes.png";
const Home = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [notes, setNotes] = useState([]);
  const [color, setColor] = useState("");
  const [active,setActive] = useState(false)
  const [notesText,setNotesText] = useState([{}])
  const [activeNotesData,setActiveNotesData] = useState([])
  const groupName = useRef(null);
  const re = useRef()

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
}

useEffect(()=>{
        const updatedNotes = notesText.filter((note)=>{
          if(note.id === active) {
            return note.id
          }
    }) 
    
    setActiveNotesData(updatedNotes)
},[notesText,active])


  const activeNote = () => {
    return notes.find((notes)=> notes.id === active)
  }

  return (
    <div className={styles.container}>
      {isPopup ? (
        <Popup
          color={color}
          setColor={setColor}
          groupName={groupName}
          handleNotes={handleNotes}
        />
      ) : (
        <></>
      )}
     <NotesList notes={notes}  setIsPopup={setIsPopup} re={re} active={active} setActive={setActive} /> 
     {!active ?<MainArea/>:  <Hero active={active} activeNote={activeNote()} onUpdateNote={onUpdateNote} notesText={notesText} activeNotesData={activeNotesData}/>}
   
    </div>
  );
};

export default Home;
