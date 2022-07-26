// import React from 'react'

const Marks = ({data, xScale, yScale, tooltipFormat, innerHeight}) => (
    data.map((d, i) => (
        <rect
            key={i}
            className="mark"
            x={xScale(d.x0)}
            y={yScale(d.y)}
            width={xScale(d.x1) - xScale(d.x0)}
            height={innerHeight - yScale(d.y)}
        >
            <title>{tooltipFormat(d.y)}</title>
        </rect>
    )) 
)


export default Marks