const AxisLeft = ({yScale}) => (
    yScale.domain().map((tickValue, i) => (
      <text
        textAnchor={`end`}
        dy={`.32em`}
        x={-3}
        y={yScale(tickValue) + yScale.bandwidth() / 2}
        key={i}
      >
        {tickValue.length > 20 ? tickValue.slice(0, 20): tickValue}
      </text>
    ))
  )
  
export default AxisLeft