import React, { useState } from "react";
import styles from "./Home.module.css";
import NotesList from "../NotesList/NotesList";
import Hero from "../Hero/Hero";
import MainArea from "../Main/MainArea";
import Popup from "../Popup/Popup";

import Banner from "/assets/images/study-notes.png";
const Home = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [notes, setNotes] = useState([
    {
      id: "1",
      name: "Note 1",
      text: "This is a sample note",
      color: "red",
    },
    {
      id: "2",
      name: "Note 2",
      text: "This is new sample note 2",
      color: "blue",
    },
  ]);
  const [isTrue, setIsTrue] = useState(true);
 
  return (
    <div className={styles.container}>
      { isPopup ? <Popup notesDetails = {notes} setNotes={setNotes} setIsPopup={setIsPopup}/> : <></> }
      <NotesList notes={notes} setIsPopup={setIsPopup} />
      <Hero />
      {/* <MainArea/> */}
    </div>
  );
};

export default Home;
