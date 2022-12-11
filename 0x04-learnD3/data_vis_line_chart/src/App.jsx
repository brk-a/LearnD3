import './App.css'
import {useData} from './hooks'
import {AxisBottom, AxisLeft, Line} from './components'

const width = 1280
const height = 791
const margin = {top: 20, right: 20, bottom: 80, left: 100}
const xAxisLabelOffset = 70
const yAxisLabelOffset = 70

function App() {

  const data = useData()

  if (!data) return <pre> Loading ... </pre>

  const xAxisLabel = 'Time'
  const yAxisLabel = 'Temperature'

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xValue = i => i.timestamp
  const yValue = i => i.temperature

  const xAxisTickFormat = d3.timeFormat('%a')

  const xScale = d3.scaleTime()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight, 0])
    .nice()

  return (
    <svg width={width} height={height}>
      <g className='' transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale}
          innerHeight={innerHeight}
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
          tickFormat={xAxisTickFormat}
          tickOffset={7}
        />

        <text 
          className='axis-label'
          textAnchor='middle'
          transform={`translate(${-yAxisLabelOffset},${innerHeight / 2}) rotate(-90)`}
        >
          {yAxisLabel}
        </text>

        <AxisLeft
          yScale={yScale}
          innerWidth={innerWidth}
          tickOffset={7}
        />

        <text 
          className='axis-label'
          textAnchor='middle'
          x={innerWidth / 2}
          y={innerHeight + xAxisLabelOffset}
        >
          {xAxisLabel}
        </text>

        <Line
          data={data}
          xScale={xScale}
          xValue={xValue}
          yScale={yScale}
          yValue={yValue}
        />
      </g>
    </svg>
  )
}

export default App
