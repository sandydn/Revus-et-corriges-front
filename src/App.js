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
import FormCinema from './screen/FormCinema';
import FormVideo from './screen/FormVideo'

import Form from './components/Form'


class App extends Component {
  render() {
    return (
      <Form />)
  }
}

export default App;