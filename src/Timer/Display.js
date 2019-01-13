import React, { Component } from 'react'
import '../styles/Display.scss'

const Display = props => {
    return (
      <div className="display">
        {props.time}
        <input/>

      </div>
    )
}

export default Display