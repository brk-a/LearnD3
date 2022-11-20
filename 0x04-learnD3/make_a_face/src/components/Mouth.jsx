import React from 'react'
import {arc} from 'd3'

const Mouth = ({mouthRadius, mouthWidth}) => {
    const mouthArc = arc()
        .innerRadius(mouthRadius)
        .outerRadius(mouthWidth)
        .startAngle(Math.PI * 2)
        .endAngle(Math.PI * 3/2)
    

    return (
       
        <>
            <path 
                d={mouthArc()} 
                stroke="black"  
                fill="transparent"
            />
        </>
      
    )
}

export default Mouth