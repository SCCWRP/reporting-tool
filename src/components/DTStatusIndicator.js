import React from "react";
import { useState } from "react";
import styles from "./DTStatusIndicator.module.css"

export function DTStatusIndicator(props) {

   const [color, setColor] = useState("gray")

   const dataType = props.dt


   fetch(`https://nexus.sccwrp.org/smc-audit-demo/${dataType}`, {
      method: 'GET'
   })
      .then(response => response.json())
      .then(data => {
         console.log(`${dataType}:`, data)
         let dataStatus = data["res"]
         if (dataStatus === true) {
            setColor('green')
         } else if (dataStatus === false) {
            setColor('gray')
         } else {
            setColor('red')
         }
      })
      .catch(error => {
         console.error(error)
      })

   

   return (
      <div>
         <span className={styles.indicator} style={{color: color}}>◉</span>
      </div>
   )
}