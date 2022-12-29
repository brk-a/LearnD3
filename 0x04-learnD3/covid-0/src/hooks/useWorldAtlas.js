import { useState, useEffect } from "react";

const mapUrl = ''

export default useWorldAtlas = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        topojson.features(data).then(setData)
    }, [])

    return data
}