// import logo from './logo.svg';
import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import {select, axisBottom, scaleLinear, axisRight, scaleBand} from 'd3';

function App() {
  const [data, setData] = useState([25, 38, 45, 68, 20, 65, 75]);
  const svgRef = useRef();

  const xScale = scaleBand()
    .domain(data.map((_, index) => index))
    .range([0, 300])
    .padding(0.5);
  
  const yScale = scaleLinear()
    .domain([0, 185.5])
    .range([185.5, 0]);

  const colourScale = scaleLinear()
  .domain([92.75, 139.125, 185.5])
  .range(['green', 'orange', 'red'])
  .clamp(true);

  useEffect(() => {
    console.log(svgRef);
    const svg = select(svgRef.current);
  
    const xAxis = axisBottom(xScale)
      .ticks(data.length);
    svg.selectAll('.x-axis')
      .style('transform', 'translateY(185.5px)')
      .call(xAxis);

    const yAxis = axisRight(yScale);
    svg.selectAll('.y-axis')
      .style('transform', 'translateX(300px)')
      .call(yAxis);

    // const myLine = line()
    //   .x((value, index) => {return (xScale(index))})
    //   .y(yScale)
    //   .curve(curveNatural);
    // svg.selectAll('path')
    //   .data([data])
    //   .enter()
    //   .append('path')
    //   .attr('class', 'updated')
    //   .attr('d', value => myLine(value))
    //   .attr('fill', 'none')
    //   .attr('stroke', 'blue');

    // svg.selectAll('.line')
    //   .data([data])
    //   .join('path')
    //   .attr('class', 'line')
    //   .attr('d', value => myLine(value))
    //   .attr('fill', 'none')
    //   .attr('stroke', 'blue');

    svg.selectAll('bar')
      .data(data)
      .join('rect')
      .attr('class', 'bar')
      .style('transform', 'scale(1, -1)')
      .attr('x', (_, index) => xScale(index))
      .attr('y', -185.5)
      .attr('width', xScale.bandwidth())
      .transition()
      .attr('fill', colourScale)
      .attr('height', value => 185.5 - yScale(value));

    console.log(svg);
  }, [data, xScale, yScale, colourScale]);
  
  console.log(svgRef.current);

  const handleFilter = () => {
    return(setData(data.map(value => value <= 45)));
  }

  const handleUpdate = () => {
    return(setData(data.map(value => value + 15)));
  }

  return (
    <React.Fragment>
      <svg className='App' ref={svgRef}>
        <g className='x-axis'></g>
        <g className='y-axis'></g>
        {/* <path d="M0,150 100,100 150,120" stroke="blue" fill="none"/> */}
      </svg>
      <button onClick={handleUpdate}> Update Data </button>
      <button onClick={handleFilter}> Filter Data </button>
   </React.Fragment>
   );
}

export default App;
