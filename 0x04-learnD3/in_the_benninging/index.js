import React from 'react'
import ReactDOM from 'react-dom'

// console.log(React)
// console.log(ReactRouterDOM)
// console.log(ReactDOM)

const App = () => (
    <h1>Testing JSX...</h1>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)