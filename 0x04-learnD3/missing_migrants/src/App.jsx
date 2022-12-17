import {useData, useWorldAtlas} from './hooks'
import './App.css'

const width = 1280
const height = width / 1.618033988

function App() {
  const data = useData()
  const atlas = useWorldAtlas()

  if (!data || !atlas) return <pre> Loading ... </pre>

  return (
    <svg width={width} height={height}>
      <g transform={`translate(${0}, ${0})`}></g>
    </svg>
  )
}

export default App
