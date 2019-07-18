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
    padding: '10px',
    borderRadius: '2px'
  }
}

const TextareaCustom = ({func, keyState, value }) => {
  return (
    <div style={styleBase.general}>
      
      <label
        style={styleBase.label}
        htmlFor=""
      >
        Description :
      </label>
      
      <textarea
        onChange={(e) => func && func(keyState, e)}
        value={value || ""}
        style={styleBase.textarea}
        cols="100"
        rows="15"
      >

      </textarea>
    </div>
  )
}

export default TextareaCustom