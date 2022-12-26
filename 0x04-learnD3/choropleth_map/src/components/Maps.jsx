import React from 'react'

const projection = d3.geoNaturalEarth1()
const path = d3.geoPath(projection)
const graticule = d3.geoGraticule()

const missingDataColour = 'grey'

const Maps = ({worldAtlas: {countries, interiors}, rowByNumericCode, colourScale, colourValue}) => (
    <g className='map'>
        <path className='sphere' d={path({type: 'Sphere'})}/>
        <path className='graticules' d={path(graticule())}/>
        {countries.features.map((feature, i) => {
            const d = rowByNumericCode.get(feature.id)
            if (!d){
                console.log(feature.properties.name)
            }
            return(
                <path
                    key={i}
                    fill={d ? colourScale(colourValue(d)) : missingDataColour}
                    d={path(feature)}
                />
            )
        })}
        <path className='interiors' d={path(interiors)}/>
    </g>
)

export default Maps