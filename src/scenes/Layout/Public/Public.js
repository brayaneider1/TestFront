import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '../../Home/Home';
import { Login } from '../../Auth/Login/Login';
import { Register } from '../../Auth/Register/Register';

export const Public = () => {
  return (
    <Router>
      <Switch >
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  )
}