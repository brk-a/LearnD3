import { useState, useCallback, useEffect } from 'react'
// import ReactDOM from 'react-dom'
import { pieArc } from './components'


const csvUrl = 'https://gist.githubusercontent.com/brk-a/659c36335d911689f290c27f1db7745d/raw/namedColoursCssAll.csv'
const width = 960
const height = 500
const centreX = width / 2
const centreY = height / 2

const  App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    d3.csv(csvUrl).then(setData)
  }, [])

  // console.log(data)

  if (!data){
    return <pre> 'Loading...' </pre>
  }

  return(
    <svg width={width} height={height}>
      <g transform={`translate(${centreX}, ${centreY})`}>
        {data.map((d, i) => (
          <path key={i} fill={d["Hex rgb"]} d={pieArc({width, startAngle: i / data.length * 2 * Math.PI, endAngle: (i+1) / data.length * 2 * Math.PI})}/>
        ))}
      </g>
    </svg>
  )
  
}

export default App

