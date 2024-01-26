import React from 'react'
import styles from './NotesList.module.css'
const NotesList = () => {
  return (
    <div className={styles.notes}>
        <h3 className={styles.notes__heading}>Pocket Notes</h3>
        <div className={styles.notes__list}>
          <div className={styles.notes__list_item}>
             <div className={styles.notes__profile}>HM</div>
             <div className={`${styles.notes__name}`}>My Notes</div>
          </div>
        </div>
    </div>
  )
}

export default NotesList