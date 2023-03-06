import React from "react";
import { useState, useEffect } from "react";
import styles from "./DTStatusIndicator.module.css"

export function DTStatusIndicator(props) {

   const [color, setColor] = useState("gray")

   const dataType = props.dt
   const station = props.station

   useEffect(() => {
      getData()
      const interval = setInterval(() => {
         getData()
      }, 1000)
   }, [])

   const dataObj = {
      station: station
   }

   const dataJSON = JSON.stringify(dataObj)

   function getData() {
      fetch(`https://nexus.sccwrp.org/smc-audit-demo/${dataType}`, {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         body: dataJSON
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
         <span className={styles.indicator} style={{ color: color }}>◉</span>
      </div>
   )
}