import React from 'react'

const Marks = ({data, xScale, xValue, yScale, yValue}) => {
  return (
    data.map((d, i) => (
        <circle
            className='mark'
            key={i}
            cx={xScale(xValue(d))}
            cy={yScale(yValue(d))}
            r={10}
        />
    ))
  )
}

export default Marks