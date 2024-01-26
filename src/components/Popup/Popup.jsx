import React, { useState,useRef } from 'react'
import styles from './Popup.module.css'
const Popup = ({notesDetails,setNotes,setIsPopup}) => {
    const [color,setColor] = useState('')
    const groupName = useRef(null) 
    const handleClick = () => {
        if(groupName.current.value === ''){
            return}
          const newNotes ={
            id: "4",
            name: groupName.current.value,
            text: "This is new sample note 2",
            color: `${color}`,
          }
            setNotes([...notesDetails,newNotes])
            setIsPopup(false)
    }
  return (
    <div className={styles.popup}>
        <h2 className={styles.popup__header}>Create New Group</h2>
        <div className={styles.popup__body}>
          <span className={styles.popup__body_text}>Group Name</span>
          <input type="text" ref={groupName}  className={styles.popup__body_input} placeholder='Enter Group Name'/>
        </div>
        <div className={styles.popup__footer}>
          <span className={styles.popup__footer_text}>Color</span>
          <div className={styles.popup__colors}>
          <button className={`${styles.popup__color} ${styles.popup__color_purple} `}></button>
          <button className={`${styles.popup__color} ${styles.popup__color_pink} `}   ></button>
          <button className={`${styles.popup__color} ${styles.popup__color_coral}`}  ></button>
          <button className={`${styles.popup__color} ${styles.popup__color_orange} `} ></button>
          <button className={`${styles.popup__color} ${styles.popup__color_blue}`}     ></button>
          <button className={`${styles.popup__color} ${styles.popup__color_lightblue}`}  ></button>
          </div>
        </div>
        <button className={styles.popup__btn} onClick={handleClick}>Create</button>
    </div>
  )
}

export default Popup