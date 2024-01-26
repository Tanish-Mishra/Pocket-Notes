
import React from 'react'
import styles from './NotesList.module.css'

import Add from '/assets/icons/add.png'
const NotesList = ({ notes, setIsPopup,active,setActive }) => {
  return (
    <div className={styles.notes}>
        <h3 className={styles.notes__heading}>Pocket Notes</h3>
        <div className={styles.notes__list}>
            {  notes.map((note)=>(
          <div className={`${styles.notes__list_item} ${note.id === active && styles.active }`} onClick={
             ()=> {
                setActive(note.id)
             }
          }>
             <div className={styles.notes__profile} style={{background: `${note.color}`}}>HM</div>
             <div className={`${styles.notes__name}`}>{note.name}</div>
          </div>
))}
        </div>
        <button className={styles.notes__btn} onClick={()=>{
            setIsPopup(true)
        }}><img src={Add} alt='error'/></button>
    </div>
  )
}

export default NotesList