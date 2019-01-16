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
            status : 'stopped'
        }

        this.inputSeconds = this.inputSeconds.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.stopTimer = this.stopTimer.bind(this)
        this.resetTimer = this.resetTimer.bind(this)
    }

  inputSeconds(secs){
    this.setState({seconds : secs})
  }

  startTimer(){
    if (this.state.status !== 'started'){
      this.setState({status : 'started'})

      this.interval = setInterval(() =>{

        if (this.state.seconds > 0){
          this.setState({seconds : this.state.seconds - 1})
        } else {
          this.setState({seconds : 0, status : null})
          clearInterval(this.interval)
        }
        
      }, 1000)
    }
  }

  stopTimer(){
    this.setState({status : 'stopped'})
    clearInterval(this.interval)
  }

  resetTimer(){
    this.setState({seconds : 0, status : 'stopped'})
  }

  render() {
    return (
      <div className="timer">
        <Display 
        time={this.state.seconds}
        onChange={this.inputSeconds}
        status={this.state.status}>

          <Controls 
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          resetTimer={this.resetTimer}
          status={this.state.status}/>

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