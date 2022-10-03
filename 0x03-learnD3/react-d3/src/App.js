// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import {select} from 'd3';

function App() {
  const [data, setData] = useState([25,38,45,68,20]);
  const svgRef = useRef();

  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);
    svg.select('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('class', 'updated')
      .attr('r', value => value)
      .attr('cx', value =>  value * 2)
      .attr('cy', value =>  value * 2)
      .attr('stroke', 'red');
    console.log(svg);
  }, [data]);
  
  const handleFilter = (data) => {
    return(setData(data.map(value => value + 5)));
  }

  const handleUpdate = (data) => {
    return(setData(data.map(value => value <= 35)));
  }

  return (
    <div className='container'>
      <svg className='App' ref={svgRef}></svg>
      <button onClick={handleUpdate}> Update Data </button>
      <button onClick={handleFilter}> Filter Data </button>
    </div>
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
