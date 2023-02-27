import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Flowchart } from './components/Flowchart';
import { Table } from "./components/Table"
import { Section } from './components/Section';
import { IFrame } from './components/IFrame';
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
               image = {img1}
               imgAlt = "Checker/Approval app data flow"
               buttonLink = "https://sccwrp.org"
            />
            <Flowchart
               title="Analysis" 
               image = {img2}
               imgAlt = "Analysis/processing data flowchart"
            />
            <Flowchart
               title="Presentation"
               image = {img3}
               imgAlt = "Management application data flowchart"
            />
         </div>
         <Table title="Station Processing Status" />
         <IFrame
            title = "SMC Checker"
            src="https://smcchecker.sccwrp.org/smc/"
         />
         <IFrame 
            src="https://rsca.sccwrp.org/sgrrmp"
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
