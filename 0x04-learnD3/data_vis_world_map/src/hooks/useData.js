import React, {useState, useEffect} from "react"

const jsonUrl = 'https://unpkg.com/world-atlas@2.0.2/countries-10m.json'

const useData = () => {
    const [data, setData] = useState(null)
    useEffect(() => {
        d3.json(jsonUrl).then((topology) => {
            const {countries, land} = topology.objects
            setData({
                land: d3.feature(topology, land),
                interiors: d3.mesh(topology, countries, (a, b) => a !== b)
            })
        })
    }, [])
    return data
}

export default useData