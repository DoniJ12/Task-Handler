import PropTypes from 'prop-types'
import React from 'react'
const Button = ({color, text, onClick}) => {
  return (
    <button onClick={onClick} className= 'btn' style= {{backgroundColor: color}}>{text}</button>
  )
}

Button.defaultProps = {
  color: 'purple',
}
Button.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string
}

export default Button