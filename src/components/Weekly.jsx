import React, {Component} from 'react'
import Week from './Week'
import Day from './Day'
import dataTest from "./dataTest.json"

class Weekly extends Component {
    state= {
        days:[]
    }

    componentDidMount(){
        this.setState({days: dataTest.filter((display)=> display.id <5)})
    }

    previousDays = () => {
        this.setState({days: dataTest.filter((display)=> display.id <5)})
    }

    nextDays = () => {
        this.setState({days: dataTest.filter((display)=> display.id >4)})
    }

    week = this.state.days.map((day) => <Day date={day.date} dataEvent={day.data} />)
    
    render() {
        return (
            <div className='weekly'>
                <div className='weeklyHead'>
                    <h1>Agenda Mars 2019</h1>
                </div>
                <div className='weeklyDisplay'>
                    <div onClick={this.previousDays}><i class="arrow left"></i></div>
                    <Week dataDays={this.state.days} />
                    <div onClick={this.nextDays}><i class="arrow right"></i></div>
                </div>
            </div>
        )
    }
}

export default Weekly