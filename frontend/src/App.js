import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import { Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import Trialfunction from "./components/Trialfunction";
import Pages from "./components/Pages";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/profile" component={Profile} />
        <Route path="/trialfunction" component={Trialfunction} />
        <Route path="/pages" component={Pages} />
      </Switch>
    </div>
  );
}

export default App;
