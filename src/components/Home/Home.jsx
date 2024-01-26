import React,{useState} from 'react'
import styles from './Home.module.css'
import NotesList from '../NotesList/NotesList'
import Hero from '../Hero/Hero'
import MainArea from '../Main/MainArea'
import Banner from '/assets/images/study-notes.png'
const Home = () => {
  const [notes, setNotes] = useState([
    {
      name: 'Note 1',
      text: 'This is a sample note'
    },
    {
      name: 'Note 1',
      text: 'This is new sample note'
    },
    {
      name: 'Note 1',
      text: "new note one are good"
    },
    {
      name: 'Note 1',
      text:"ek aur note"
    }
  ])
  return (
      <div className={styles.container}>
         <NotesList/>
         {/* <Hero/> */}
         <MainArea/>
        </div>
  )
}

export default Home