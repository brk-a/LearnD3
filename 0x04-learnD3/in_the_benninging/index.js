import React from 'react'
import ReactDOM from 'react-dom'
import {arc} from 'd3'

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
const mouthWidth = 30
const mouthRadius = 140

const mouthArc = arc()
    .innerRadius(mouthRadius)
    .outerRadius(mouthWidth)
    .startAngle(Math.PI * 2)
    .endAngle(Math.PI * 3/2)

const App = () => (
    <svg width={width} height={height}>
        <g transform={`translate(${centrex}, ${centreY})`}>
            <circle 
                r={centreY - strokeWidth / 2}
                fill="yellow" 
                stroke="black" 
                stroke-width="10"
            />
            <circle 
                r={eyeRadius}
                cx={- eyeOffetX} 
                cy={- eyeOffsetY}
                fill="black"
            />
            <circle 
                r={eyeRadius}
                cx={eyeOffetX} 
                cy={- eyeOffsetY}
                fill="black"
            />
            <path 
                d={mouthArc()} 
                stroke="black"  
                fill="transparent"
            />
        </g>
    </svg>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App/>, rootElement)