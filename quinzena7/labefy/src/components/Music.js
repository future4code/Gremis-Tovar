import React, { Component } from "react";
import styled from "styled-components";
import play from "../images/control-music/play.svg";
import pause from "../images/control-music/pause.svg";

const SongIconImage = styled.img`
  fill: rgba(255, 255, 255, 0.7);
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

class Music extends Component {
  state = {
    play: false,
    audio: new Audio(this.props.url),
  };

  componentDidMount() {
    this.state.audio.addEventListener("ended", () =>
      this.setState({ play: false })
    );
  }

  componentWillUnmount() {
    this.state.audio.removeEventListener("ended", () =>
      this.setState({ play: false })
    );
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.state.audio.play() : this.state.audio.pause();
    });
  };

  render() {
    return (
      <SongIconImage
        src={this.state.play ? pause : play}
        onClick={this.togglePlay}
      />
    );
  }
}

export default Music;
