import React from 'react'

const Eyes = ({eyeOffsetX, eyeOffsetY, eyeRadius}) => (
    <>
      <circle 
        r={eyeRadius}
        cx={- eyeOffsetX} 
        cy={- eyeOffsetY}
        fill="black"
      />
            <circle 
        r={eyeRadius}
        cx={eyeOffsetX} 
        cy={- eyeOffsetY}
        fill="black"
      />
  
    </>

)

export default Eyes