import React, {useRef, useEffect} from 'react'
import AxisBottom from './AxisBottom'
import AxisLeft from './AxisLeft'
import Marks from './Marks'

const DateHistogram = ({data, height, width, setBrushExtent, xValue}) => {
    const brushRef = useRef()

    const width = width
    const height = height
    const margin = {top: 10, right: 30, bottom: 25, left: 60}
    const xAxisLabelOffset = 40
    const yAxisLabelOffset = 40
    const innerWidth = width - margin.left - margin.right
    const innerHeight = height - margin.top - margin.bottom

    const xAxisLabel = 'Time'
  
    const yValue = d => d['Total Dead and Missing']
    const yAxisLabel = 'Dead and missing'

    const xAxisTickFormat = d3.timeFormat('%d-%b-%y') //alt: '%d-%m-%Y' or '%d-%b-%Y'

    const xScale = d3.scaleTime()
      .domain(d3.extent(data, xValue))
      .range([0, innerWidth])
      .nice()
  
    // const tickFormat = d => millify(d)
    const tooltipFormat = tickValue => tickValue
  
    const [start, stop] = xScale.domain()
  
    const binnedData = d3.bin()
      .value(xValue)
      .domain(xScale.domain())
      .thresholds(d3.timeMonths(start, stop))(data)
      .map(array => ({
        y: d3.sum(array, yValue), //totalDeadAndMissing
        x0: array.x0,
        x1: array.x1
      }))
  
    const yScale = d3.scaleLinear()
    .domain([0, d3.max(binnedData, d => d.y)])
    .range([innerHeight, 0])
    .nice()
    
    const brushed = (e) => (
        setBrushExtent(e.selection && e.selection.map(xScale.invert))
    )

    useEffect(() => {
        const brush = d3.brushX()
            .extent([[0, 0], [innerWidth, innerHeight]])
            .on('brush end', brushed)
        brush(d3.select(brushRef.current))
    }, [innerHeight, innerWidth])

    return (
        <>
            <rect width={width} height={height} fill='white'/>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
           
                <AxisBottom
                    xScale={xScale} 
                    innerHeight={innerHeight}
                    tickFormat={xAxisTickFormat}
                    tickOffset={7}
                    transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
                />

                <text
                    className='axis-label'
                    textAnchor='middle'
                    transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
                >
                    {yAxisLabel}
                </text>

                <AxisLeft
                    yScale={yScale}
                    innerWidth={innerWidth}
                    tickOffset={7}
                />

                <text
                    className='axis-label'
                    textAnchor='middle'
                    x={innerWidth / 2}
                    y={innerHeight + xAxisLabelOffset}
                >
                    {xAxisLabel}
                </text>

                <Marks
                    data={binnedData}
                    xScale={xScale}
                    yScale={yScale}
                    tooltipFormat={tooltipFormat}
                    innerHeight={innerHeight}
                />

                {/* <Line
                    data={data}
                    xScale={xScale}
                    xValue={xValue} 
                    yScale={yScale}
                    yValue={yValue}
                /> */}
            </g>
            <g ref={brushRef}></g>
        </>

    )
}

export default DateHistogram