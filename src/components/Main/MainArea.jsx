import React from 'react'
import styles from '../Main/MainArea.module.css'

import NotesBanner from '/assets/images/study-notes.png'
import Lock from '/assets/icons/lock.png'

const MainArea = () => {
  return (
    <div className={styles.main}>
         <div className={styles.main__header}>
            <img src={NotesBanner} alt="error"/>
            <h2 className={styles.main__heading}>Pocket Notes</h2>
            <span>Send and receive messages without keeping your phone online.</span>
            <span>Use Pocket Notes on up to 4 linked devices and 1 mobile phone.</span>
         </div>
         <div className={styles.main__footer}>
            <img src={Lock} alt='error' style={{height:'0.85rem'}}/>
            <span className={styles.main__footer_text}>end-to-end encrypted</span>
         </div>
    </div>
  )
}

export default MainArea