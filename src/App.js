import React, { Component } from 'react';
import Calendar from './components/Calendar'
import Menu from './components/Menu'

import './components/Logo.css';
import './App.css'
import Sign from './screen/Sign';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import SelectionForm from './screen/SelectionForm';
import Weekly from './components/Weekly'
import Monthly from './components/Monthly'
import Login from './components/Login';
import RegisterLogin from './components/RegisterLogin';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          {/* <NavLink exact to="/" activeClassName="selected"> Calendrier </NavLink> */}
          <Switch>
            <Route exact path="/" component={Weekly} />
            <Route path="/month" component={Monthly} />
            <Route path="/login" component={Sign} />
            <Route path="/select-form" component={SelectionForm} />
            <Route path="/formevent" component={Formevent} />
            <Route path="/formcinema" component={FormCine} />
            <Route path="/formvideo" component={FormVideo} />
            <Route exact path="/signin" component={Login} />
            <Route path="/signup" component={RegisterLogin} />      
          </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;