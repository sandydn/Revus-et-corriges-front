import React, { Component } from "react";
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';  
import moment from "moment";  

import { GetData } from '../utilis'
import SearchResult from './SearchResult'
       
            
class ModalSearch extends Component {
        
    state = {
        isPaneOpen: false,
        eventData: [],
        searchResult: []
    }

    componentDidMount() {
        Modal.setAppElement(this.el)
        const events = GetData('http://localhost:4000/a5/event')
        events.then((res) => {
            const events = Array.from(res.data)
            const eventData = events.map((e) => e.titre )
            this.setState({eventData: events})
            console.log(events);
        })
    }      

    renderResults = () => {
        const results = this.state.searchResult.map((result) => <SearchResult titre={result.titre} date={moment(result.dateStart).format('DD MMM YYYY')} search={this.props.search}/>)
        return (results)
    }

    handleSearch = (e) => {
        this.setState({searchResult: this.state.eventData.filter((search) => search.titre.toLowerCase().includes(e.target.value.toLowerCase()))})
        // console.log(e.target.value)
    }
        
            
    render() {    
        console.log(this.state.searchResult);
               
        return <div ref={ref => this.el = ref}>
             <button 
                onClick={() => this.setState({ isPaneOpen: true })}
            >
                <img className="loupe" src="https://image.flaticon.com/icons/png/128/54/54527.png" alt='Recherche'/> 
            </button>
            <SlidingPane
                isOpen={ this.state.isPaneOpen }
                onRequestClose={ () => {
                    this.setState({ isPaneOpen: false });
                } 
                }>
                <div className='modalWrapper'>
                    <input placeholder='Recherche...' className='inputModal' onChange={this.handleSearch}></input>
                </div>
                {this.renderResults()}
            </SlidingPane>
        </div>

    }
}

export default ModalSearch