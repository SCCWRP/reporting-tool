import React from "react";
import styles from "./SiteSeach.module.css";
import grid from "../Grid.module.css"

export function SiteSeach(props) {
   return (
      <div className={styles.SiteSearch}>
         <div className={grid.rowCenter}>
            <input type="search" placeholder="Search for a station..."/>
            <button className={styles.button}>Search</button>
         </div>
      </div>
   )
}