import React, { Component } from "react";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  overflow-y: scroll;
  padding-top: 3rem;
  position: relative;
`;

const UpperNav = styled.div`
  background: #090909;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  color: white;
  padding: 0.5rem 2rem;
  position: fixed;
  top: 0;
  z-index: 2;
`;

const MainContent = styled.div`
  color: white;
`;

export class Main extends Component {
  render() {
    return (
      <MainContainer>
        <UpperNav>Labefy - Música para a sua vida</UpperNav>
        <MainContent>
          <div></div>
          <div>{this.props.renderPage()}</div>
          <div></div>
        </MainContent>
      </MainContainer>
    );
  }
}

export default Main;
