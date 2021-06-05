import React from "react";
import PlaylistsPage from "./pages/PlaylistsPage/PlaylistsPage";
import SearchPlaylist from "./pages/SearchPlaylist/SearchPlaylist";
import MyPlaylists from "./pages/MyPlaylists/MyPlaylists";
import PlaylistDetails from "./pages/PlaylistDetails/PlaylistDetails";
import PlaylistDetailsUser from "./pages/PlaylistDetailsUser/PlaylistDetailsUser";
import Nav from "./components/Nav";
import Main from "./components/Main";
import MusicControls from "./components/MusicControls";
import axios from "axios";
import { baseUrlLabefy, configAxiosLabefy } from "./constants/Apis";
import GlobalStyle from "./GlobalStyles";
import styled from "styled-components";

const OuterWrap = styled.div`
  background: grey;
  height: 100vh;
  min-height: 100%;
`;

const AppContainer = styled.div`
  height: calc(100vh - 90px);
  background: #131313;
  display: flex;
`;

export default class App extends React.Component {
  state = {
    page: "playlistsPage",
    playlist: {},
    userPlaylist: [],
  };

  changePage = (data) => {
    if (typeof data === "string") {
      this.getAllPlaylists();
      this.setState({
        page: data,
      });
    } else {
      this.setState({
        page: data.page,
        playlist: data.playlist,
        userPlaylist: data.userPlaylist,
      });
    }
  };

  getAllPlaylists = () => {
    axios
      .get(baseUrlLabefy, configAxiosLabefy)
      .then((res) => {
        this.setState({ userPlaylist: res.data.result.list });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  renderPage = () => {
    switch (this.state.page) {
      case "playlistsPage":
        return <PlaylistsPage changePage={this.changePage} />;
      case "searchPlaylist":
        return (
          <SearchPlaylist
            changePage={this.changePage}
            getAllPlaylists={this.getAllPlaylists}
            userPlaylist={this.state.userPlaylist}
          />
        );
      case "myPlaylists":
        return (
          <MyPlaylists
            changePage={this.changePage}
            getAllPlaylists={this.getAllPlaylists}
            userPlaylist={this.state.userPlaylist}
          />
        );
      case "playlistDetails":
        return (
          <PlaylistDetails
            changePage={this.changePage}
            playlist={this.state.playlist}
            getAllPlaylists={this.getAllPlaylists}
          />
        );
      case "playlistDetailsUser":
        return (
          <PlaylistDetailsUser
            changePage={this.changePage}
            userPlaylist={this.state.userPlaylist}
          />
        );
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        <OuterWrap>
          <AppContainer>
            <Nav changePage={this.changePage} />
            <Main renderPage={this.renderPage} />
          </AppContainer>
          <MusicControls />
        </OuterWrap>
      </div>
    );
  }
}
