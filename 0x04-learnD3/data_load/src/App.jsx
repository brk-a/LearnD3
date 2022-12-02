import { useState, useCallback } from 'react'


const width = 960
const height = 500
const circleRadius = 30
const initialMousePosition = {x: width / 2, y: height / 2}

function App() {
  const [data, setData] = useState(initialMousePosition)

  const handleMouseMove = useCallback((e) => {
    const {clientX, clientY} = e
    setData({x: clientX, y: clientY})
  }, [setData])

  return (
    <>
      <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <circle
          cx={data.x}
          cy={data.y}
          r={circleRadius}
        />
      </svg>
    </>
  )
}

export default App
