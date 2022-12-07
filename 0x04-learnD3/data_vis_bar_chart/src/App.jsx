import React, {useState, useEffect, useCallback} from "react"

const csvUrl = 'https://gist.githubusercontent.com/brk-a/fd9b084a37cbeb52fb9852f675c70715/raw/cc3f426eb12d379543b726d8df8b2ecd371712e9/United-Nations-World-Population-Prospects-2019.csv'

const width = 1280
const height = 791
const centreX = width / 2
const centreY = height / 2
const margin = {top: 20, right: 20, bottom: 20, left: 20} 

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    const row = d => {
      d.Population = +d['2020']
      return d
    }

    d3.csv(csvUrl, row).then(data => {
      setData(data.slice(0, 20))
    })
  }, [])

  if (!data) return <pre> Loading ... </pre>

  const innerHeight = height - margin.top - margin.bottom
  const innerWidth = width - margin.right - margin.left

  const yScale = d3.scaleBand()
    .domain(data.map(c => c.Country))
    .range([0, innerHeight])

  const xScale = d3.scaleLinear()
    .domain([0, d3.max(data, r => r.Population)])
    .range([0, innerWidth])

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${margin.left}, ${margin.top})`}>
        {data.map((d, i) => (
          <rect key={i} x={0} y={yScale(d.Country)} width={xScale(d.Population)} height={yScale.bandwidth()}/>
        ))}
      </g>
    </svg>
  )
}

export default App
