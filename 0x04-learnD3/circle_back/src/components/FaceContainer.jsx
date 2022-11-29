import React, {useState} from 'react'

const FaceContainer = ({children, width, height, initialMousePosition, mousePosition}) => {

  const [mousePosition, setMousePosition] = useState(initialMousePosition)

  const handleMouseMove = (e) => {
    const {clientX, clientY} = e
    // setMousePosition ({x: clientX, y: clientY})
    return(setMousePosition ({x: clientX, y: clientY}))
  }

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove} mousePosition={mousePosition}>
        {/* <g transform={`translate(${circleX}, ${circleY})`}> */}
        <g>
            {children}
        </g>
    </svg>
    
  )
}

export default FaceContainer