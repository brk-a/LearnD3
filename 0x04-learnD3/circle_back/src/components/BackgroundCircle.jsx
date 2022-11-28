import React from 'react'

const BackgroundCircle = ({circleY, circleRadius, circleX, mousePosition}) => {

    // const [mousePosition, setMousePosition] = useState()

    return (
        <>
            <circle 
                r={circleRadius}
                cx={mousePosition.x}
                cy={mousePosition.y}
                fill="yellow" 
                // stroke="black" 
                // stroke-width="10"
            />
        </>
    )
}

export default BackgroundCircle