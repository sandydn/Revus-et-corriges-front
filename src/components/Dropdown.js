import React from 'react'

const style = {
  span: {
      borderBottom: '2px solid blue',
      padding: '5px',
  },
  divSelect: {
    display: 'none',
  },
  input:{
    border: 'none',
    borderBottom:'2px solid blue',
    padding:'5px',
  }
}

const displaySelect = (evt) => {
  const a = evt.target.nextSibling.nextSibling
  a.style.display= 'block'
}

const hideSelect = (evt) => {
  console.log("caché")
  const a = evt.target.nextSibling.nextSibling
  a.style.display= 'none'
}


const Dropdown = () => {
  return (
    <div>
      <span onPointerOver={hideSelect} onClick={displaySelect} style={style.span}>Choix :</span>
      <input style={style.input} type="text" />
      <div style={style.divSelect}>
        <p>choix 1</p>
        <p>choix 2</p>
        <p>choix 3</p>
        <p>choix 4</p>
        <p>choix 5</p>
        <p>choix 6</p>
      </div>

    </div>
  )
}

export default Dropdown

