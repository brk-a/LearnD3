import React from 'react'

const BackgroundCircle = ({circleY, strokeWidth, circleX}) => {

    return (
        <>
            <circle 
                r={circleY - strokeWidth / 2}
                // cx={circleX}
                // cy={circleY}
                fill="yellow" 
                stroke="black" 
                stroke-width="10"
            />
        </>
    )
}

export default BackgroundCircle