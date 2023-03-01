import React from "react";
import { useState } from "react";
import { Section } from "./Section";
import styles from "./IFrame.module.css"
import grid from "../Grid.module.css"
import useChecksum from "../hooks/useChecksum";

export function CausAss(props) {
   const title = props.title
   const src = props.src
   const [x, setX] = useState(0);

   const checksum = useChecksum(x);

   return (
      <div>
         <Section
            title={title}
         >
            <div className={grid.rowRight}>
               <button className={styles.button} onClick={() => setX(x + 1)}>⟳</button>
            </div>
            <br></br>
            <div className={grid.rowCenter}>
               <iframe key={checksum} className={styles.iframe} src={src}></iframe>
            </div>
         </Section>
      </div>
   )
}