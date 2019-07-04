import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from './components/Login'
import Monthly from './components/Monthly'
import MenuAdmin from './screen/MenuAdmin'
import Sign from './screen/Sign'
import RegisterLogin from './components/RegisterLogin'
import Weekly from './components/Weekly'

import './App.css'


class App extends Component {

  render() {

    return (
      
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Weekly} />
            <Route path="/month" component={Monthly} />
            <Route path="/login" component={Sign} />
            <Route path="/select-form" component={MenuAdmin} />
            <Route exact path="/signin" component={Login} />
            <Route path="/signup" component={RegisterLogin} />      
          </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;