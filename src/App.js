import React from 'react';
import { Flowchart } from './components/Flowchart';
import { SiteSearch } from "./components/SiteSearch"
import { Table } from './components/Table';
import { IFrame } from './components/IFrame';
import { CausAss } from './components/CausAss';
import './App.css';
import grid from "./Grid.module.css"
import img1 from "./assets/bitmap.png"
import img2 from "./assets/Picture2.png"
import img3 from "./assets/Picture3.png"

function App() {
   return (
      <div className="App">
         <div className={grid.container}>
            <u><b><h1>Environmental Data Reporting</h1></b></u><br></br>
            <div className={grid.rowCenter}>
               <Flowchart
                  title="Collection"
                  image={img1}
                  imgAlt="Checker/Approval app data flow"
                  buttonLink="https://sccwrp.org"
               />
               <Flowchart
                  title="Analysis"
                  image={img2}
                  imgAlt="Analysis/processing data flowchart"
               />
               <Flowchart
                  title="Presentation"
                  image={img3}
                  imgAlt="Management application data flowchart"
               />
            </div>
            <SiteSearch title="Station Data Status"/>
            <IFrame
               title="SMC Checker"
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
