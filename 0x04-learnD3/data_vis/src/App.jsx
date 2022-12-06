import { useState, useCallback, useEffect } from 'react'
// import ReactDOM from 'react-dom'
import { pieArc } from './components'


const csvUrl = 'https://gist.githubusercontent.com/brk-a/659c36335d911689f290c27f1db7745d/raw/namedColoursCssAll.csv'
const width = 960
const height = 500

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
      {data.map((d, i) => (
        <path key={i} fill={d["Hex rgb"]} d={pieArc(width)}/>
      ))}
    </svg>
  )
  
}

export default App

