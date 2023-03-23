import React from 'react'
import "./Component.css"

const FunctionalComponent = () => {
  return (
    <div className='functional'>
        <h1>This is created using Functional Component</h1>
        <p>This is done using external css</p>
        <p style={{color:"blue"}}>This is done using inline css</p>
    </div>
  )
}

export default FunctionalComponent