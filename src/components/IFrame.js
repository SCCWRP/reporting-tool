import React from "react";
import { Section } from "./Section";
import styles from "./IFrame.module.css"
import grid from "../Grid.module.css"
import sampleData from "../assets/Sample_data.zip"

export function IFrame(props) {
   const title = props.title
   const src = props.src


   const dataObj = {
      station: 'SGUT502',
   }

   const dataJSON = JSON.stringify(dataObj)
   
   function clearData() {
      fetch('https://rsca.sccwrp.org/rscademo/cleardemo', {
            method: 'GET',
         })
            .then(response => response.json())
            .then(data => console.log("Data: ", data))
            .catch(error => console.log(error))
   }
      
   

   const handleClear = () => {
      fetch('https://nexus.sccwrp.org/smc-audit-demo/gismetrics', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         body: dataJSON
         })
         .then(response => response.json())
         .then(data => {
            
            if (data['res'][0]['current_status'] === "completed") {
               
               clearData()

            } else {
               
               alert("Data is either processing or does not exist. Please wait for data to process or drop new data into the checker")

            }

         })
         .catch(error => console.log(error))
   }

   function handleDownload() {
      window.location = sampleData
   }

   return (
      <div>
         <Section
            title={title}
         >
            <div className={grid.rowRight}>
            </div>
            <br></br>
            <div className={grid.rowCenter}>
               <button className={grid.button} onClick={handleDownload}>Download sample data</button>
               <button className={grid.button} onClick={handleClear}>Clear data</button>
            </div>
            <br></br>
            <div className={grid.rowCenter}>
               <iframe className={styles.iframe} src={src}></iframe>
            </div>
         </Section>
      </div>
   )
}
