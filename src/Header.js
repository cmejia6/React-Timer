import React from 'react'
import './styles/Header.scss'
import PropTypes from 'prop-types'

const Header = props => {
  return (
    <div className="header nav">
      <h3> {props.title} </h3>
    </div>
  )
}

Header.propTypes = {
    title : PropTypes.string
}

export default Header

