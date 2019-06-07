import React from 'react'
import './SearchBar.css'


class SearchBar extends React.Component {
    render() {
        return (
            <form role="search" method="get" className='searchForm'>
                <input className='inputSearch' type="text" placeholder="Recherche..." />
                <button type="submit" className="boutonLoupe" ><img className="loupe" src="https://image.flaticon.com/icons/png/128/54/54527.png" alt="loupe" ></img> </button>
            </form>
        )
    }
}

export default SearchBar;
