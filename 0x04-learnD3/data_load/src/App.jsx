import { useState, useCallback, useEffect } from 'react'
import ReactDOM from 'react-dom'


const csvUrl = 'https://gist.githubusercontent.com/brk-a/659c36335d911689f290c27f1db7745d/raw/namedColoursCssAll.csv'

const message = data => {
  return `${Math.round(d3.csvFormat(data).length / 1024)}kB\n${data.length} obs\n${data.columns.length} vars`
}

function App() {
  const [data, setData] = useState(null)

  useEffect(() => {
    d3.csv(csvUrl).then(setData)
  }, [])

  return (
    <>
    <pre>
      {data ? message(data) : 'Loading...'}
    </pre>
    
    </>
  )
}

export default App
