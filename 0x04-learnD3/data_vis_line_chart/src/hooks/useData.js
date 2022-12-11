import React, {useState, useEffect} from "react";

const csvUrl = 'https://gist.githubusercontent.com/brk-a/23a339eaa2c6e2b4038ecc7466f3fa4d/raw/70d9a4c435ab6cababd594b49887630304ccdf4e/week-temp-sf.csv'

const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const row = d => {
            d.temperature = +d.temperature
            d.timestamp = new Date(d.timestamp)
            return d
        }
        d3.csv(csvUrl, row).then(setData)
    }, [])

    return data
}

export default useData