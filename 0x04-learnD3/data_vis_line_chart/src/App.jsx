import './App.css'
import {useData} from './hooks'
import {AxisBottom, AxisLeft, Line} from './components'

function App() {
  const data = useData()

  return (
    <svg>
      <h1>Little Line Chart</h1>
    </svg>
  )
}

export default App
