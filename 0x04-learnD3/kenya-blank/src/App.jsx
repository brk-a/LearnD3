import { useWorldAtlas } from './hooks'
import {Maps} from './components'
import './App.css'

const width = 1280
const height = width / 1.61803398875

const App = () =>  {
  const atlas = useWorldAtlas()

  if (!atlas) return <pre>Loading ...</pre>

  return (
    <div id="map">
      <Maps/>
    </div>
    
  )
}

export default App
