import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCars from "./components/TinderCards/TinderCards";
import ListMatch from "./components/ListMatch/ListMatch";
import GlobalStyled from "./GlobalStyled";

function App() {
  return (
    <div>
      <GlobalStyled />
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact>
            <TinderCars />
          </Route>
          <Route path="/list">
            <ListMatch />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
