import * as React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Home } from '../../Home/Home'

export const Private = () => {
  return (
    <Router>
      <Switch className="">
        <Route exact path="/" component={Home} />
      </Switch>
    </Router>
  )
}