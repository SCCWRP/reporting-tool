import React from 'react';
import styles from './Flowchart.module.css';
import { Section } from './Section';
import grid from "../Grid.module.css"


export function Flowchart(props) {
   const title = props.title
   const image = props.image
   const buttonLink = props.buttonLink
   const button2Link = props.button2Link
   const imgAlt = props.imgAlt


   const navigate = (link) => {
      if (link) {
         window.location = link
      }
   }

   if (button2Link !== '') {
      return (
         <div>
            <Section
               title={title}
            >
               <div className={styles.row}>
                  <div className={styles.fccBody}>
                     <div className={styles.row}>
                        <img
                           className={styles.fccImage}
                           src={image}
                           alt={imgAlt}
                           onClick={() => {navigate(image)}}
                        />
                     </div>
                     <div className={grid.rowCenter}>
                        <button
                           className={styles.fccButton}
                           onClick={() => navigate(buttonLink)}
                        >View code</button>
                        <button
                           className={styles.fccButton}
                           onClick={() => navigate(button2Link)}
                        >View tool</button>
                     </div>
                  </div>
               </div>
            </Section>
         </div>

      )
   } else {
      return (
         <div>
         <Section
            title={title}
         >
            <div className={styles.row}>
               <div className={styles.fccBody}>
                  <div className={styles.row}>
                     <img
                        className={styles.fccImage}
                        src={image}
                        alt={imgAlt}
                        onClick={() => navigate(image)}
                     />
                  </div>
                  <div className={grid.rowCenter}>
                     <button
                        className={styles.fccButton}
                        onClick={() => {navigate(buttonLink)}}
                     >View code</button>
                  </div>
               </div>
            </div>
         </Section>
      </div>
      )
   }
}
