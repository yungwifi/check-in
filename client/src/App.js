import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import Map from './components/Map'

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/map" component={Map} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
