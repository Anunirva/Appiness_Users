import React, { Component } from 'react';
import './App.css';
import Login from './components/Login';
import UserList from './components/UserList';
import NotFound from './components/NotFound';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/users" component={UserList} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
