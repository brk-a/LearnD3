import './App.css'
import {useData} from './hooks'
import { Marks, AxisLeft } from './components'

const width = 1280
const height = 791
const margin = {top: 20, right: 30, bottom: 65, left: 90}

function App() {

  const data = useData()

  if (!data) return <pre> Loading ... </pre>

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.bottom - margin.top
  
  const xValue = d => d.sepal_length
  const yValue = d => d.sepal_width

  const xScale = d3.scaleLinear()
    .domain(d3.extent(data, xValue))
    .range([0, innerWidth])
  const yScale = d3.scaleLinear()
    .domain(d3.extent(data, yValue))
    .range([0, innerHeight])

  return (
    <svg width={width} height={height}>
      <AxisLeft yScale={yScale}/>
      <Marks data={data} xScale={xScale} xValue={xValue} yScale={yScale} yValue={yValue}/>
    </svg>

  )
}

export default App
