#!/usr/bin/js

//select svg container
d3.selectAll('#f-9').append('div').attr('class', 'frank').style('color', 'red').text('Hi Frank');
const svg = d3.select('svg');

d3.json('planets.json').then(data => {
    const circs = svg.selectAll('circle')
    .data(data);
    //add attrs to circs already in DOM
    circs.attr('cy', 200)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .attr('fill', d => d.fill);
    
    
    //account for virtual elems
    circs.enter()
    .append('circle') 
    .attr('cy', 200)
    .attr('cx', d => d.distance)
    .attr('r', d => d.radius)
    .attr('fill', d => d.fill);
    d3.select('.canvas').append('div').attr('class', 'frank').style('color', 'red').text('Hi Frank');



    
})

