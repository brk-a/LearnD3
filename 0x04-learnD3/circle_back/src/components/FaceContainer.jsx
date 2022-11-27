import React from 'react'

const FaceContainer = ({children, width, height, circleX, circleY}) => {

  const handleMouseMove = () => {
    console.log('moving the mouse...')
  }

  return (
    <svg width={width} height={height} onMouseMove={handleMouseMove}>
        <g transform={`translate(${circleX}, ${circleY})`}>
            {children}
        </g>
    </svg>
    
  )
}

export default FaceContainer