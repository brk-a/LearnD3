import React from 'react'

const Maps = ({height, width}) => {

  const svg = d3.select('#map')
    .append('svg')
    .attr('height', height)
    .attr('width', width)
    .append('g')
    .attr('id', 'svg_id')
  const projection = d3.geoNaturalEarth1()
    .translate(width/2, height/2)
    .scale(3000)
    .center([0, 37])

  const path = d3.geoPath(projection)
  return (
    null
  )
}

export default Maps