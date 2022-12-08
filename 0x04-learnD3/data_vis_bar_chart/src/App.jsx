import React from "react"
import { useData } from "./hooks"
import {AxisBottom, AxisLeft, Bars} from './components'
import './App.css'

const width = 1280
const height = 791
// const centreX = width / 2
// const centreY = height / 2
const margin = {top: 20, right: 30, bottom: 65, left: 280}
const xAxisOffestLabel = 45

const App = () => {

  const data = useData()

  if (!data) return <pre> Loading ... </pre>

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.right - margin.left
  const yValue = i => i.Country
  const xValue = i => i.Population

  const yScale = d3.scaleBand()
    .domain(data.map(yValue))
    .range([0, innerHeight])
    .paddingInner(0.15)

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight}/>
        <AxisLeft yScale={yScale}/>
        <text x={innerWidth / 2} y={innerHeight + xAxisOffestLabel} textAnchor={`middle`} className='axis-label'>
          Population
        </text>
        <Bars data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue}/>
      </g>
    </svg>
  )
}

export default App
