import React, { Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Admin from './screen/Admin';
import Cinema from './screen/Cinema';
import Events from './screen/Events';
import Form from './components/Form';
import Monthly from './components/Monthly'
import Sign from './screen/Sign';
import Videos from './screen/Videos';
import Weekly from './components/Weekly'

import './App.css'
// import Calendar from './components/Calendar'
// import SelectionForm from './screen/SelectionForm';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          {/* <NavLink exact to="/" activeClassName="selected"> Calendrier </NavLink> */}
          <Switch>
            <Route exact path="/" component={Weekly} />
            <Route path="/month" component={Monthly} />
            <Route path="/login" component={Sign} />
            <Route path="/admin" component={Admin} />
            {/* <Route path="/formcine" component={FormCine} />
            <Route path="/formevent" component={Formevent} /> */}
            <Route path="/admin-events" component={Events} />
            <Route path="/admin-cinema" component={Cinema} />
            <Route path="/admin-videos" component={Videos} />
            <Route path="/form" component={Form} />
            {/* <Route path="/formevent" component={Formevent} /> */}
            {/* <Route path="/formcinema" component={FormCine} /> */}
            {/* <Route path="/formvideo" component={FormVideo} />             */}
          </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;