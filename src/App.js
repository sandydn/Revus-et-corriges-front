import React, { Component } from 'react';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'
import Calendar from './components/Calendar'

import './App.css';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
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
