import React from 'react'

const AxisLeft = ({yScale, innerWidth, tickOffset=5}) => (
    yScale.ticks().map((tickValue, i) => (
        <g className='tick' key={i} transform={`translate(0, ${yScale(tickValue)})`}>
            <line x2={innerWidth}/>
            <text
                style={{textAnchor: 'end'}}
                x={-tickOffset}
                dy='.32em'
            >
                {tickValue}
            </text>
        </g>
    ))
)
export default AxisLeft