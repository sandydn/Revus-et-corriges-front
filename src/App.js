import React, { Component } from 'react';
import './App.css'
import Sign from './screen/Sign';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Calendar from './components/Calendar'
import SelectionForm from './screen/SelectionForm';
import Formevent from './screen/Formevent';
import FormCinema from './screen/FormCinema';
import FormVideo from './screen/FormVideo';
import Login from './components/Login';
import RegisterLogin from './components/RegisterLogin';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          {/* <NavLink exact to="/" activeClassName="selected"> Calendrier </NavLink> */}
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route path="/login" component={Sign} />
            <Route path="/select-form" component={SelectionForm} />
            <Route path="/formevent" component={Formevent} />
            <Route path="/formcinema" component={FormCinema} />
            <Route path="/formvideo" component={FormVideo} />
            <Route exact path="/signin" component={Login} />
            <Route path="/signup" component={RegisterLogin} />      
          </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;