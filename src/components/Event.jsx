import React, { Component } from 'react'

class Event extends Component{
    state={
        classType:''
    }
    picEvent = () => {

        if (this.props.picture === "") {
            return ""
        } else {
            return this.props.title
        }
    }
    changeClass = () => {
        this.props.type === 2 ? this.setState({classType: 'event important'}) : this.setState({classType: 'event regular'})
    }

    componentDidMount = () => {
        this.changeClass()
    }

    render(){
    return( 
        <div className={this.state.classType}>
            <h2>{this.props.title}</h2>
            <p>{this.props.comment}</p>
            <img src={this.props.picture} alt={this.props.picEvent} />
            
        </div>
    )
}
}

export default Event