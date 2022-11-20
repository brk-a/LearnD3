// import { useState } from 'react'
// import './App.css'
import {BackgroundCircle, Eyes, Mouth} from './components'

function App() {
  // const [count, setCount] = useState(0)
  const width = 960
  const height = 500
  const centreX = width / 2
  const centreY =  height / 2
  const strokeWidth = 10
  const eyeOffsetX = 90
  const eyeOffsetY = 180
  const eyeRadius = 50
  const mouthWidth = 30
  const mouthRadius = 140

  return (
    <div className="App">
      <>
      <svg>
        <g transform={`translate(${centreX}, ${centreY})`}>
          <BackgroundCircle centreY={centreY} strokeWidth={strokeWidth}/>
          <Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius}/>
          <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}/>
        </g>
      </svg>
      </>
    </div>
  )
}

export default App
