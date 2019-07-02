import React, { Component } from 'react'

class Dropdown extends Component {

  state = {
    selectBdd: []
  }
  
  // componentDidMount() {
  //   axios.get(`http://localhost:attente de la route`)
  //   .then(result => {
  //       this.setState({ selectBdd: result.data })
  //   })
  // }

  

  render() {
    return (
      <div>
        <select>
        {/* .map sur select bdd  */}
        {/* {selectBdd.map(item => {<option key={item.id} value={item.chosequel}>{item.chosequel}</option>})} */}
          <option value="volvo">C.Lyan</option>
          <option value="saab">Sandy</option>
          <option value="opel">Kiran</option>
          <option value="audi">Solene</option>
          <option value="audi">Bertrand</option>
          <option value="Chaudar">Chaudar</option>
</select>
      </div>
    )
  }
}

export default Dropdown
