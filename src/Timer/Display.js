import React from 'react'
import PropTypes from 'prop-types'
import TimeUnits from '../lib/TimeUnits'
import '../styles/Display.scss'

const Display = props => {

    return (
      <div className="display">
          {TimeUnits.secondsToClock(props.time)}
            {props.status !== 'started'
            && <input className="input" 
              onChange={event => props.onChange(event.target.value)}
              value={props.status === 'started' ? '' : props.seconds}
            />}

        {props.children}
      </div>
    )
}

Display.propTypes = {
  time : PropTypes.number.isRequired
}

export default Display