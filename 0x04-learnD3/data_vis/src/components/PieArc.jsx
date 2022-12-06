import {arc} from 'd3'

const pieArc = ({width}) => (
    arc().innerRadius(0)
        .outerRadius(width)
        .startAngle(Math.PI / 2)
        .endAngle(Math.PI * 3 / 2)
)
export default pieArc