import { useState } from 'react'
import {useMigrantsData, useWorldAtlas} from './hooks'
import {DateHistogram, BubbleMap} from './components'
import './App.css'

const width = 1280
const height = width / 1.618033988
const dateHistogramSize = .45
const xValue = d => d['Reported Date']

const App = () => {
  const data = useMigrantsData()
  const atlas = useWorldAtlas()
  const [brushExtent, setBrushExtent] = useState()

  if (!data || !atlas) return <pre> Loading ... </pre>

  const filteredData = !brushExtent ? data : (
    data.filter( d => {
      const date = xValue(d)
      return date > brushExtent[0] && date < brushExtent[1]
    })
    )

  return (
    <svg width={width} height={height}>
      <BubbleMap
        data={filteredData}
        atlas={atlas}
      />
      <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          height={dateHistogramSize * height}
          width={width}
          setBrushExtent={setBrushExtent}
          xValue={xValue}
        />
      </g>
    </svg>
  )
}

export default App
