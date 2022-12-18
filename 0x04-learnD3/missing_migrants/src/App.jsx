import {useData, useWorldAtlas} from './hooks'
import {AxisBottom, AxisLeft, Marks} from './components'
// import millify from 'millify'
import './App.css'

const width = 1280
const height = width / 1.618033988
const margin = {top: 20, right: 20, bottom: 80, left: 100}
const xAxisLabelOffset = 70
const yAxisLabelOffset = 70

function App() {
  const data = useData()
  const atlas = useWorldAtlas()

  if (!data || !atlas) return <pre> Loading ... </pre>

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  const xValue = d => d['Reported Date']
  const xAxisLabel = 'Time'

  const yValue = d => d['Total Dead and Missing']
  const yAxisLabel = 'Dead and missing'

  const xAxisTickFormat = d3.timeFormat('%d-%b-%y') //alt: '%d-%m-%Y' or '%d-%b-%Y'

  const xScale = d3.scaleTime()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight, 0])
    .nice()

  // const tickFormat = d => millify(d)
  const tooltipFormat = tickValue => tickValue

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left},${margin.top})`}>
        <AxisBottom
          xScale={xScale} 
          innerHeight={innerHeight}
          tickFormat={xAxisTickFormat}
          tickOffset={7}
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
        />

        <text
          className='axis-label'
          textAnchor='middle'
          transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
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

        <Marks
          data={data}
          xScale={xScale}
          xValue={xValue}
          yScale={yScale}
          yValue={yValue}
          tooltipFormat={tooltipFormat}
          circleRadius={2}
        />

        {/* <Line
          data={data}
          xScale={xScale}
          xValue={xValue} 
          yScale={yScale}
          yValue={yValue}
        /> */}
      </g>
    </svg>
  )
}

export default App
