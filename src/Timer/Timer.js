import React, { Component } from 'react'
import Display from './Display'
import Controls from './Controls'
import '../styles/Timer.scss'

class Timer extends Component {
    constructor(){
        super()

        this.state ={
            seconds : 0,
            time : 0,
            status : null
        }
    }

  render() {
    return (
      <div className="timer">
        <Display time={this.state.time}>
          <Controls />
        </Display>
      </div>
    )
  }
}

export default Timer