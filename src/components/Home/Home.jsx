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
  const groupName = useRef(null);

  const handleNotes = () => {
    if (groupName.current.value === "" || color === "") {
      return;
    }
    console.log(groupName.current.value);
    const newNotes = {
      id: uuid(),
      name: groupName.current.value,
      text: "This is new sample note 2",
      color: `${color}`,
    };
    setNotes([...notes, newNotes]);
    setIsPopup(false);
  };

  useEffect(() => {
    console.log(notes);
  });

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
     <NotesList notes={notes} setIsPopup={setIsPopup} active={active} setActive={setActive} /> 
     {!active ? <MainArea/>:  <Hero active={active} activeNote={activeNote()}/>}
   
    </div>
  );
};

export default Home;
