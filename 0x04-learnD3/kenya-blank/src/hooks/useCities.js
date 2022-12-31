import React, {useState, useEffect} from 'react'

const csvUrl = ''

const row = d => {
    d.lat = +d.lat
    d.lng = +d.lng
    return d
}
const useCities = () => {
    const [cities, setCities] = useState(null)

    useEffect(() => {
      d3.csv(csvUrl, row).then(setCities)
    }, [])
    
    return cities
}

export default useCities