import React from "react"
import { Section } from "./Section"
import { SiteSearch } from "./SiteSearch"
import grid from "../Grid.module.css"
import styles from "./Table.module.css"
import { DTStatusIndicator } from "./DTStatusIndicator"

export function Table(props) {
   const title = props.title
   const station = props.station

   return (
      <div>
         <div className={styles.tableContainer}>
            <div className={grid.rowLeft}>
               <table>
                  <tr>
                     <th>Station</th>
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
                     <td>{station}</td>
                     <td>
                        <DTStatusIndicator
                           station={station}
                           dt="chem"
                        />
                     </td>
                     <td>
                        <DTStatusIndicator
                           station={station}
                           dt="phab"
                        />
                     </td>
                     <td>
                        <DTStatusIndicator
                           station={station}
                           dt="tax"
                        />
                     </td>
                     <td>
                        <DTStatusIndicator
                           station={station}
                           dt="gismetrics"
                        />
                     </td>
                     <td>
                        <DTStatusIndicator
                           station={station}
                           dt="csci"
                        />
                     </td>
                     <td>
                        <DTStatusIndicator
                           station={station}
                           dt="asci"
                        />
                     </td>
                     <td>
                        <DTStatusIndicator
                           station={station}
                           dt="phabmetrics"
                        />
                     </td>
                     <td>
                        <DTStatusIndicator
                           station={station}
                           dt="ipi"
                        />
                     </td>
                  </tr>
               </table>
            </div>
         </div>
      </div>
   )
} 