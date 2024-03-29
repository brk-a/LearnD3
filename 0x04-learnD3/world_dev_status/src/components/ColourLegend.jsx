const ColourLegend = (selection, props) => {
    const {
        colourScale,
        circleRadius,
        spacing,
        textOffset,
        backgroundRectWidth,
        onClick,
        selectedColourValue
    } = props

    const backgroundRect = selection.selectAll('rect')
        .data([null])
    const n = colourScale.domain().length
    backgroundRect.enter().append('rect')
        .merge(backgroundRect)
            .attr('x', -circleRadius * 2)
            .attr('y', -circleRadius * 2)
            .attr('rx', circleRadius * 2)
            .attr('width', backgroundRectWidth)
            .attr('height', spacing * n + circleRadius * 2)
            .attr('fill', 'white')
            .attr('opacity', 0.8)
    const groups = selection.selectAll('tick')
        .data(colourScale.domain())
    const groupsEnter = groups.enter()
        .append('g')
        .attr('class', 'tick')
    groupsEnter.merge(groups)
        .attr('transform', (d, i) => `translate(0, ${i * spacing})`)
        .attr('opacity', d => (!selectedColourValue || d === selectedColourValue) ? 1 : 0.2)
        .on('click', d => onClick(d === selectedColourValue ? null : d))
    groups.exit().remove()
    groupsEnter.append('circle')
        .merge(groups.select('circle'))
        .attr('r', circleRadius)
        .attr('fill', colourScale)
    groupsEnter.append('text')
        .merge(groups.select('text'))
        .text(d => d)
        .attr('dy', '.32em')
        .attr('x',textOffset)
//   return (
//     <div>ColourLegend</div>
//   )
}

export default ColourLegend