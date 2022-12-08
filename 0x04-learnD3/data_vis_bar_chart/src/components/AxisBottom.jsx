import millify from 'millify'

const AxisBottom = ({xScale, innerHeight}) => (
    xScale.ticks().map((tickValue, i) => (
      <g transform={`translate(${xScale(tickValue)}, 0)`} key={i} className='tick'>
        <line
          // x1={0}
          // y1={0}
          // x2={0} //default values are zero; no need for these
          y2={innerHeight + 3}
        />
        <text y={innerHeight} textAnchor={`middle`} dy={`1.2em`}>{millify(tickValue)}</text>
      </g>
    ))
  )

  export default AxisBottom