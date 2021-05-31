import React, { Component } from "react";
import styled from "styled-components";

const MusicControlContainer = styled.div`
  background: #282828;
  text-align: center;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 2;
  position: relative;
`;



export class Main extends Component {
  render() {
    return (
      <MusicControlContainer>
        <div>
         </div>
      </MusicControlContainer>
    );
  }
}

export default Main;
