import React from "react";
import styles from "./SiteSeach.module.css";
import grid from "../Grid.module.css"
import { useState } from "react";
import { Table } from "./Table";
import { Section } from "./Section";

export function SiteSearch(props) {

   const title = props.title

   const [inputValue, setInputValue] = useState('SGUT502')
   const [thisStation, setThisStation] = useState('')

   function handleChange(e) {
      setInputValue(e.target.value)
   }

   function handleSubmit() {

      const inputObj = { search: inputValue }
      const searchJSON = JSON.stringify(inputObj)

      fetch('https://nexus.sccwrp.org/smc-audit-demo/stations', {
         method: 'POST',
         headers: {
            "Content-Type": "application/json",
         },
         body: searchJSON
      })
         .then(response => response.json())
         .then(stations => {
            const myStation = stations['stations'][0]
            setThisStation(myStation)
         })
         .then(console.log(thisStation))
         .catch(error => {
            console.error(error)
         })
   }

   if (thisStation === '' || thisStation === undefined) {
      return (
         <div>
            <Section title={title}>
               <br></br>
               <div className={styles.SiteSearch}>
                  <div className={grid.rowCenter}>
                     <input type="search" value={inputValue} onChange={handleChange} />
                     <button className={styles.button} onClick={handleSubmit}>Search</button>
                  </div>
               </div>
            </Section>
         </div>
      )
   } else {
      return (
         <div>
            <Section title={title}>
               <br></br>
               <div className={styles.SiteSearch}>
                  <div className={grid.rowCenter}>
                     <input type="search" value={inputValue} onChange={handleChange} />
                     <button className={styles.button} onClick={handleSubmit}>Search</button>
                  </div>
               </div>
               <Table station={thisStation}/>
            </Section>
         </div>
      )
   }
}
