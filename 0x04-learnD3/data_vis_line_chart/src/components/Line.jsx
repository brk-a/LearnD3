import React from 'react'

const Line = ({data, xScale, xValue, yScale, yValue}) => (
  <g className='marks'>
    <path
      fill='none'
      stroke='black'
      d={d3.line()
        .x(d => xScale(xValue(d)))
        .y(d => yScale(yValue(d)))
        .curve(d3.curveNatural)(data)
      }
    />
  </g>
)

export default Line