import React from 'react'
import './SearchBar.css'





class SearchBar extends React.Component {
    render() {
        return (
            <div>
                
                     <input type="text"  placeholder="Recherche..." />
	                 <button  type="submit" className="boutonLoupe" ><img className="loupe" src="https://image.flaticon.com/icons/png/128/54/54527.png" ></img> </button>
                
            </div>
        )
    }
}

export default SearchBar;
