const projection = d3.geoNaturalEarth1()
const pathGenerator = d3.geoPath(projection) //d3.geoPath().projection(projection)

const ChoroplethMap = (selection, props) => {
    const {
        features,
        colourScale,
        colourValue,
        selectedColourValue
      } = props

      const gUpdate = selection.selectAll('g').data([null])
      const gEnter = gUpdate.enter().append('g')
      const g = gUpdate.merge(gEnter)
      
      gEnter.append('path')
        .attr('class', 'sphere')
        .attr('d', pathGenerator({type: 'Sphere'}))
        .merge(gUpdate.select('.sphere'))
        .attr('opacity', selectedColourValue ? 0.05 : 1)

      selection.call(d3.zoom().on('zoom', () => {
        g.attr('transform', d3.event.transform)
      }))

      const countryPaths = g.selectAll('.country').data(features)
      const countryPathsEnter = countryPaths.enter()
        .append('path')
        .attr('class', 'country')
      countryPaths.merge(countryPathsEnter)
        .attr('d', pathGenerator)
        .attr('fill', d => colourScale(colourValue(d)))
        .attr('opacity', d => (!selectedColourValue || selectedColourValue === colourValue) ? 1 : 0.1)
        .classed('highlighted', d => selectedColourValue && selectedColourValue === colourValue(d))
      countryPathsEnter.append('title').text(d => `${d.properties}: ${colourValue(d)}`)
//   return (
//     <div>ChoroplethMap</div>
//   )
}

export default ChoroplethMap