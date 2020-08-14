import React from "react";
import {
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";

import Route from './Route';

//importando paginas como rotas
import Home from '../pages/Home';
import Login from '../pages/Login';
import LeaderBoard from '../pages/LeaderBoard';

export default function Routes() {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/leaderboard" isPrivate component={LeaderBoard}/>
          <Route path="/" isPrivate component={Home}/>
        </Switch>
    </Router>
  );
}