

const PieArc = (props) => {
    const arc = (width) => (
        d3.arc().innerRadius(0)
        .outerRadius(width)
    )
    return(
        <path {...props} arc={arc}/>
    )
}
export default PieArc