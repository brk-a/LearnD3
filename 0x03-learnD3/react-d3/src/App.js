// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import {select, line, curveNatural, axisBottom, scaleLinear, axisRight} from 'd3';

function App() {
  const [data, setData] = useState([25, 38, 45, 68, 20, 65, 75]);
  const svgRef = useRef();

  const xScale = scaleLinear()
    .domain([0, data.length - 1])
    .range([0, 300]);
  
  const yScale = scaleLinear()
    .domain([0, 185.5])
    .range([185.5, 0]);

  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);
  
    const xAxis = axisBottom(xScale);
    svg.selectAll('.x-axis')
      .style('transform', 'translateY(185.5px)')
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg.selectAll('.y-axis')
      .style('transform', 'translateX(300px)')
      .call(yAxis);

    const myLine = line()
      .x((value, index) => {return (xScale(index))})
      .y(yScale)
      .curve(curveNatural);
    // svg.selectAll('path')
    //   .data([data])
    //   .enter()
    //   .append('path')
    //   .attr('class', 'updated')
    //   .attr('d', value => myLine(value))
    //   .attr('fill', 'none')
    //   .attr('stroke', 'blue');

    svg.selectAll('.line')
      .data([data])
      .join('path')
      .attr('class', 'line')
      .attr('d', value => myLine(value))
      .attr('fill', 'none')
      .attr('stroke', 'blue');

    console.log(svg);
  }, [data, xScale, yScale]);
  
  console.log(svgRef.current);

  const handleFilter = () => {
    return(setData(data.map(value => value + 5)));
  }

  const handleUpdate = () => {
    return(setData(data.map(value => value <= 35)));
  }

  return (
    <React.Fragment>
      <svg className='App' ref={svgRef}>
        <g className='x-axis'></g>
        <g className='y-axis'></g>
        <path d="M0,150 100,100 150,120" stroke="blue" fill="none"/>
      </svg>
      <button onClick={handleUpdate}> Update Data </button>
      <button onClick={handleFilter}> Filter Data </button>
   </React.Fragment>
   );
}

export default App;
