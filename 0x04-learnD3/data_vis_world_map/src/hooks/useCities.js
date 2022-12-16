import {useState, useEffect} from 'react'

const csvUrl = 'https://gist.githubusercontent.com/brk-a/9afd6fb2d76edffec76c04d2e50d21cc/raw/052a0a9f7dcbaf754ab8017f505676a0203c6e54/world-cities-clean.csv'

const row = d => {
    d.lat = +d.lat
    d.lng = +d.lng
    d.population = +d.population
    return d
}

const useCities = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        d3.csv(csvUrl, row).then(setData)
    }, [])
    return data
}

export default useCities