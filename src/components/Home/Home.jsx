import React, { useState, useRef, useEffect } from "react";
import styles from "./Home.module.css";
import uuid from "react-uuid";
import NotesList from "../NotesList/NotesList";
import Hero from "../Hero/Hero";
import MainArea from "../Main/MainArea";
import Popup from "../Popup/Popup";

import Banner from "/assets/images/study-notes.png";
const Home = () => {
  const [isPopup, setIsPopup] = useState(false);
  const [notes, setNotes] = useState([]);
  const [color, setColor] = useState("");
  const [active, setActive] = useState(false);
  const [notesText, setNotesText] = useState([{}]);
  const [activeNotesData, setActiveNotesData] = useState([]);
  const [isStyleActive, setIsStyleActive] = useState(false);
  const [screenSize, setScreenSize] = useState(window.innerWidth);
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
    };
    time: new Date().toLocaleTimeString(), setNotes([...notes, newNotes]);
    setIsPopup(false);
  };

  const onUpdateNote = (updatedNote) => {
    const updatedNotesArray = notes.map((note) => {
      if (note.id === active) {
        return updatedNote;
      }
      return note;
    });

    setNotesText([...notesText, ...updatedNotesArray]);
  };

  useEffect(() => {
    const updatedNotes = notesText.filter((note) => {
      if (note.id === active) {
        return note.id;
      }
    });
    setActiveNotesData(updatedNotes);
  }, [notesText, active]);

  useEffect(() => {
    const notesListData = JSON.parse(localStorage.getItem("notesList"));
    if (notesListData) {
      setNotes(notesListData);
    }
    const notesTextData = JSON.parse(localStorage.getItem("notes"));
    if (notesTextData) {
      setNotesText(notesTextData);
    }
  }, []);

  const activeNote = () => {
    return notes.find((notes) => notes.id === active);
  };

  const checkScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  window.addEventListener("resize", checkScreenSize);
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
      <NotesList
        notes={notes}
        setIsPopup={setIsPopup}
        active={active}
        setActive={setActive}
        setIsStyleActive={setIsStyleActive}
        isStyleActive={isStyleActive}
        screenSize={screenSize}
      />
      {!active ? (
        <MainArea />
      ) : (
        <Hero
          active={active}
          activeNote={activeNote()}
          onUpdateNote={onUpdateNote}
          notes={notes}
          setNotes={setNotes}
          notesText={notesText}
          activeNotesData={activeNotesData}
          setIsStyleActive={setIsStyleActive}
          isStyleActive={isStyleActive}
          screenSize={screenSize}
        />
      )}
    </div>
  );
};

export default Home;
