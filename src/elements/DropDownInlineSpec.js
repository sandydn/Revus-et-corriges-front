import React, { useState } from 'react'
import '@fortawesome/fontawesome-free/js/all.js'

const style = {
  common: {
    border: 'none',
    outline: 'none'
  },
  general: {
    padding: '5px',
    marginTop: '10px',
  },
  span: {
    padding: '5px'
  },
  divSelect: {
    margin: '0',
    padding: '0',
    position: 'absolute',
    background: 'white',
    display: 'none'
  },
  input: {
    background: 'inherit',
    width: 'auto',
    padding: '5px',
    width: '100%',
    borderBottom: '1px solid black'
  },
  button: {
    display: 'block',
    cursor: 'pointer',
    margin: '0',
    padding: '10px'
  },
  buttonCreate: {
    display: 'block',
    cursor: 'pointer',
    margin: '0',
    padding: '10px',
    float: 'right'
  }
}

const handleSearch = (evt, data, setDataSelect) => {
  // console.log("allo", data);
  // secure if data no gotten
  if (!data) return ;
  // console.log("still here", data);
  // create new array after filter
  let filtre = data.filter(e => {
    // console.log(data, e);
    let c = evt.target.value.toLowerCase().split(/[\s,]+/)
    c = c[c.length - 1]
    return c.length ? e.toLowerCase().search(c) > -1 : false
    // console.log(evt);
  })
  // if length of filter > 5 --- cut it
  if (filtre.length > 5)
  filtre = filtre.slice(0, 4)
  // update with Hook -- for rendering
  filtre.length && setDataSelect(filtre)
  // display or hide if array no empty
  const div =  evt.target.nextSibling
  div.style.display = filtre[0] ? 'block' : 'none'
}

const updateInput = (evt, func, keyState) => {
  const newValue = evt.target.innerHTML
  const input = evt.target.parentNode.previousSibling
  // after click hide select
  evt.target.parentNode.style.display = 'none'
  // cursor inside input
  input.focus()
  // create array of input value
  const tabInput = input.value.split(/,\s|,/)
  // last value = newValue
  tabInput[tabInput.length - 1] = newValue
  // input Value take tab joint or newValue
  input.value = tabInput.length ? tabInput.join(', ') + ', ' : newValue + ', '
  // parent can get last update value
  func && func(keyState, input.value)
}

const createButton = (button, funcButton, buttonValue) => {
  if (button)
    return (
      <button
        type="button"
        style={style.buttonCreate}
        onClick={funcButton}
      >{buttonValue}</button>
    )
}

const DropDownInlineSpec = ({title, data, func, keyState, button, funcButton, buttonValue, del, funcDel}) => {
  // data after filter rendering 
  const [dataSelect, setDataSelect] = useState([])
  return (
    <div style={{...style.common, ...style.general}}>

      <span style={{ ...style.common, ...style.span}}>
        {(title && title) || 'Default'} <i className="fas fa-chevron-right fa-xs"></i> :
      </span>
      {createButton(button, funcButton, buttonValue, del, funcDel)}
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
            type="button"
            key={`a-select--${i}`}
            onClick={(e) => updateInput(e, func, keyState)}
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

export default DropDownInlineSpec