import React from "react";
import { useState, useEffect } from "react";
import styles from "./DTStatusIndicator.module.css"

export function DTStatusIndicator(props) {

   const [color, setColor] = useState("gray")

   const dataType = props.dt

   useEffect(() => {
      getData()
      const interval = setInterval(() => {
         getData()
      }, 1000)
   }, [])

   function getData() {
      fetch(`https://nexus.sccwrp.org/smc-audit-demo/${dataType}`, {
      method: 'GET'
   })
      .then(response => response.json())
      .then(data => {
         console.log(`***GET DATA*** ${dataType}:`, data)
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
   }
   

   

   return (
      <div>
         <span className={styles.indicator} style={{color: color}}>◉</span>
      </div>
   )
}