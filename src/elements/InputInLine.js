import React from 'react'

const styleBase = {
  general: {
    padding: '5px'
  },
  input: {
    width: '100%',
    border: "none",
    outline: "none",
    padding: "5px",
    background: 'inherit',
    borderBottom: '1px solid black' 
  },
  span: {
    padding: "5px"
  },
  button: {
    float: 'right'
  }
}

const remove = (funcDel) => {
  funcDel() // suprime le dernier elemt du tab
}

const createButton = (del, funcDel) => {
  if (del)
    return (
      <button
      type="button"
      style={styleBase.button}
      onClick={() => remove(funcDel)}
      >X</button>
    )
}

const InputInLine = ({ keyState, title, style, func, value, index, del, funcDel }) => {
  return <div style={styleBase.general}>
    <span style={styleBase.span}>
      {title + " :" || "nothing :"}
    </span>
    
    {createButton(del, funcDel)}
    <input
      data-index={index}
      style={{ ...styleBase.input, ...style }}
      onChange={(e) => func && func(keyState, e)}
      value={value || ""}
    />
  </div>
}

export default InputInLine