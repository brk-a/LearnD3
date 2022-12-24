import {useMigrantsData, useWorldAtlas} from './hooks'
import {DateHistogram, BubbleMap} from './components'
// import millify from 'millify'
import './App.css'

const width = 1280
const height = width / 1.618033988
const margin = {top: 20, right: 20, bottom: 80, left: 100}
const dateHistogramSize = 0.2

const App = () => {
  const data = useMigrantsData()
  const atlas = useWorldAtlas()

  if (!data || !atlas) return <pre> Loading ... </pre>

  return (
    <>
      {/* <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}></g>
      </svg> */}

      <svg width={width} height={height}>
        <g transform={`translate(${margin.left},${margin.top})`}>
          <BubbleMap
            data={data}
            atlas={atlas}
          />
          {/* <g transform={`translate(0, ${height * ( 1 - dateHistogramSize)})`}> */}
          <DateHistogram
            data={data}
          />
          {/* </g> */}
        </g>
      </svg>
    </>
  )
}

export default App
