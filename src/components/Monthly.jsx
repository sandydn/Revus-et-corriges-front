import React, {Component} from 'react'
import WeekOfMonth from './weekOfMonth'
import DaysOfMonth from './DaysOfMonth'
import dataTestMonth1 from "./dataTestMonth1.json"

class Monthly extends Component {
    state= {
        days:[]
    }

    componentDidMount(){
      this.setState({days: dataTestMonth1})
    }

    // previousMonth = () => {
    //     this.setState({days: dataTest.filter((display)=> display.id <5)})
    // }

    // nextMonth = () => {
    //     this.setState({days: dataTest.filter((display)=> display.id >4)})
    // }

    week = this.state.days.map((day) => <DaysOfMonth date={day.date} dataEvent={day.data} />)
    
    render() {
        return (
            <div className='monthly'>
                <div className='monthlyHead'>
                    <h1>Agenda Mars 2019</h1>
                </div>
                <div className='monthlyDisplay'>
                    {/* <div onClick={this.previousMonth}><i class="arrow left"></i></div> */}
                    <WeekOfMonth dataDays={this.state.days} />
                    {/* <div onClick={this.nextMonth}><i class="arrow right"></i></div> */}
                </div>
            </div>
        )
    }
}





export default Monthly