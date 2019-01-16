import React from 'react'
import '../styles/Controls.scss'
import PropTypes from 'prop-types'

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

Controls.propTypes = {
  status : PropTypes.string
}

export default Controls