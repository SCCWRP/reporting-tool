import React from "react";
import { Section } from "./Section";
import styles from "./IFrame.module.css"
import grid from "../Grid.module.css"

export function IFrame(props) {
   const title = props.title
   const src = props.src

   return (
      <div>
         <Section
            title={title}
         >
            <br></br>
            <div className={grid.rowCenter}>
               <iframe className={styles.iframe} src={src}></iframe>
            </div>
         </Section>
      </div>
   )
}