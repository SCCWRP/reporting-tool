import React from "react";
import { useState, useEffect } from "react";
import styles from "./DTStatusIndicator.module.css"

export function DTStatusIndicator(props) {

   const [color, setColor] = useState("gray")
   const [statusObj, setStatus] = useState({
      status: '',
      message: '',
      error: ''
   })

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
               let status = dataStatus[0]['current_status']
               let message = dataStatus[0]['current_message']
               let error = dataStatus[0]['error_message']
               switch (status) {
                  case 'completed':
                     setColor('green')
                     break;
                  case 'processing':
                     setColor('yellow')
                     break;
                  case 'failed':
                     setColor('red')
                     break;
               }
               setStatus({
                  status: status,
                  message: message,
                  error: error
               })

            }
         })
         .catch(error => {
            console.error(error)
         })
   }

   function handleClick() {
      if (statusObj.status !== '') {
         if (statusObj.error !== null) {
            alert(statusObj.error)
         } else {
            alert(statusObj.message)
         }
      }
   }




   return (
      <div>
         <span className={styles.indicator} style={{ color: color }} onClick={handleClick}>◉</span>
      </div>
   )
}