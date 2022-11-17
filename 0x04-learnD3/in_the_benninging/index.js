import React from 'react'
import ReactDOM from 'react-dom'

// console.log(React)
// console.log(ReactRouterDOM)
// console.log(ReactDOM)

const width = 960
const height = 500
const centreX = width / 2
const centreY =  height / 2
const strokeWidth = 10
const eyeOffetX = 90
const eyeOffsetY = 180
const eyeRadius = 50

const App = () => (
    <svg width={width} height={height}>
        <circle 
            r={centreY - strokeWidth / 2}
            cx={centreX} 
            cy={centreY} 
            fill="yellow" 
            stroke="black" 
            stroke-width="10"
        />
        <circle 
            r={eyeRadius}
            cx={centreX - eyeOffetX} 
            cy={centreY - eyeOffsetY}
            fill="black"
        />
        <circle 
            r={eyeRadius}
            cx={centreX + eyeOffetX} 
            cy={centreY - eyeOffsetY}
            fill="black"
        />
        <path 
            d="M 360 300 C 422.5 400, 547.5 400, 610 300" 
            stroke="black" 
            stroke-width='30' 
            fill="transparent"
        />
    </svg>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)