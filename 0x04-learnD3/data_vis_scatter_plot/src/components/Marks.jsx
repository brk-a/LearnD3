import React from 'react'

const Marks = ({data, xScale, xValue, yScale, yValue, colourScale, colourValue, circleRadius=10, tooltipFormat}) => {
  return (
    data.map((d, i) => (
        <circle
            className='mark'
            key={i}
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={circleRadius}
            fill={colourScale(colourValue(d))}
        >
          <title>{tooltipFormat(xValue(d))}, {tooltipFormat(yValue(d))}</title>
        </circle>
    ))
  )
}

export default Marks