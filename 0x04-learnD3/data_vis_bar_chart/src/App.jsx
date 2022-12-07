import React from "react"
import { useData } from "./hooks"
import {AxisBottom, AxisLeft, Bars} from './components'

const width = 1280
const height = 791
// const centreX = width / 2
// const centreY = height / 2
const margin = {top: 20, right: 20, bottom: 20, left: 200}

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

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, xValue)])
    .range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom xScale={xScale} innerHeight={innerHeight}/>
        <AxisLeft yScale={yScale}/>
        <Bars data={data} xScale={xScale} yScale={yScale} xValue={xValue} yValue={yValue}/>
      </g>
    </svg>
  )
}

export default App
