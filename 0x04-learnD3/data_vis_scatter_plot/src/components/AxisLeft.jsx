import React from 'react'

const AxisLeft = ({yScale}) => (
    yScale.ticks().map((tickValue, i) => (
        <g className='tick'>
            <text
                key={i}
                style={{textAnchor: 'end'}}
                x={-3}
                dy='.32em'
                y={yScale(tickValue)}
            >
            {tickValue}
            </text>
        </g>
    ))
)
export default AxisLeft