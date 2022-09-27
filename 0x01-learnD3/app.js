const DUMMY_DATA = [
    {id: 1, value: 10, region: 'RW'},
    {id: 2, value: 6.18, region: 'TZ'},
    {id: 3, value: 12.5, region: 'ZA'},
    {id: 4, value: 13.31, region: 'KE'},
    {id: 5, value: 9, region: 'UG'},
    {id: 6, value: 8.5, region: 'NG'}
]

// d3.select('div')
//     .selectAll('p')
//     .data(DUMMY_DATA)
//     .enter()
//     .append('p')
//     .text((data) => {return data.region});

const xScale = d3.scaleBand()
    .domain(DUMMY_DATA.map((dataPoint) => dataPoint.region))
    .rangeRound([0, 1000])
    .padding(0.1);

const yScale = d3.scaleLinear()
    .domain([0, 20])
    .range([618, 0]);

const container = d3.select('svg')
    .classed('container', true);

const bars = container.selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('rect')
    .classed('bar', true)
    .attr('width', xScale.bandwidth())
    .attr('height', (data) => 618 - yScale(data.value))
    .attr('x', (data) => xScale(data.region))
    .attr('y', (data) => yScale(data.value));
    