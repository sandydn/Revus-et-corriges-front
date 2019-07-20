import React from 'react'
import ModalSearch from '../elements/ModalSearch.js';


class SearchBar extends React.Component {
    
    state = {  };

    render() {
                
        return (
            
            <div className="searchForm">
                <div>
                    <div>
                    <ModalSearch />
                    </div>
                </div>
                
            </div>        

        )
        
    }

}

export default SearchBar;
