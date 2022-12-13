// import { useData } from './hooks'
import { useState } from 'react'
import { Dropdown } from './components'
import './App.css'

// const width = 1280
// const height = 791

const options = [
  { value: 'dog', label: 'Dog' },
  { value: 'cat', label: 'Cat' },
  { value: 'hamster', label: 'Hamster' },
  { value: 'parrot', label: 'Parrot' },
  { value: 'spider', label: 'Spider' },
  { value: 'goldfish', label: 'Goldfish' }
];

const initialValue = 'hamster'

function App() {
  // const data = useData()

  // if (!data) return <pre> Loading ... </pre>

  const [selectedValue, setSelectedValue] = useState(initialValue)

  return (
    <div className='App'>
      <label htmlFor="pet-select">Choose a pet:</label>
      <Dropdown
        options={options}
        id="pet-select"
        selectedValue={selectedValue}
        onSelectedValueChange={setSelectedValue}
      />
    </div>
    // <svg width={width} height={height}>
    //   <g transform={`translate(${width}, ${height})`}></g>
    // </svg>
  )
}

export default App
