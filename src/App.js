import React, { Component } from 'react'
import { Route, BrowserRouter, Switch } from 'react-router-dom'

import Login from './components/Login'
import Monthly from './components/Monthly'
import MenuAdmin from './screen/MenuAdmin'
import Sign from './screen/Sign'
import RegisterLogin from './components/RegisterLogin'
import Weekly from './components/Weekly'
import Events from './screen/Events'
import Cinema from './screen/Cinema'
import Videos from './screen/Videos'
import Form from './components/Form'

import './App.css'
// import { CommunicationEmail } from 'material-ui/svg-icons';
// import Calendar from './components/Calendar'
// import MenuAdmin from './screen/MenuAdmin';
// import Weekly from './components/Weekly'
// import Monthly from './components/Monthly'
// import Events from './screen/Events';
// import Cinema from './screen/Cinema';
// import Videos from './screen/Videos';
import Admin from './screen/Admin';
// import Formevent from './components/Formevent';
// import FormVideos from './components/FormVideos';


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
            <Route path="/admin" component={Admin} />
            <Route path="/admin-events" component={Events} />
            <Route path="/admin-cinema" component={Cinema} /> 
            <Route path="/admin-videos" component={Videos} />
            <Route path="/form" component={Form} />     
            {/* <Route path="/form-event" component={Formevent} /> */}
            {/* <Route path="/formevent" component={Formevent} /> */}
            {/* <Route path="/formcinema" component={FormCine} /> */}
            {/* <Route path="/formvideo" component={FormVideos} />             */}
          </Switch>
      </BrowserRouter>
      
    );
  }
}

export default App;