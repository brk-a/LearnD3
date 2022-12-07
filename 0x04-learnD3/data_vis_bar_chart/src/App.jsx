import React, {useState, useEffect, useCallback} from "react"

const csvUrl = 'https://gist.githubusercontent.com/brk-a/fd9b084a37cbeb52fb9852f675c70715/raw/cc3f426eb12d379543b726d8df8b2ecd371712e9/United-Nations-World-Population-Prospects-2019.csv'

const width = 1280
const height = 791
const centreX = width / 2
const centreY = height / 2

const pieArc = d3.arc()
  .innerRadius(0)
  .outerRadius(width)

function App() {

  const [data, setData] = useState(null)

  useEffect(() => {
    d3.csv(csvUrl).then(setData)
  }, [])

  if (!data) return <pre> Loading ... </pre>

  return (
    <svg>
      <g transform={`translate(${centreX}, ${centreY})`}>
        {data.map((d, i) => (
          <div key={i}>{d}</div>
        ))}
      </g>
    </svg>
  )
}

export default App
