import React from "react";
import './App.css';
import Profile from './components/Profile';
import Trialfunction from './components/Trialfunction';
import NavBar from './components/NavBar';
import { Router, Route, Switch } from "react-router-dom";
import { Container } from "reactstrap";
import history from "./utils/history";

// fontawesome
import initFontAwesome from "./utils/initFontAwesome";
initFontAwesome();

function App() {
  return (
    <div className="App">
      <Router history={history}>
        <NavBar />
        <Container className="flex-grow-1 mt-5">
          <Switch>
            <Route path="/" exact component={Trialfunction} />
            <Route path="/profile" component={Profile} />
          </Switch>
        </Container>
      </Router>
    </div>
  );
}

export default App;
