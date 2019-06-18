import React from 'react'
import './SearchBar.css'
import show from './dataTest.json'

class SearchBar extends React.Component {
    

        
    
state = { input:" " };

handleChange = event => {
  this.setState({ input: event.target.value });
};





    
    render() {
        
        console.log(show)

        let leshow = show.filter(input => show.data === input)
        console.log(leshow)

        return (
            


    


<div className="searchForm">
                <form>
                    <input type="text" id="filter" placeholder="Recherche..." ref={input => leshow.map = input}  onChange={this.handleChange} value={ this.state.input}/>
                    <button  type="submit" className="boutonLoupe" ><img className="loupe" src="https://image.flaticon.com/icons/png/128/54/54527.png" alt='Recherche' ></img> </button>

                </form>
                
                
                
            </div>




        

        )
        
    }

}

console.log(); 

export default SearchBar;
