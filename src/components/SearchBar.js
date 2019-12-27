import React from 'react'
import ModalSearch from '../elements/ModalSearch.js'

const SearchBar = ({search}) => {
    
    return (
        <div className="searchForm">
            <div>
                <div>
                    <ModalSearch search={search}/>
                </div>
            </div>
        </div>        
    )
}

export default SearchBar
