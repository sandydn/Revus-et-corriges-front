import React from 'react';
import Logo from './components/Logo';

import './components/Logo.css';
import './App.css'
import Sign from './screen/Sign';
import {Switch, Route} from 'react-router-dom'
import SelectionForm from './screen/SelectionForm';

class App extends React.Component {
  render() {
    return (
      <div>
        <Logo />
        <Switch>
            <Route exact path="/login" component={Sign}/>
            <Route path="/select-form" component={SelectionForm} />
        </Switch>
      </div>
    );
  }
}

export default App;