import React, { Component } from "react";
import styled from "styled-components";
import play from "../images/control-music/play.svg";
import pause from "../images/control-music/pause.svg";
import axios from "axios";

const SongIconImage = styled.img`
  fill: rgba(255, 255, 255, 0.7);
  width: 15px;
  height: 15px;
  cursor: pointer;
`;

class Music extends Component {
  constructor(props) {
    super(props);

    this.state = {
      play: false,
      audio: new Audio(this.props.url),
    };

    if (typeof this.props.url !== "string") {
      let song = this.props.url;
      axios.defaults.baseURL = "http://labefy-gremis.surge.sh/";
      axios.defaults.headers.get["Content-Type"] =
        "application/json;charset=utf-8";
      axios.defaults.headers.get["Access-Control-Allow-Origin"] = "*";
      axios
        .get(
          `https://cors-anywhere.herokuapp.com/http://api.deezer.com/search?q=artist:"${song.artist}" track:"${song.name}"`
        )
        .then((res) => {
          this.setState({ audio: new Audio(res.data.data[0].preview) });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }

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
