import React, { Component } from 'react';
import Calendar from './components/Calendar'
import Menu from './components/Menu'

import './components/Logo.css';
import './App.css'
import Sign from './screen/Sign';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import SelectionForm from './screen/SelectionForm';
import FormCinema from './screen/FormCinema';

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
            <Route path="/login" component={Sign} />
            <Route path="/select-form" component={SelectionForm} />
            <Route path="/formcinema" component={FormCinema} />
          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;