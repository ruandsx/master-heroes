import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//importando paginas como rotas
import Home from './pages/Home';
import Login from './pages/LeaderBoard';
import LeaderBoard from './pages/Login';

export default function App() {
  return (
    <Router>
        <Switch>
          <Route path="/leaderboard" component={LeaderBoard}/>
          <Route path="/login" component={Login}/>
          <Route path="/" component={Home}/>
        </Switch>
    </Router>
  );
}