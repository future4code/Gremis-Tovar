import React from "react";
import PlaylistsPage from "./components/PlaylistsPage";
import SearchPlaylist from "./components/SearchPlaylist";
import MyPlaylists from "./components/MyPlaylists";
import PlaylistDetails from "./components/PlaylistDetails";
import Nav from "./components/Nav";
import Main from "./components/Main";
import next from "../src/images/control-music/next.svg";
// import pause from "../src/images/control-music/pause.svg";
import play from "../src/images/control-music/play.svg";
import prev from "../src/images/control-music/prev.svg";
import GlobalStyle from "./GlobalStyles";

import "./index.css";

export default class App extends React.Component {
  state = {
    page: "playlistsPage",
  };

  changePage = (page) => {
    this.setState({
      page: page,
    });
  };

  renderPage = () => {
    switch (this.state.page) {
      case "playlistsPage":
        return <PlaylistsPage changePage={this.changePage} />;
      case "searchPlaylist":
        return <SearchPlaylist changePage={this.changePage} />;
      case "myPlaylists":
        return <MyPlaylists changePage={this.changePage} />;
      case "playlistDetails":
        return <PlaylistDetails changePage={this.changePage} />;
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <div className="outerWrap">
          <div className="App">
            <Nav changePage={this.changePage} />
            <Main renderPage={this.renderPage} />
          </div>
          <div className="musicControls">
            <div className="button-control">
              <img src={prev} alt="voltar"></img>
            </div>
            <div className="button-control">
              <img src={play} alt="play"></img>
            </div>
            {/* <div className="button-control">
              <img src={pause} alt="pause"></img>
            </div> */}
            <div className="button-control">
              <img src={next} alt="avançar"></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
