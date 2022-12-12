import './App.css'
import {useData} from './hooks'
import {Map} from './components'

const width = 1280
const height = 791
// const margin = {top: 20, right: 20, bottom: 20, left: 20}

function App() {
  const data = useData()

  if (!data) return <pre> Loading ... </pre>

  return (
    <svg width={width} height={height}>
      <Map data={data}/>
    </svg>
  )
}

export default App
