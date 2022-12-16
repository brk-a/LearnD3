import './App.css'
import {useCities, useWorldAtlas} from './hooks'
import {Map} from './components'

const width = 1280
const height = width / 1.618033988
// const margin = {top: 20, right: 20, bottom: 20, left: 20}

function App() {
  const worldAtlas = useWorldAtlas()
  const cities = useCities()

  if (!worldAtlas || !cities) return <pre> Loading ... </pre>

  const sizeValue = d => d.population
  const maxRadius = 15

  const sizeScale = d3.scaleSqrt()
    .domain([0, d3.max(cities, sizeValue)])
    .range([0, maxRadius])

  return (
    <svg width={width} height={height}>
      <Map worldAtlas={worldAtlas} cities={cities} sizeScale={sizeScale} sizeValue={sizeValue}/>
    </svg>
  )
}

export default App
