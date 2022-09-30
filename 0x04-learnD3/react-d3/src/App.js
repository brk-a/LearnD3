// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef } from 'react';
import {select} from 'd3';

const data = [25,38,45,68,20];

function App() {
  const svgRef = useRef();

  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);
    svg.select('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'updated')
      .exit();
    console.log(svg);
  }, []);
  
  return (
    <svg className='App' ref={svgRef}></svg>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
