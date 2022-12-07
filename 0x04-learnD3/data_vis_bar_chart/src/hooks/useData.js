import {useState, useEffect, useCallback} from 'react'

const csvUrl = 'https://gist.githubusercontent.com/brk-a/fd9b084a37cbeb52fb9852f675c70715/raw/cc3f426eb12d379543b726d8df8b2ecd371712e9/United-Nations-World-Population-Prospects-2019.csv'

const useData = () => {
    const [data, setData] = useState(null)
  
    useEffect(() => {
      const row = d => {
        d.Population = +d['2020']
        return d
      }
  
      d3.csv(csvUrl, row).then(data => {
        setData(data.slice(0, 20))
      })
    }, [])
  
    return data
  }

export default useData