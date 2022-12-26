import { useState, useEffect } from "react";

const csvUrl = 'https://gist.githubusercontent.com/brk-a/e4a06a2507b19538a20852c090c7d9c3/raw/8c5dc787b027b135adf8e18159e81d211099a1f9/slim-3.csv'

const useCodes = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        d3.csv(csvUrl).then(setData)
    }, [])

    return data
}

export default useCodes