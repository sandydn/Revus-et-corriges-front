import React, { Component } from 'react';
import './App.css'
import Sign from './screen/Sign';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Calendar from './components/Calendar'
import Formevent from './components/Formevent';
import FormCine from './components/FormCine';
import FormVideo from './components/FormVideo';
import Events from './screen/Events';
import Cinema from './screen/Cinema';
import Videos from './screen/Videos'
import Admin from './screen/Admin';
import Event from './components/Event';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
          {/* <NavLink exact to="/" activeClassName="selected"> Calendrier </NavLink> */}
          <Switch>
            <Route exact path="/" component={Calendar} />
            <Route path="/login" component={Sign} />
            <Route path="/admin" component={Admin} />
            <Route path="/admin-events" component={Events} />
            <Route path="/admin-cinema" component={Cinema} />
            <Route path="/admin-videos" component={Videos} />
            <Route path="/formevent" component={Formevent} />
            <Route path="/formcinema" component={FormCine} />
            <Route path="/formvideo" component={FormVideo} />            
          </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;