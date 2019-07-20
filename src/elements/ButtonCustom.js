import React from 'react'

const styleBase = {
  button: {
    cursor: 'pointer',
    lineHeight: '3em',
    fontSize: '0.8em'
  }
}

const ButtonCustom = ({ title, type, onClick, style, className}) => {
  return (
    <button
      className={className}
      style={{...styleBase.button, ...style}}
      type={type}
      onClick={onClick}
    >
      {title}
    </button>
  )
}

export default ButtonCustom