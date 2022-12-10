import React from 'react'

const AxisBottom = ({xScale, innerHeight, tickOffset=5}) => (
    xScale.ticks().map((tickValue, i) => (
        <g
            className='tick'
            key={i}
            transform={`translate(${xScale(tickValue)}, 0)`}
        >
            <line y2={innerHeight}/>
            <text
                style={{textAnchor: 'middle'}}
                dy='.71em'
                y={innerHeight + tickOffset}
            >
                {tickValue}
            </text>
        </g>
    ))
)


export default AxisBottom