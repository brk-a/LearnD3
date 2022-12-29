import { useState, useEffect } from "react"

const csvUrl=''

export default useData = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        d3.csv(csvUrl).then(setData)
    }, [])

    return data
}