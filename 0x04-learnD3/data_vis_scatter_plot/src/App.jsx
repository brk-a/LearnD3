import { useState } from 'react'
import './App.css'
import {useData} from './hooks'
import { Marks, AxisLeft, Dropdown } from './components'
import AxisBottom from './components/AxisBottom'

const width = 1280
const menuHeight = 80
const height = 791 - menuHeight
const margin = {top: 20, right: 30, bottom: 85, left: 100}
const xAxisLabelOffset = 70
const yAxisLabelOffset = 70

const attributes = [
  {value: 'sepal_length', label: 'Sepal Length'},
  {value: 'petal_length', label: 'Petal Length'},
  {value: 'sepal_width', label: 'Sepal Width'},
  {value: 'petal_width', label: 'Petal Width'},
  {value: 'species', label: 'Species'}
]

const getLabel = value => {
  for (let i=0; i<attributes.length; i++){
    if (attributes[i].value === value){
      return attributes[i].label
    }
  }
}

const App = () => {

  const data = useData()

  const initialXAttribute = 'sepal_length'
  const [xAttribute, setXAttribute ] = useState(initialXAttribute)
  const xValue = d => d[xAttribute]
  const xAxisLabel = getLabel(xAttribute)

  const initialYAttribute = 'sepal_width'
  const [yAttribute, setYAttribute ] = useState(initialYAttribute)
  const yValue = d => d[yAttribute]
  const yAxisLabel = getLabel(yAttribute)

  if (!data) return <pre> Loading ... </pre>

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.bottom - margin.top
  const siFormat = d3.format('.2s')
  const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B')
  const yAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B')
  /**could've simply done this:
   *  ===> on terminal: npm install millify
   *  ===> in this file:
   * import millify from 'millify'
   * const xAxisTickFormat = tickValue => millify(tickValue)
   */

  const tooltipFormat = tickValue => tickValue

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
    .nice()

  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([innerHeight, 0])
  
  return (
    <>
      <label htmlFor='x-select'>X</label>
      <Dropdown
        options={attributes}
        id='x-select'
        selectedValue={xAttribute}
        onSelectedValueChange={setXAttribute}
      />

      <label htmlFor='y-select'>Y</label>
      <Dropdown
        options={attributes}
        id='y-select'
        selectedValue={yAttribute}
        onSelectedValueChange={setYAttribute}
      />

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
            tooltipFormat={tooltipFormat}
          />
        </g>
      </svg>
    </>

  )
}

export default App
