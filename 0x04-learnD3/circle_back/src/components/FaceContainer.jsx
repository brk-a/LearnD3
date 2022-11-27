import React from 'react'

const FaceContainer = ({children, width, height, centreX, centreY}) => {
  return (
    <svg width={width} height={height}>
        <g transform={`translate(${centreX}, ${centreY})`}>
            {children}
        </g>
    </svg>
    
  )
}

export default FaceContainer