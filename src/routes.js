import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//importando paginas como rotas
import Home from './pages/Home';
import Login from './pages/Login';
import LeaderBoard from './pages/LeaderBoard';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/leaderboard" component={LeaderBoard}/>
          <Route path="/" component={Home}/>
        </Switch>
    </Router>
  );
}