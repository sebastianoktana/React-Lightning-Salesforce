import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home.react';
import Risk from './Risk.react';
import Users from './Users.react';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/risk' component={Risk}/>
      <Route exact path='/users' component={Users}/>
    </Switch>
  </main>
)

export default Main;