import React, { Component } from 'react'
import Display from './Display'
import Controls from './Controls'

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
      <div>
        <Display time={this.state.time}/>
        
      </div>
    )
  }
}

export default Timer