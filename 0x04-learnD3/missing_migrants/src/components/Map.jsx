import React, {useMemo} from 'react'

const projection = d3.geoNaturalEarth1()
const path = d3.geoPath(projection)
const graticule = d3.geoGraticule()

const Map = ({worldAtlas: {land, interiors}, data, sizeScale, sizeValue}) => (
    <g className='map'>
        {useMemo(() => (
            <>
            <path className='sphere' d={path({type: 'Sphere'})}/>
            <path className='graticules' d={path(graticule())}/>
            {
                land.features.map((feature, i) => (
                    <path key={i} className='land' d={path(feature)}/>
                ))
            }
            <path className='interiors' d={path(interiors)}/>
            </>
        ), [path, graticule, land, interiors])
    
        }
        {data.map((d, i) => {
            const [x, y] = projection(d.coordinates)
            return <circle
                        key={i}
                        cx={x}
                        cy={y}
                        r={sizeScale(sizeValue(d))}
                    />
        })}
    </g>
)

export default Map