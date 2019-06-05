import React, {Component} from 'react'
import Week from './Week'
import Day from './Day'
import dataTestMonth from "./dataTestMonth.json"

class Monthly extends Component {
    state= {
        days:[]
    }

    componentDidMount(){
        this.setState({days: dataTestMonth})
    }

    // previousMonth = () => {
    //     this.setState({days: dataTest.filter((display)=> display.id <5)})
    // }

    // nextMonth = () => {
    //     this.setState({days: dataTest.filter((display)=> display.id >4)})
    // }

    week = this.state.days.map((day) => <Day date={day.date} dataEvent={day.data} />)
    
    render() {
        return (
            <div className='weekly'>
                <div className='weeklyHead'>
                    <h1>Agenda Mars 2019</h1>
                </div>
                <div className='weeklyDisplay'>
                    {/* <div onClick={this.previousMonth}><i class="arrow left"></i></div> */}
                    <Week dataDays={this.state.days} />
                    {/* <div onClick={this.nextMonth}><i class="arrow right"></i></div> */}
                </div>
            </div>
        )
    }
}





export default Monthly