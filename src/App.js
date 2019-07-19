import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from './components/Login'
import Sign from './screen/Sign'
import RegisterLogin from './components/RegisterLogin'

import './App.css'
import Calendar from './components/Calendar'
import MenuAdmin from './screen/MenuAdmin';
import Weekly from './components/Weekly'
import MonthlyV2 from './components/MonthlyV2'
import Events from './screen/Events';
import Cinema from './screen/Cinema';
import Videos from './screen/Videos';
import Admin from './screen/Admin';
import VideoForm from './components/VideoForm';
import CinemaForm from './components/CinemaForm';
import FormMovie from './components/FormMovie';
import Favicon from 'react-favicon';
import PrivateRoute from './components/PrivateRoute';
import Settings from './screen/Settings';
import EventForm from './components/EventForm';

class App extends Component {

  render() {

    return (
      <>
      <div>
      <Favicon url="https://revusetcorriges.files.wordpress.com/2018/03/rc_logo_final-021-e1521992230333.png?w=936" />
      </div>
      <BrowserRouter>
        <Switch>

            {/* Section CALENDRIER */}
            <Route exact path="/" component={Calendar} />


          {/* Section CONNEXION */}
          <Route path="/login" component={Sign} />
          <Route exact path="/signin" component={Login} />


          {/* Section ADMIN  */}
          <PrivateRoute path="/menu-admin" component={MenuAdmin} />
          <Route path="/signup" component={RegisterLogin} />
          <Route path="/admin" component={Admin} />
          <Route path="/admin-events" component={Events} />
          <Route path="/admin-cinema" component={Cinema} />
          <Route path="/admin-videos" component={Videos} />
          <Route path="/admin-movie-form" component={FormMovie} />
          <Route path="/admin-events-form" component={EventForm} />
          <Route path="/admin-cinema-form" component={CinemaForm} />
          <Route path="/admin-videos-form" component={VideoForm} />
          <Route path="/parametre" component={Settings} />
        </Switch>
      </BrowserRouter>

      </>
    );
  }
}

export default App;