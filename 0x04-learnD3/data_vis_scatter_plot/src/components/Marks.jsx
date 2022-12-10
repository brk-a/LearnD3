import React from 'react'

const Marks = ({data, xScale, xValue, yScale, yValue, circleRadius=10}) => {
  return (
    data.map((d, i) => (
        <circle
            className='mark'
            key={i}
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={circleRadius}
        />
    ))
  )
}

export default Marks