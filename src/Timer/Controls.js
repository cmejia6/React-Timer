import React, { Component } from 'react'
import '../styles/Controls.scss'

const Controls = props => {
  return (
    <div>
      {props.status !== 'started' 
      && <button type="button" className="buttons btn btn-success"
      onClick={props.startTimer}> 
        Start
      </button>}

      {props.status === 'started'
      && <button type="button" className="buttons btn btn-secondary"
      onClick={props.stopTimer}>
        Stop
      </button>}
      
      <button className="buttons btn btn-primary"
      onClick={props.resetTimer}>
        Reset
      </button>
    </div>
  )
}

export default Controls