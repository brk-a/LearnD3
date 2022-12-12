import React, {useState, useEffect} from "react"

const geoUrl = ''

const useData = () => {
    const [data, setData] = useState(null)
    const row = () => {
        useEffect((d) => {
            d.sth = sth
        }, [])
        return d
    }
    d3.sth(data, row).then(setData)
    return data
}

export default useData