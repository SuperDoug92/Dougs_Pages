import React from "react";
import './App.css';
// import Profile from './components/Profile';
// import Trialfunction from './components/Trialfunction';
import NavBar from './components/NavBar';
// import { Route, Switch } from "react-router-dom";
// import { Container } from "reactstrap";

// fontawesome
// import initFontAwesome from "./utils/initFontAwesome";
// initFontAwesome();

function App() {
  return (
    <div className="App">
        <NavBar />
        {/* <Container className="flex-grow-1 mt-5"> */}
          {/* <Switch>
            <Route path="/" exact component={Trialfunction} />
            <Route path="/profile" component={Profile} />
          </Switch> */}
        {/* </Container> */}
    </div>
  );
}

export default App;
