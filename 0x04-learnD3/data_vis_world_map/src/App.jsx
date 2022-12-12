import './App.css'
import {useData} from '.hooks'

const width = 1280
const height = 791
const margin = {top: 20, right: 20, bottom: 20, left: 20}

function App() {
  const data = useData()

  if (!data) return <pre> Loading ... </pre>

  const innerWidth = width - margin.left - margin.right
  const innerHeight = height - margin.top - margin.bottom

  return (
    <h1>World Map</h1>
  )
}

export default App
