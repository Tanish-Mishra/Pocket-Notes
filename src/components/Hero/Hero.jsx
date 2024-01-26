import React from 'react'
import styles from './Hero.module.css'

import Arrow from '/assets/icons/arrow.svg'
const Hero = () => {
  return (
     <div className={styles.hero}>

          <div className={styles.hero__header}>
            <div className={styles.hero__profile}>MN</div>
            <div className={styles.hero__header_name}>My notes</div>
          </div>

          <div className={styles.hero__body}>
            
             </div>
          
          <div className={styles.hero__footer}>
           <textarea className={styles.hero__textarea} placeholder="Enter Your text here........." autoFocus></textarea>
           <button className={styles.hero__btn}><img src={Arrow} alt='enter'/></button>
          </div>
     </div>
  )
}

export default Hero