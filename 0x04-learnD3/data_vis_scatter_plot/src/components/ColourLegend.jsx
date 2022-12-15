const ColourLegend = ({colourScale, tickSpacing=20, circleRadius=5, tickTextOffest=20}) => {
    return colourScale.domain().map((domainValue, i) => (
        <g
            key={i}
            className='tick'
            transform={`translate(${0}, ${i * tickSpacing})`}
        >
            <circle fill={colourScale(domainValue)} r={circleRadius}/>
            <text 
                dy={`.32em`}
                x={tickTextOffest}
            >
                {domainValue}
            </text>
        </g>
    ))
}

export default ColourLegend