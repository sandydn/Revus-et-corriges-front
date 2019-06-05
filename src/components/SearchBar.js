import React from 'react'
import './SearchBar.css'





class SearchBar extends React.Component {
    render() {
        return (
            <div>
                <form role="search" method="get" className='searchForm'>
                     <input className='inputSearch' type="text"  placeholder="Recherche..." />
	                 <button  type="submit" className="boutonLoupe" ><img className="loupe" src="https://image.flaticon.com/icons/png/128/54/54527.png" ></img> </button>
                     
                </form>
            </div>
        )
    }
}

export default SearchBar;
