import React from "react"
import { Section } from "./Section"
import { SiteSeach } from "./SiteSearch"
import grid from "../Grid.module.css"
import styles from "./Table.module.css"
import { DTStatusIndicator } from "./DTStatusIndicator"

export function Table(props) {
   const title = props.title

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
                        <th>GIS</th>
                        <th>CSCI</th>
                        <th>ASCI</th>
                        <th>PHAB Metrics</th>
                        <th>IPI</th>
                     </tr>
                     <tr>
                        <td>10/10/10</td>
                        <td>
                           <DTStatusIndicator 
                              dt="chem"
                           />
                        </td>
                        <td>
                           <DTStatusIndicator 
                              dt="phab"
                           />
                        </td>
                        <td>
                           <DTStatusIndicator 
                              dt="tax"
                           />
                        </td>
                        <td>
                           <DTStatusIndicator 
                              dt="gismetrics"
                           />
                        </td>
                        <td>
                           <DTStatusIndicator 
                              dt="csci"
                           />
                        </td>
                        <td>
                           <DTStatusIndicator 
                              dt="asci"
                           />
                        </td>
                        <td>
                           <DTStatusIndicator 
                              dt="phabmetrics"
                           />
                        </td>
                        <td>
                           <DTStatusIndicator 
                              dt="ipi"
                           />
                        </td>
                     </tr>
                  </table>
               </div>
            </div>
         </Section>
      </div>
   )
} 