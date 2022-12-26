import {useWorldAtlas, useCodes, useData} from './hooks'
import {Maps} from './components'
import './App.css'

const width = 1280
const height = width / 1.618033988
const selectedYear = '2017'

const App = () => {
  const atlas = useWorldAtlas()
  const data = useData()
  const codes = useCodes()

  if (!atlas || !data || !codes) return <pre> Loading ... </pre>

  const numericCodeByAlphaCode = new Map()
  codes.forEach(code => {
    const alpha3Code = code['alpha-3']
    const numericCode = code['country-code']
    numericCodeByAlphaCode.set(alpha3Code, numericCode)
  });

  const filteredData = data.filter(d => d.Year === selectedYear)

  const rowByNumericCode = new Map()
  filteredData.forEach(d => {
    const alpha3Code = d.Code
    const numericCode = numericCodeByAlphaCode.get(alpha3Code)
    rowByNumericCode.set(numericCode, d)
  });

  const colourValue = d => d.aids
  const colourScale = d3.scaleSequential(d3.interpolateYlOrRd)
        .domain([0, d3.max(data, colourValue)])

  return (
   <svg width={width} height={height}>
    <Maps
      worldAtlas={atlas}
      rowByNumericCode={rowByNumericCode}
      colourScale={colourScale}
      colourValue={colourValue}
    />
   </svg>
  )
}

export default App
