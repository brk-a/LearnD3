import React from 'react'

const projection = d3.geoNaturalEarth1()
const path = d3.geoPath(projection)
const graticule = d3.geoGraticule()

const Map = ({data: {land, interiors}}) => (
    <g className='map'>
        <path className='sphere' d={path({type: 'Sphere'})}/>
        <path className='graticules' d={path(graticule())}/>
        {
            land.features.map((feature, i) => (
                <path key={i} className='land' d={path(feature)}/>
            ))
        }
        <path className='interiors' d={path(interiors)}/>
    </g>
)

export default Map