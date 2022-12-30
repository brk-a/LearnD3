import { useData, useWorldAtlas } from './hooks'
import './App.css'

const App = () => {
  const data= useData()
  const atlas = useWorldAtlas()

  if (!atlas || !data) return <pre> Loading ...</pre>

  return (
    <svg></svg>
  )
}

export default App
