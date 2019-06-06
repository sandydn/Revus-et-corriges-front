import React, { Component } from 'react';
import Menu from './components/Menu'
import RC from './pictures/RC.png'

import './components/Logo.css';
import './App.css'
import Sign from './screen/Sign';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Calendar from './components/Calendar'
import SelectionForm from './screen/SelectionForm';

import Formevent from './screen/Formevent';
import FormCine from './screen/FormCine';
import FormVideo from './components/FormVideo'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="dg">
          {/* <NavLink exact to="/" activeClassName="selected"> Calendrier </NavLink> */}
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route path="/login" component={Sign} />
            <Route path="/select-form" component={SelectionForm} />
            <Route path="/formevent" component={Formevent} />
            <Route path="/formcinema" component={FormCine} />
            <Route path="/formvideo" component={FormVideo} />

          </Switch>
          </div>
      </BrowserRouter>
    );
  }
}

export default App;