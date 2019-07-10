import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/js/all.js'

const style = {
  common: {
    border: 'none',
    outline: 'none'
  },
  general: {
    padding: '5px',
    borderBottom: '2px solid blue'
  },
  span: {
    padding: '5px'
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

const handleSearch = (evt, data, setDataSelect) => {
  // secure if data no gotten
  if (!data) return ;
  // create new array after filter
  let filtre = data.filter(e => {
    let c = evt.target.value.toLowerCase().split(/[\s,]+/)
    c = c[c.length - 1]
    return c.length ? e.title.toLowerCase().search(c) > -1 : false
  })
  // if length of filter > 5 --- cut it
  if (filtre.length > 5)
    filtre = filtre.slice(0, 4)
  
  // update with Hook -- for rendering
  setDataSelect(filtre)
  // display or hide if array no empty
  const div =  evt.target.nextSibling
  div.style.display = filtre[0] ? 'block' : 'none'
}

const updateInput = (evt, func) => {
  const newValue = evt.target.innerHTML
  const input = evt.target.parentNode.previousSibling
  // after click hide select
  evt.target.parentNode.style.display = 'none'
  // cursor inside input
  input.focus()
  // create array of input value
  const tabInput = input.value.split(/[\s,]+/)
  // last value = newValue
  tabInput[tabInput.length - 1] = newValue
  // input Value take tab joint or newValue
  input.value = tabInput.length - 1 ? tabInput.join(', ') + ', ' : newValue + ', '
  // parent can get last update value
  func && func(input.value)
}

const DropDownInlineSpec = ({title, data, func}) => {
  // data after filter rendering 
  const [dataSelect, setDataSelect] = useState([])

  return (
    <div style={{...style.common, ...style.general}}>
      
      <span style={{ ...style.common, ...style.span}}>
        {(title && title) || 'Default'} <i className="fas fa-caret-down"></i> :
      </span>
     
      <input
        style={{ ...style.common, ...style.input}}
        onChange={(e) => handleSearch(e, data, setDataSelect)}
        type="text"
      />

      <div
        className='drop-down-div-select'
        style={{ ...style.common, ...style.divSelect}}
      >
        { 
          dataSelect.map((e, i) => <button
            style={{ ...style.common, ...style.button}}
            key={`a-select--${i}`}
            onClick={(e) => updateInput(e, func)}
            onMouseOver={(e) => e.target.style.background = 'linear-gradient(to left, #fff, #A9DCFF)'}
            onMouseOut={(e) => e.target.style.background = 'white'}
            onFocus={(e) => e.target.style.background = 'linear-gradient(to left, #fff, #A9DCFF)'}
            onBlur={(e) => e.target.style.background = 'white'}
          >
            {e.title}
          </button>)
        }
      </div>
    </div>
  )
}

export default DropDownInlineSpec