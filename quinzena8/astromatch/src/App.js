import React from "react";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCars from "./components/TinderCards/TinderCards";
import ListMatch from "./components/ListMatch/ListMatch";
import GlobalStyled from "./GlobalStyled";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 1024px;
  margin: 0 auto;
`;

function App() {
  return (
    <Container>
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
    </Container>
  );
}

export default App;
