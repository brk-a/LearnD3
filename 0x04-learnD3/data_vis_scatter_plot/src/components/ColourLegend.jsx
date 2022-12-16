const ColourLegend = ({colourScale, handleMouseEnter, enterValue, fadeOpacity, tickSpacing=20, circleRadius=5, tickTextOffest=20}) => {
    return colourScale.domain().map((domainValue, i) => (
        <g
            key={i}
            className='tick'
            transform={`translate(${0}, ${i * tickSpacing})`}
            onMouseEnter={() => handleMouseEnter(domainValue)}
            onMouseOut={() => handleMouseEnter(null)}
            opacity={enterValue && domainValue !== enterValue ? fadeOpacity : 1}
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