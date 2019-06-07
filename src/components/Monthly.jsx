import React, {Component} from 'react'
import WeekOfMonth from './weekOfMonth'
import DaysOfMonth from './DaysOfMonth'
import dataTestMonth1 from "./dataTestMonth1.json"
import { Route, BrowserRouter, Switch, Link } from 'react-router-dom'
import Menu from './Menu'
// import moment from "moment"

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
            <div className='Calendar'>
            <div className='navbar'>
            <Menu />
            <Link to="/select-form" ><input type="submit" value="Admin" /></Link>
            <Link to="/login" ><input type="submit" value="Login" /></Link>
            <Link to="/"><input type="submit" value="Weekly" /></Link>
        </div>
            <div className='monthly'>
                <div className='monthlyHead'>
                    <h1>Agenda Mars 2019</h1>
                </div>

                <div className="dayzOfWeek">
                  <h1>LUNDI</h1>
                  <h1>MARDI</h1>
                  <h1>MERCREDI</h1>
                  <h1>JEUDI</h1>
                  <h1>VENDREDI</h1>
                  <h1>SAMEDI</h1>
                  <h1>DIMANCHE</h1>
                </div>  

                <div className='monthlyDisplay'>
                    {/* <div onClick={this.previousMonth}><i class="arrow left"></i></div> */}
                    <WeekOfMonth dataDays={this.state.days} />
                    {/* <div onClick={this.nextMonth}><i class="arrow right"></i></div> */}
                </div>
            </div>
            </div>
        )
    }
}





export default Monthly