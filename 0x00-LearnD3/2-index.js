const data = [
    {width: 600, height: 371, fill: 'pink'},
    {width: 60, height: 37.1, fill: 'blue'},
    {width: 6, height: 3.71, fill: 'black'}  
];
const svg = d3.selectAll('svg');

//join data to rects
const rects = svg.select('rect')
.data(data);

//add attrs to rects already in DOM
rects.attr('width', (d,i,n) => {return d.width}) //beware of `this`
.attr('height', (d) => { return d.height})
.attr('fill', d => d.fill); //this is why one-line arrow fns are great


//append the enter selection to DOM
rects.enter()
.append('rect')
.attr('width', (d,i,n) => {return d.width})
.attr('height', (d) => { return d.height})
.attr('fill', d => d.fill);
