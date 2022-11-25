import React from 'react'
import {FaceContainer, BackgroundCircle, Eyes, Mouth} from './index'

const Face = () => {
    const width = 960
    const height = 500
    const centreX = width / 2
    const centreY =  height / 2
    const strokeWidth = 10
    const eyeOffsetX = 100
    const eyeOffsetY = 100
    const eyeRadius = 50
    const mouthWidth = 100
    const mouthRadius = 150
  
    return (
      <div className="App">
        <>
          <FaceContainer width={width} height={height} centreX={centreX} centreY={centreY}>
            <BackgroundCircle centreY={centreY} strokeWidth={strokeWidth}/>
            <Eyes eyeOffsetX={eyeOffsetX} eyeOffsetY={eyeOffsetY} eyeRadius={eyeRadius}/>
            <Mouth mouthRadius={mouthRadius} mouthWidth={mouthWidth}/>
        </FaceContainer>
        </>
      </div>
    )
}

export default Face