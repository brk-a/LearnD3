// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import {select, line, curveCardinal} from 'd3';

function App() {
  const [data, setData] = useState([25,38,45,68,20, 65, 75, 15]);
  const svgRef = useRef();

  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);

    const myLine = line()
      .x((value, index) => {return (index * 50)})
      .y((value) => {return (150 - value)});

    // svg.selectAll('path')
    //   .data([data])
    //   .enter()
    //   .append('path')
    //   .attr('class', 'updated')
    //   .attr('d', value => myLine(value))
    //   .attr('fill', 'none')
    //   .attr('stroke', 'blue')
    //   .curve(curveCardinal);

    svg.selectAll('path')
      .data([data])
      .join('path')
      .attr('d', value => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue')
      .curve(curveCardinal);
    console.log(svg);
  }, [data]);
  
  const handleFilter = () => {
    return(setData(data.map(value => value + 5)));
  }

  const handleUpdate = () => {
    return(setData(data.map(value => value <= 35)));
  }

  return (
    <React.Fragment>
      <svg className='App' ref={svgRef}>
        <path d="M0,150 100,100 150,120" stroke="blue" fill="none"/>
      </svg>
      <button onClick={handleUpdate}> Update Data </button>
      <button onClick={handleFilter}> Filter Data </button>
   </React.Fragment>
   );
}

export default App;
