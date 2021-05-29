import React, { Component } from "react";
import next from "../images/control-music/next.svg";
// import pause from "../images/control-music/pause.svg";
import play from "../images/control-music/play.svg";
import prev from "../images/control-music/prev.svg";
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

const MusicControlImg = styled.img`
  width: 60%;
`;

export class Main extends Component {
  render() {
    return (
      <MusicControlContainer>
        <div>
          <MusicControlImg src={prev} alt="voltar"></MusicControlImg>
        </div>
        <div>
          <MusicControlImg src={play} alt="play"></MusicControlImg>
        </div>
        {/* <div>
          <MusicControlImg src={pause} alt="pause"></MusicControlImg>
        </div> */}
        <div>
          <MusicControlImg src={next} alt="avançar"></MusicControlImg>
        </div>
      </MusicControlContainer>
    );
  }
}

export default Main;
