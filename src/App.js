import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'
import Calendar from './components/Calendar'
import Menu from './components/Menu'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="dg">
          <img src="https://trello-attachments.s3.amazonaws.com/5ce27d2b766e4e0b604c85c9/936x500/0d501f2b8aed46802100818f7a936f74/rc_logo_final-021-e1521992230333.png"/>
          <Menu />
          {/* <NavLink exact to="/" activeClassName="selected"> Calendrier </NavLink> */}
          <Switch>
            <Route exact path="/" component={Calendar} />
          </Switch>
          </div>
      </BrowserRouter>
    )
  }
}

export default App;
