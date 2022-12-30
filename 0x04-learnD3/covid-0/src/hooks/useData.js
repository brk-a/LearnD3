import { useState, useEffect } from "react"

const csvUrl='https://gist.githubusercontent.com/brk-a/b634cb05a8615241f130921e73575116/raw/a235d2536763790ed7fa72e092bcd8decc624909/covid-deaths.csv'

export default useData = () => {

    const [data, setData] = useState(null)

    useEffect(() => {
        d3.csv(csvUrl).then(setData)
    }, [])

    return data
}