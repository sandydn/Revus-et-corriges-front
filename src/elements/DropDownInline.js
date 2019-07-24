import React from 'react'
import '@fortawesome/fontawesome-free/js/all.js'

const styleBase = {
  common: {
    border: 'none',
    outline: 'none'
  },
  general: {
    padding: '15px 5px',
  },
  buttonClick: {
    background: 'inherit',
    fontSize: 'inherit',
    padding: '5px',
    cursor: 'pointer'
  },
  divSelect: {
    position: 'absolute',
    background: 'white',
    display: 'none'
  },
  input: {
    background: 'inherit',
    padding: '5px',
    borderBottom: '1px solid black'
  },
  button: {
    textAlign: 'left',
    width: '200%',
    fontSize: 'inherit',
    display: 'block',
    cursor: 'pointer',
    margin: '0',
    padding: '10px'
  }
}

const handleDisplay = (evt, boolean) => {
  const div = evt.target.nextSibling.nextSibling
  div.style.display = boolean ? 'block' : 'none'
}

const handleSelect = (evt, func, keyState) => {
  const input = evt.target.parentNode.previousSibling
  input.value = evt.target.innerHTML
  const value = evt.target.getAttribute('data-id')
  func && func(keyState, value)
}

const DropDownInline = ({ title, data, func, keyState }) => {

  return (
    <div style={{ ...styleBase.common, ...styleBase.general }}>

      <button
        type='button'
        style={{ ...styleBase.common, ...styleBase.buttonClick }}
        onFocus={(e) => handleDisplay(e, 1)}
        onBlur={(e) => handleDisplay(e, 0)}
      >
        {(title && title) || 'Default'} <i className="fas fa-caret-down"></i> :
      </button>

      <input
        style={{ ...styleBase.common, ...styleBase.input }}
        type="text"
        disabled
      />

      <div
        className='drop-down-div-select'
        style={{ ...styleBase.common, ...styleBase.divSelect }}
      >
        {
          data && data.map((e, i) => <button
            style={{ ...styleBase.common, ...styleBase.button }}
            data-id={i + 1}
            key={`a-select--${i}`}
            onMouseDown={(e) => handleSelect(e, func, keyState)}
            onMouseOver={(e) => e.target.style.background = 'linear-gradient(to left, #fff, silver)'}
            onMouseOut={(e) => e.target.style.background = 'white'}
            onFocus={(e) => e.target.style.background = 'linear-gradient(to left, #fff, silver)'}
            onBlur={(e) => e.target.style.background = 'white'}
          >
            {e}
          </button>)
        }
      </div>
    </div>
  )
}

export default DropDownInline