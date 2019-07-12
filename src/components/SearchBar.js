import React from 'react'
import show from './dataTest.json'


class SearchBar extends React.Component {
    
    state = { input:" " };


    handleChange = event => {
    this.setState({ input: event.target.value });
    };
    
    render() {
        
        

        let leshow = show.filter(input => show.data === input)
        

        return (
            
            <div className="searchForm">
                <form>
                    <div>
                    <input type="text" id="filter" placeholder="Recherche..." ref={input => leshow.map = input}  onChange={this.handleChange} value={ this.state.input}/>
                    <button  type="submit" className="boutonLoupe" ><img className="loupe" src="https://image.flaticon.com/icons/png/128/54/54527.png" alt='Recherche' ></img> </button>
                    </div>
                </form>
                
            </div>        

        )
        
    }

}

export default SearchBar;
