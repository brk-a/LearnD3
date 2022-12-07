import React, {useState, useEffect, useCallback} from "react"
import millify from 'millify'

const csvUrl = 'https://gist.githubusercontent.com/brk-a/fd9b084a37cbeb52fb9852f675c70715/raw/cc3f426eb12d379543b726d8df8b2ecd371712e9/United-Nations-World-Population-Prospects-2019.csv'

const width = 1280
const height = 791
const centreX = width / 2
const centreY = height / 2
const margin = {top: 20, right: 20, bottom: 20, left: 200} 

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
        {xScale.ticks().map((tickValue, i) => (
          <g transform={`translate(${xScale(tickValue)}, 0)`} key={i}>
            <line
              // x1={0}
              // y1={0}
              // x2={0} //default values are zero; no need for these
              y2={innerHeight + 3}
              stroke='grey'
            />
            <text y={innerHeight} textAnchor={`middle`} dy={`1.2em`}>{millify(tickValue)}</text>
          </g>
        ))}

        {yScale.domain().map((tickValue, i) => (
          <text
            textAnchor={`end`}
            dy={`.32em`} x={-3}
            y={yScale(tickValue) + yScale.bandwidth() / 2}
            key={i}
          >
            {tickValue.length > 20 ? tickValue.slice(0, 20): tickValue}
          </text>
        ))}

        {data.map((d, i) => (
          <rect
            key={i} 
            x={0} 
            y={yScale(d.Country)} 
            width={xScale(d.Population)}
            height={yScale.bandwidth()}
          />
        ))}
      </g>
    </svg>
  )
}

export default App
