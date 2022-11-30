import React, {useState, useCallback} from 'react'

const FaceContainer = ({children, width, height, initialMousePosition}) => {

  const [mousePosition, setMousePosition] = useState(initialMousePosition)

  const handleMouseMove = useCallback((e) => {
    const {clientX, clientY} = e
    // setMousePosition ({x: clientX, y: clientY})
    return(setMousePosition ({x: clientX, y: clientY}))
  }, [setMousePosition])

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