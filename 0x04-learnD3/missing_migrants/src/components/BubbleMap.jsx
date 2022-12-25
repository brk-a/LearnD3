import React, {useMemo} from 'react'
import Map from './Map'

const sizeValue= d => d['Total Dead and Missing']
const maxRadius = 15

const BubbleMap = ({data, filteredData, atlas}) => {

    const sizeScale = useMemo(() => d3.scaleSqrt()
        .domain([0, d3.max(data, sizeValue)])
        .range([0, maxRadius]), [data, maxRadius, sizeValue]
    )
        
    return (
        <Map
            worldAtlas={atlas}
            data={filteredData}
            sizeScale={sizeScale}
            sizeValue={sizeValue}
        />
    )
    }

export default BubbleMap