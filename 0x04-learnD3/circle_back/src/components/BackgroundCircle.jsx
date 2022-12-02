import React, {useState, useCallback}from 'react'

const BackgroundCircle = ({circleY, circleRadius, circleX, mousePosition, initialMousePosition}) => {

    const initialMousePosition = {x: circleX, y: circleY}

    const [mousePosition, setMousePosition] = useState(initialMousePosition)

    const handleMouseMove = useCallback((e) => {
      const {clientX, clientY} = e
      // setMousePosition ({x: clientX, y: clientY})
      return(setMousePosition ({x: clientX, y: clientY}))
    }, [setMousePosition])

    return (
        <>
            <circle 
                r={circleRadius}
                cx={mousePosition.x}
                cy={mousePosition.y}
                fill="yellow"
                onMouseMove={handleMouseMove}
                mousePosition={mousePosition}
                // stroke="black" 
                // stroke-width="10"
            />
        </>
    )
}

export default BackgroundCircle