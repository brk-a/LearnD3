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

  return (
    <svg width={width} height={height}>
      <Map worldAtlas={worldAtlas} cities={cities}/>
    </svg>
  )
}

export default App
