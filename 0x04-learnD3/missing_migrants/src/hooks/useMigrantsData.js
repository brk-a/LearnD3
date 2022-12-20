import {useState, useEffect} from 'react'

const csvUrl = 'https://gist.githubusercontent.com/brk-a/c21d15f9f37164343ba060acbc2b0a02/raw/8388783b43ed23820958a8ac756335e32f419b10/missing-migrants-subset.csv'


const row = d => {
    d.coordinates = d['Location Coordinates'].split(',').map(c => +c).reverse()
    d['Total Dead and Missing'] = +d['Total Dead and Missing']
    d['Reported Date'] = new Date(d['Reported Date'])
    return d
}

const useMigrantsData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        d3.csv(csvUrl, row).then(setData)
    }, [])
    return data
}

export default useMigrantsData