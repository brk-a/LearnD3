import React from 'react'

const projection = d3.geoNaturalEarth1()
const path = d3.geoPath(projection)
const graticule = d3.geoGraticule()

const Map = ({worldAtlas: {land, interiors}, cities, circleRadius=1.5}) => (
    <g className='map'>
        <path className='sphere' d={path({type: 'Sphere'})}/>
        <path className='graticules' d={path(graticule())}/>
        {
            land.features.map((feature, i) => (
                <path key={i} className='land' d={path(feature)}/>
            ))
        }
        <path className='interiors' d={path(interiors)}/>
        {cities.map((city, i) => {
            const [x, y] = projection([city.lng, city.lat])
            return <circle key={i} cx={x} cy={y} r={circleRadius}/>
        })}
    </g>
)

export default Map