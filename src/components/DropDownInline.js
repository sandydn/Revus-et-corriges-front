import React from 'react'
import '@fortawesome/fontawesome-free/js/all.js'

const styleBase = {
  common: {
    border: 'none',
    outline: 'none'
  },
  general: {
    padding: '5px',
    borderBottom: '2px solid blue'
  },
  buttonClick: {
    padding: '5px',
    cursor: 'pointer'
  },
  divSelect: {
    position: 'absolute',
    background: 'white',
    borderLeft: '2px solid blue',
    display: 'none'
  },
  input: {
    padding: '5px'
  },
  button: {
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
  func && func(keyState, evt.target.getAttribute('data-id'))
}

const DropDownInline = ({ title, data, func, keyState }) => {

  return (
    <div style={{ ...styleBase.common, ...styleBase.general }}>

      <button
        style={{ ...styleBase.common, ...styleBase.buttonClick }}
        onFocus={(e) => handleDisplay(e, 1)}
        onBlur={(e) => handleDisplay(e, 0)}
      >
        {(title && title) || 'Default'} <i className="fas fa-caret-down"></i> :
      </button>

      <input
        style={{ ...styleBase.common, ...styleBase.input }}
        // onChange={(e) => handleSearch(e, data, setDataSelect)}
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
            onMouseOver={(e) => e.target.style.background = 'linear-gradient(to left, #fff, #A9DCFF)'}
            onMouseOut={(e) => e.target.style.background = 'white'}
            onFocus={(e) => e.target.style.background = 'linear-gradient(to left, #fff, #A9DCFF)'}
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