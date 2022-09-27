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

const container = d3.select('div')
    .classed('container', true);

const bars = container.selectAll('.bar')
    .data(DUMMY_DATA)
    .enter()
    .append('div')
    .classed('bar', true)
    .style('width', '50px')
    .style('height', (data) => {return (data.value * 15) + 'px'});
    