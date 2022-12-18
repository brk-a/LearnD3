// import React from 'react'

const Marks = ({data, xScale, xValue, yScale, yValue, tooltipFormat, circleRadius=5}) => (
    data.map((d, i) => (
        <circle
            key={i}
            className="mark"
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={circleRadius}
        >
            {/* <title>
                {tooltipFormat(xValue(d))}, {tooltipFormat(yValue(d))}
            </title> */}
        </circle>
    )) 
)


export default Marks