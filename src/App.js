import React, { Component } from 'react'
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LoginForm from '../src/components/login/LoginForm'
import Home from '../src/components/HomeRouter/Home'
import Error from '../src/components/Errorpath/ErrorPath'

class App extends Component {

  render() {
    return (
      <div className='App.css'>

      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LoginForm} />
          <Route exact path="/home" component={Home} />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
      
      </div>
    )
  }
}

export default App