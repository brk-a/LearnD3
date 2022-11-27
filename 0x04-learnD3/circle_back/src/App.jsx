// import { useState } from 'react'
// import './App.css'
import {Face} from './components'
import {range} from 'd3'

function App() {
  // const [count, setCount] = useState(0)
  let array = range(Math.random() * 50)
  return (array.map( (i) => (
    <Face key={i}/>
  )))
}

export default App
