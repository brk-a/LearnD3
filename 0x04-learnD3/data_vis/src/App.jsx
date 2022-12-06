import { useState, useCallback, useEffect } from 'react'

const csvUrl = 'https://gist.githubusercontent.com/brk-a/659c36335d911689f290c27f1db7745d/raw/namedColoursCssAll.csv'
const width = 1280
const height = 791
const centreX = width / 2
const centreY = height / 2

const pieArc = d3.arc()
.innerRadius(0)
.outerRadius(width)

const  App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    d3.csv(csvUrl).then(setData)
  }, [])

  // console.log(data)

  if (!data){
    return <pre> Loading... </pre>
  }

  const colourPie = d3.pie().value(1)

  return(
    <svg width={width} height={height}>
      <g transform={`translate(${centreX}, ${centreY})`}>
        {colourPie(data).map((d, i) => (
          <path key={i} 
            fill={d.data["Hex rgb"]} 
            d={pieArc(d)}
          />
        ))}
      </g>
    </svg>
  )
  
}

export default App

// To compute the arcs manually (without d3.pie):
// data.map((d, i) => (
//   <path
//     fill={d['RGB hex value']}
//     d={pieArc({
//       startAngle: (i / data.length) * 2 * Math.PI,
//       endAngle: ((i + 1) / data.length) * 2 * Math.PI
//     })}
//   />
// ))