import React from "react"
import styles from "./Section.module.css"
import grid from "../Grid.module.css"
import { Table } from "./Table"

export function Section(props) {
   let backgroundColor = "rgb(240, 240, 240)"
   if (props.backgroundColor) {
      backgroundColor = props.backgroundColor
   } 
   const title = props.title
   const style = { backgroundColor: backgroundColor }
   
   
   return(
      <div>
         <div 
            className={styles.container}
            style={style}
         >
            <div className={grid.rowCenter}>
               <h1>{title}</h1>
            </div>
            <div>
               {props.children}
            </div>
         </div>
      </div>
   )
}