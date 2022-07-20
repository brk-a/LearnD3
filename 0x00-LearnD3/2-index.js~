const canvas = d3.select(".canvas");
const svg = canvas.append('svg')
      .attr('height', 600)
      .attr('width', 600);
const group = svg.append('g')
      .attr('transform', 'translate(150,100)');

group.append('rect')
    .attr('width', 200)
    .attr('height', 100)
    .attr('fill', 'blue')
    .attr('x', 20)
    .attr('y', 20);

group.append('circle')
    .attr('cx', 120)
    .attr('cy', 120)
    .attr('r', 50)
    .attr('fill', 'pink');

group.append('line')
    .attr('x1', 450)
    .attr('y1', 300)
    .attr('x2', 150)
    .attr('y2', 500)
    .attr('stroke', 5);

svg.append('text')
    .attr('x', 20)
    .attr('y', 200)
    .attr('fill', 'grey')
    .text('hello, world!')
    .style('font-family', 'arial');
