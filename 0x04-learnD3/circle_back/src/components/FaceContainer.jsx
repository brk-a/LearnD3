import React, {useState} from 'react'

const FaceContainer = ({children, width, height, initialMousePosition}) => {

  const [mousePosition, setMousePosition] = useState(initialMousePosition)

  const handleMouseMove = (e) => {
    const {clientX, clientY} = e
    setMousePosition ({x: clientX, y: clientY})
    console.log(setMousePosition ({x: clientX, y: clientY}))
  }

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove} mousePosition={children.mousePosition}>
        {/* <g transform={`translate(${circleX}, ${circleY})`}> */}
        <g>
            {children}
        </g>
    </svg>
    
  )
}

export default FaceContainer