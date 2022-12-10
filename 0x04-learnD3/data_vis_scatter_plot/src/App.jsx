import './App.css'
import {useData} from './hooks'
import { Marks, AxisLeft } from './components'
import AxisBottom from './components/AxisBottom'

const width = 1280
const height = 791
const margin = {top: 20, right: 30, bottom: 85, left: 100}
const xAxisLabelOffset = 70
const yAxisLabelOffset = 70

function App() {

  const data = useData()

  if (!data) return <pre> Loading ... </pre>

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.bottom - margin.top
  
  const xValue = d => d.sepal_length
  const xAxisLabel = 'Sepal Length'
  const yValue = d => d.sepal_width
  const yAxisLabel = 'Sepal Width'

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([0, innerHeight])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
        />
        <AxisLeft
          yScale={yScale}
          innerWidth={innerWidth}
        />

        <text
          className='axis-label'
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
          textAnchor='middle'
        >
          {xAxisLabel}
        </text>
        <text
          className='axis-label'
          textAnchor='middle'
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2})  rotate(-90)`}
        >
          {yAxisLabel}
        </text>

        <Marks
          data={data}
          xScale={xScale}
          xValue={xValue}
          yScale={yScale}
          yValue={yValue}
          circleRadius={7}
        />
      </g>
    </svg>

  )
}

export default App
