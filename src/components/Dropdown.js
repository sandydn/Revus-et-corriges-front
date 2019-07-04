// import React, { Component } from 'react'

// class Dropdown extends Component {

//   state = {
//     selectBdd: []
//   }
  
//   // componentDidMount() {
//   //   axios.get(`http://localhost:attente de la route`)
//   //   .then(result => {
//   //       this.setState({ selectBdd: result.data })
//   //   })
//   // }

  

//   render() {
//     return (
//       <div>
//         <select>
//         {/* .map sur select bdd  */}
//         {/* {selectBdd.map(item => {<option key={item.id} value={item.chosequel}>{item.chosequel}</option>})} */}
//           <option value="volvo">C.Lyan</option>
//           <option value="saab">Sandy</option>
//           <option value="opel">Kiran</option>
//           <option value="audi">Solene</option>
//           <option value="audi">Bertrand</option>
//           <option value="Chaudar">Chaudar</option>
// </select>
//       </div>
//     )
//   }
// }

// export default Dropdown

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

