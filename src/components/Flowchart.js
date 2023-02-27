import React from 'react';
import styles from './Flowchart.module.css';
import { Section } from './Section';


export function Flowchart(props) {
   const title = props.title
   const image = props.image
   const buttonLink = props.buttonLink
   const imgAlt = props.imgAlt

   const navigate = (link) => {
      if (link) {
         window.location = link
      }
   }

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
                     />
                  </div>
                  <div className={styles.row}>
                     <button 
                        className={styles.fccButton} 
                        onClick={() => navigate(buttonLink)}
                     >
                        View
                     </button>
                  </div>
               </div>
            </div>
         </Section>
      </div>

   )
}

