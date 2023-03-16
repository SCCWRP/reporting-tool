import React from 'react';
import { Flowchart } from './components/Flowchart';
import { SiteSearch } from "./components/SiteSearch"
import { Table } from './components/Table';
import { IFrame } from './components/IFrame';
import { CausAss } from './components/CausAss';
import './App.css';
import grid from "./Grid.module.css"
import img2 from "./assets/esri-dev-2023-talk-analysis-flowchart2.png"
import img1 from "./assets/esri-dev-2023-talk-collection-flowchart1.png"
import img3 from "./assets/esri-dev-2023-talk-management-flowchart3.png"
import { Section } from "./components/Section.js"
//import styles from './components/Section.module.css"

function App() {
   return (
      <div className="App">
         <div className={grid.container}>
            <b><h1>Automating Environmental Data Workflows</h1></b><br></br>
            <div className={grid.rowCenter}>
               <Flowchart
                  title="Collection"
                  image={img1}
                  imgAlt="Checker/Approval app data flow"
                  buttonLink="https://github.com/SCCWRP/checker2.0"
                  button2Link="https://nexus.sccwrp.org/smcchecker/"
               />
               <Flowchart
                  title="Analysis"
                  image={img2}
                  imgAlt="Analysis/processing data flowchart"
                  buttonLink="https://csuchico.app.box.com/v/CSCI-Data-Tools"
                  button2Link=""
               />
               <Flowchart
                  title="Presentation"
                  image={img3}
                  imgAlt="Management application data flowchart"
                  buttonLink="https://github.com/SCCWRP/SGRRMP"
                  button2Link="https://rsca.sccwrp.org/sgrrmp"
               />
            </div>
            <u><h3>Instructions</h3></u> 
            <h4>1. Clear the test data by clicking the "Clear data" button under the Demo Checker</h4>
            <h4>2. Download the sample data</h4>
            <h4>3. Submit the raw data to the checker</h4>
            <h4>4. Submit the shapefiles to the checker</h4>
            <h4>5. Search for the demo station under Station Data Status</h4>
            <h4>6. Wait while data processes and indicators begin to reflect new data</h4>
            <br></br>
            <SiteSearch title="Station Data Status"/>
            <IFrame
               title="Demo Checker"
               src="https://nexus.sccwrp.org/demochecker/"
            />
            <CausAss
               src="https://rsca.sccwrp.org/rscademo"
               refresh="0"
            />
         </div>

         {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
      </div>
   );
}


export default App;
