import {useMigrantsData, useWorldAtlas} from './hooks'
import {DateHistogram, BubbleMap} from './components'
import './App.css'

const width = 1280
const height = width / 1.618033988
const dateHistogramSize = .45

const App = () => {
  const data = useMigrantsData()
  const atlas = useWorldAtlas()

  if (!data || !atlas) return <pre> Loading ... </pre>

  return (
    <svg width={width} height={height}>
      <BubbleMap
        data={data}
        atlas={atlas}
      />
      <g transform={`translate(0, ${height - dateHistogramSize * height})`}>
        <DateHistogram
          data={data}
          height={dateHistogramSize * height}
          width={width}
        />
      </g>
    </svg>
  )
}

export default App
