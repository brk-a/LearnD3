import { mexicoPath } from "./mexicoPath"

const svgWidth = 1280
const svgHeight = svgWidth / 1.618
const margin = {'top': 20, 'right': 20, 'bottom': 20, 'left': 20}
const innerWidth = svgWidth - margin.left - margin.right
const innerHeight = svgHeight - margin.top - margin.bottom

const svgViewport = d3.select('body')
    .append('svg')
    .attr('width', innerWidth + margin.left + margin.right)
    .attr('heigt', innerHeight + margin.top + margin.bottom)
    .style('border', '2px solid')

const zoomFunction = () => (
    d3.select('path')
        .attr('transorm',`translate(${d3.event.translate}) scale(${d3.event.scale})`)
)

const zoom = d3.behavior.zoom()
    .scaleExtent([0.2, 10])
    .on('zoom', zoomFunction)

const innerSpace = svgViewport.append('g')
    .attr('class', 'inner_space')
    .attr('transform', `translate(${margin.left}, ${margin.top})`)
    .call(zoom)

innerSpace.append('g')
    .attr('class', 'hidden_rectangle')
    .append('rect')
    .attr('class', 'background')
    .attr('x', (d, i) => 0)
    .attr('y', (d, i) => 0)
    .attr('width', (d, i) => innerWidth)
    .attr('height', (d, i) => innerHeight)
    .style('fill', 'white')

const mexicoPath = innerSpace.append('path')
    .attr('d', mexicoPath)
    .attr('fill', 'grey')