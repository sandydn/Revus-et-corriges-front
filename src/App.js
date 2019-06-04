import React, { Component } from 'react';
import Logo from './components/Logo';

import './components/Logo.css';
import './App.css'
import Sign from './screen/Sign';
import { Route, BrowserRouter, Switch, NavLink } from 'react-router-dom'
import Calendar from './components/Calendar'
import SelectionForm from './screen/SelectionForm';
import Formevent from './screen/Formevent';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <NavLink exact to="/" activeClassName="selected"> Calendrier </NavLink> */}
          <Logo />
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route path="/login" component={Sign} />
            <Route path="/select-form" component={SelectionForm} />
            <Route path="/formevent" component={Formevent} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;