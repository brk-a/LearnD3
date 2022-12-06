

const pieArc = () => {
    const arc = (width) => (
        d3.arc().innerRadius(0)
        .outerRadius(width)
    )
    return(
        arc()
    )
}
export default pieArc