import React, { Component } from "react";
import Modal from 'react-modal';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';    

import { GetData } from '../utilis'
       
            
class ModalSearch extends Component {
        
    state = {
        isPaneOpen: false,
        eventData: []
    }

    componentDidMount() {
        Modal.setAppElement(this.el)
        const events = GetData('http://localhost:4000/a5/event')
        events.then((res) => {
            const events = Array.from(res.data)
            const eventData = events.map(e => e.titre)
            this.setState({eventData: eventData})
            console.log(eventData);
        })
    }      
        
            
    render() {           
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
                    <input placeholder='Recherche...' className='inputModal'></input>
                </div>
            </SlidingPane>
        </div>

    }
}

export default ModalSearch