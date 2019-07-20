import React, {Component} from 'react';

class SearchResult extends Component {

    render(){
        return(
            <h2 onClick={this.props.search} id={this.props.date}>{this.props.titre}</h2>
        )
    }
}

export default SearchResult