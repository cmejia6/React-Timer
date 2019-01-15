import React, { Component } from 'react'
import '../styles/Controls.scss'

const Controls = props => {
  return (
    <div>
      <button type="button" className="buttons btn btn-success"> 
        Start
      </button>
      
      <button className="buttons btn btn-primary">
        Stop
      </button>
    </div>
  )
}

export default Controls