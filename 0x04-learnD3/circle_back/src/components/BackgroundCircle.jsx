import React from 'react'

const BackgroundCircle = ({centreY, strokeWidth}) => {

    return (
        <>
            <circle 
                r={centreY - strokeWidth / 2}
                fill="yellow" 
                stroke="black" 
                stroke-width="10"
            />
        </>
    )
}

export default BackgroundCircle