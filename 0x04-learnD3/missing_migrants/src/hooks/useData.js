import { useState, useEffect } from "react"

const csvUrl = 'https://gist.githubusercontent.com/brk-a/c21d15f9f37164343ba060acbc2b0a02/raw/60a4a4dcba3741a861cbe18fc55680278ea3f4f2/missng-migrants-raw.csv'

const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        d3.csv(csvUrl).then(setData)
    }, [])

    return data
}

export default useData