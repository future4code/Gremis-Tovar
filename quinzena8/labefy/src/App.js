import React from "react";
import PlaylistsPage from "./components/pages/PlaylistsPage";
import SearchPlaylist from "./components/pages/SearchPlaylist";
import MyPlaylists from "./components/pages/MyPlaylists";
import PlaylistDetails from "./components/pages/PlaylistDetails";
import PlaylistDetailsUser from "./components/pages/PlaylistDetailsUser";
import Nav from "./components/Nav";
import Main from "./components/Main";
import MusicControls from "./components/MusicControls";
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
      case "playlistDetailsUser":
        return <PlaylistDetailsUser changePage={this.changePage} />;
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
