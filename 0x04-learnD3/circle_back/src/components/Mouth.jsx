import React from 'react'
import {arc} from 'd3'

const Mouth = ({mouthRadius, mouthWidth}) => {
    const mouthArc = arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthWidth)
        .startAngle(Math.PI * 5/2)
        .endAngle(Math.PI * 7/2)
    

    return (
       
        <>
            <path 
                d={mouthArc()} 
                stroke="black"  
                fill="black"
            />
        </>
      
    )
}

export default Mouth