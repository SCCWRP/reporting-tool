import React from "react";
import styles from "./SiteSeach.module.css";
import grid from "../Grid.module.css"
import { useState } from "react";

export function SiteSeach(props) {

   const [inputValue, setInputValue] = useState('')

   // function search(searchTerm) {
   //    fetch('/stations', {
   //       method: 'POST',
   //       body: formData
   //     })
   // }

   function handleChange(e) {
      setInputValue(e.target.value)
   }

   function handleSubmit() {
      console.log(inputValue)

      // fetch('/stations', {
      //    method: 'POST',
      //    body: inputValue
      // })
      // .then(response => response.json())
      // .then(data => console.log(data))
      // .catch(error => {
      //    console.error(error)
      //  })
   }

   return (
      <div className={styles.SiteSearch}>
         <div className={grid.rowCenter}>
            <input type="search" placeholder="Search for a station..." onChange={handleChange} />
            <button className={styles.button} onClick={handleSubmit}>Search</button>
         </div>
      </div>
   )
}