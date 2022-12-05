import { useState, useCallback, useEffect } from 'react'
// import ReactDOM from 'react-dom'
// import { Message } from './components'


const csvUrl = 'https://gist.githubusercontent.com/brk-a/659c36335d911689f290c27f1db7745d/raw/namedColoursCssAll.csv'

const  App = () => {
  const [data, setData] = useState(null)

  useEffect(() => {
    d3.csv(csvUrl).then(setData)
  }, [])

  return (
    <>
    <pre>
      {data ? Message(data) : 'Loading...'}
    </pre>
    
    </>
  )
}

export default App

