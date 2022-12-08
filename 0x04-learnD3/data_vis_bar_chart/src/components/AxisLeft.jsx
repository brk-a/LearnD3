const AxisLeft = ({yScale}) => (
    yScale.domain().map((tickValue, i) => (
      <g className="tick" key={i}>
        <text
          textAnchor={`end`}
          dy={`.32em`}
          x={-3}
          y={yScale(tickValue) + yScale.bandwidth() / 2}
        >
          {/* {tickValue.length > 20 ? tickValue.slice(0, 20): tickValue} */}
          {tickValue}
        </text>
      </g>
    ))
  )
  
export default AxisLeft