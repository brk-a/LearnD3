import { useData } from './hooks'
import {ChoroplethMap, ColourLegend} from './components'
import './App.css'
import { render } from 'react-dom'

const svg = d3.select('svg')
const choroplethMapG = svg.append('g')
const colourLegendG = svg.append('g')
  .attr('transform', `translate(40, 310)`)

const colourScale = d3.scaleOrdinal()

//const colourValue = d => d.properties.income_grp
const colourValue = d => d.properties.economy

let selectedColourValue
let features

const onClick = d => {
  selectedColourValue = d
  render()
}

const App = () => {
  const data = useData()

  if (!data) return <pre>Loading ...</pre>

  data.then(countries => {
    features = countries.features
    render()
  })
  
  const render = () => {
    colourScale.domain(features.map(colourValue))
      .domain(colourScale.domain().sort().reverse())
      .range(d3.schemeSpectral[colourScale.domain().length])
  
    colourLegendG.call(ColourLegend, {
      colourScale,
      circleRadius: 8,
      spacing: 20,
      textOffset: 12,
      backgroundRectWidth: 235,
      onClick,
      selectedColourValue
    })
  
    choroplethMapG.call(ChoroplethMap, {
      features,
      colourScale,
      colourValue,
      selectedColourValue
    })
  }

  // return (
  //   ''
  // )
}

export default App
