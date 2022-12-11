import React from 'react'

const Marks = ({data, xScale, xValue, yScale, yValue, circleRadius=10, tooltipFormat}) => {
  return (
    data.map((d, i) => (
        <circle
            className='mark'
            key={i}
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={circleRadius}
        >
          <title>{tooltipFormat(xValue(d))}, {tooltipFormat(yValue(d))}</title>
        </circle>
    ))
  )
}

export default Marks