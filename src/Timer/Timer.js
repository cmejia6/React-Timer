import React, { Component } from 'react'
import Display from './Display'
import Controls from './Controls'
import PropTypes from 'prop-types'
import '../styles/Timer.scss'

class Timer extends Component {
    constructor(){
        super()

        this.state ={
            seconds : 0,
            //time : 660,
            status : null
        }

        this.inputSeconds = this.inputSeconds.bind(this)
    }

  inputSeconds(secs){
    this.setState({seconds : secs})
  }

  render() {
    return (
      <div className="timer">
        <Display time={this.state.seconds}
        //value={this.state.seconds}
        onChange={this.inputSeconds}
        >

          <Controls />
        </Display>
      </div>
    )
  }
}

Timer.propType = {
  seconds : PropTypes.number.isRequired,
  //time : PropTypes.time,
  status : PropTypes.string
}

export default Timer