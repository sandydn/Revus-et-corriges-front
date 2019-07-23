import React, { Component } from 'react'
import { Link, Route, BrowserRouter, Switch } from 'react-router-dom'
import axios from 'axios';

import Login from './components/Login'
import Sign from './screen/Sign'
import RegisterLogin from './components/RegisterLogin'

import './App.css'
import Calendar from './components/Calendar'
import MenuAdmin from './screen/MenuAdmin';
import Events from './screen/Events';
import Cinema from './screen/Cinema';
import Videos from './screen/Videos';
import Admin from './screen/Admin';
import VideoForm from './components/VideoForm';
import EditEvent from './components/EditEvent';

import CinemaForm from './components/CinemaForm';
import FormMovie from './components/FormMovie';
import Favicon from 'react-favicon';
import PrivateRoute from './components/PrivateRoute';
import Settings from './screen/Settings';
import EventForm from './components/EventForm';

class App extends Component {

  state = {
    email: '',
    password: '',
    showPassword: false,
    success: false,
    redirect: false,
    verified: false,
  };

  // Show password or not (icon-eye) //
  toggleShow = () => {
    this.setState({ showPassword: !this.state.showPassword });
  };

  // Change state with form admin //
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  // ON SUBMIT - router on axios d'appel form
  handleSubmit = event => {
    event.preventDefault()
    axios.post(`http://localhost:4000/auth/login/`, {
      admin_email: event.target.email.value,
      admin_password: event.target.password.value
    })
      .then((res) => {
        localStorage.setItem("token", res.headers["x-access-token"])
        this.setState({ success: true }, () => {
          setTimeout(() => this.setState({ success: false }), 1400);
          setTimeout(() => this.setState({ redirect: true }), 1400);
          setTimeout(() => this.protectedRoute(), 1400);
        });
      });
  };

  protectedRoute = () => {
    // Storage for token //
    const token = localStorage.getItem("token")
    axios({
      method: 'POST',
      url: "http://localhost:4000/auth/protected",
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    })
      // Verified if a token is correct //
      .then(res => {
        this.setState({
          verified: res.data.auth,
        })
      })
  };

  componentDidMount = () => {
    this.protectedRoute()
  };

  render() {

    return (
      <>
        <div>
          <Favicon url="https://revusetcorriges.files.wordpress.com/2018/03/rc_logo_final-021-e1521992230333.png?w=936" />
        </div>

        <BrowserRouter>
          <Switch>

            {/* Section CALENDRIER */}
            <Route exact path="/" render={(props) => <Calendar {...props} verif={this.state.verified} />} />

            {/* Section CONNEXION */}
            <Route path="/login" render={(props) => <Sign {...props}
              redirect={this.state.redirect}
              success={this.state.success}
              verif={this.state.verified}
              email={this.state.email}
              password={this.state.password}
              handleSub={this.handleSubmit}
              handleCha={this.handleChange}
              showPass={this.state.showPassword}
              toggleSho={this.toggleShow} />} />
            <Route exact path="/signin" component={Login} />
            
          {/* Section ADMIN  */}
          <PrivateRoute path="/menu-admin" component={MenuAdmin} />
          <Route path="/signup" component={RegisterLogin} />
          <Route path="/edit/:id" component={EditEvent} />

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