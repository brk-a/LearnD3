import React from 'react'
import Map from './Map'

const BubbleMap = ({data, atlas}) => {
    const sizeValue= d => d['Total Dead and Missing']
    const maxRadius = 15

    const sizeScale = d3.scaleSqrt()
        .domain([0, d3.max(data, sizeValue)])
        .range([0, maxRadius])
        
    return (
        <Map
            worldAtlas={atlas}
            data={data}
            sizeScale={sizeScale}
            sizeValue={sizeValue}
        />
    )
    }

export default BubbleMap