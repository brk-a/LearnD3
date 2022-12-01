import React from 'react'

const FaceContainer = ({children, width, height}) => {

  return (
    <svg width={width} height={height} >
        {/* <g transform={`translate(${circleX}, ${circleY})`}> */}
        <g>
            {children}
        </g>
    </svg>
    
  )
}

export default FaceContainer