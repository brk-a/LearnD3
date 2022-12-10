import React, {useState, useEffect} from "react";

const csvUrl = 'https://gist.githubusercontent.com/brk-a/560309453e8b9621f33398526c8a6ef6/raw/0db0d2e398bc98df3aca551452f213b564214dfc/irisDataSet.csv'

const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        const row = d => {
            d.sepal_length = +d.sepal_length
            d.sepal_width = +d.sepal_width
            d.petal_length = +d.petal_length
            d.petal_width = +d.petal_width
            return d
        }

        d3.csv(csvUrl, row).then(setData)
    }, [])

    return data
}

export default useData