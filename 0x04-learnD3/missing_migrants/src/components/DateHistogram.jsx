import React from 'react'
import AxisBottom from './AxisBottom'
import AxisLeft from './AxisLeft'
import Marks from './Marks'

const height = 100
const width = height * 1.618033988

const DateHistogram = ({data, innerHeight, innerWidth, xAxisLabelOffset, yAxisLabelOffset}) => {
    const xValue = d => d['Reported Date']
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

    return (
        <g width={width} height={height}>
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

    )
}

export default DateHistogram