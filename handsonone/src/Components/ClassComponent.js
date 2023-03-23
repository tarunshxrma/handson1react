import React, { Component } from 'react'
import "./Component.css"
class ClassComponent extends Component {
  render() {
    return (
      <div className='class'>
        <h1>This is created using Class Component</h1>
        <p>This is done using external css</p>
        <p style={{color:"blue"}}>This is done using inline css</p>
      </div>
    )
  }
}

export default ClassComponent