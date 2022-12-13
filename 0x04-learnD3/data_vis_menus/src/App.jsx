import { useData } from './hooks'
import './App.css'

const width = 1280
const height = 791

function App() {
  const data = useData()

  if (!data) return <pre> Loading ... </pre>



  return (
    <svg width={width} height={height}>
      <g transform={`translate(${width}, ${height})`}></g>
    </svg>
  )
}

export default App
