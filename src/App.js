import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from './components/Login'
import Sign from './screen/Sign'
import RegisterLogin from './components/RegisterLogin'

import './App.css'
import Calendar from './components/Calendar'
import MenuAdmin from './screen/MenuAdmin';
import Weekly from './components/Weekly'
import Monthly from './components/Monthly'
import Events from './screen/Events';
import Cinema from './screen/Cinema';
import Videos from './screen/Videos';
import Retro from './screen/Retro';
import Admin from './screen/Admin';
import FormEvent from './components/FormEvent';
import FormVideos from './components/FormVideos';
import FormCinema from './components/FormCinema';
import FormRetro from './components/FormRetro';


class App extends Component {

  render() {

    return (
      
      <BrowserRouter>
          <Switch>

            {/* Section CALENDRIER */}
            <Route exact path="/" component={Weekly} />
            <Route path="/month" component={Monthly} />


            {/* Section CONNEXION */}
            <Route path="/login" component={Sign} />
            <Route exact path="/signin" component={Login} />


           {/* Section ADMIN  */}
            <Route path="/menu-admin" component={MenuAdmin} />
            <Route path="/signup" component={RegisterLogin} />      
            <Route path="/admin" component={Admin} />
            <Route path="/admin-events" component={Events} />
            <Route path="/admin-cinema" component={Cinema} />
            <Route path="/admin-videos" component={Videos} />
            <Route path="/admin-retro" component={Retro} />
            <Route path="/form-event" component={FormEvent} />
            <Route path="/form-cinema" component={FormCinema} />
            <Route path="/form-video" component={FormVideos} />   
            <Route path="/form-retro" component={FormRetro} />         
          </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;