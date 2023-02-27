import React from "react"
import { Section } from "./Section"
import { SiteSeach } from "./SiteSearch"
import grid from "../Grid.module.css"
import styles from "./Table.module.css"

export function Table(props) {
   const title = props.title
   const fields = props.fields

   return (
      <div>
         <Section
            title={title}
         >
            <div className={styles.tableContainer}>
               <SiteSeach />
               <div className={grid.rowLeft}>
                  <table>
                     <tr>
                        <th>Sample Date</th>
                        <th>Chem</th>
                        <th>PHAB</th>
                        <th>BMI Tax</th>
                        <th>Algae</th>
                        <th>GIS</th>
                        <th>CSCI</th>
                        <th>ASCI</th>
                        <th>PHAB Metrics</th>
                        <th>IPI</th>
                        <th>CausAss</th>
                     </tr>
                     <tr>
                        <td>10/10/10</td>
                        <td><span>◉</span></td>
                        <td><span>◉</span></td>
                        <td><span>◉</span></td>
                        <td><span>◉</span></td>
                        <td><span>◉</span></td>
                        <td><span>◉</span></td>
                        <td><span>◉</span></td>
                        <td><span>◉</span></td>
                        <td><span>◉</span></td>
                        <td><span>◉</span></td>
                     </tr>
                  </table>
               </div>
            </div>
         </Section>
      </div>
   )
} 