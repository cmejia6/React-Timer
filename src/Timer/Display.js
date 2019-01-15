import React from 'react'
import PropTypes from 'prop-types'
import '../styles/Display.scss'

const Display = props => {
    return (
      <div className="display">
        {props.time}
        <input className="input"/>

        {props.children}

      </div>
    )
}

Display.propTypes = {
  time : PropTypes.number.isRequired
}

export default Display