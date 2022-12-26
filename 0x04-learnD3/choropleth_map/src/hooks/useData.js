import { useState, useEffect } from "react"

const csvUrl = 'https://gist.githubusercontent.com/brk-a/803ad0eb849e5e1d41671fc8c34e9c86/raw/a2aeaf9cda23043028e6342623c99f893b6e6031/share-of-population-infected-with-hiv-ihme.csv'

const row = d => {
    d.aids = +d['Prevalence - HIV/AIDS - Sex: Both - Age: 15-49 years (Percent) (%)'];
    return d;
  }

const useData = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        d3.csv(csvUrl, row).then(setData)
    }, [])

    return data
}

export default useData