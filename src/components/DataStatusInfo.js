import React, { useEffect } from "react";
import styles from "./DataStatusInfo.module.css"

export function DataStatusInfo(props) {
   const text = props.text
   
   return (
      <div className={styles.container}>
         <div className={styles.display}>
            <p>{text}</p>
         </div>
      </div>

   )
}