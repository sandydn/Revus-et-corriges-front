import React from 'react';

const styleBase = {
  general: {
    marginTop: '10px',
    padding: '5px'
  },
  label: {
    display: 'block'
  },
  textarea: {
    border: 'none',
    borderRadius: '2px'
  }
}

const TextareaCustom = ({funct, keyState, value }) => {
  return (
    <div style={styleBase.general}>
      
      <label
        style={styleBase.label}
        htmlFor=""
      >
        Description :
      </label>
      
      <textarea
        onChange={(e) => funct && funct(keyState, e)}
        value={value || ""}
        style={styleBase.textarea}
        cols="55"
        rows="10"
      >

      </textarea>
    </div>
  )
}

export default TextareaCustom