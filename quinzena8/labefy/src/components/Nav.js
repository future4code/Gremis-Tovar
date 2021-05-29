import React from "react";
import logo from "../images/labefy.png";
import home from "../images/home.png";
import search from "../images/search.png";
import library from "../images/library.png";

export default class Nav extends React.Component {
  render() {
    return (
      <div className="navBar">
        <div className="logo">
          <img src={logo} alt="logo"></img>
        </div>
        <ul>
          <li className="active" onClick={() => this.props.changePage("playlistsPage")}>
            <img src={home} alt="inicio"></img>
            Inicio
          </li>
          <li onClick={() => this.props.changePage("searchPlaylist")}>
            {" "}
            <img src={search} alt="procurar"></img>
            Procurar
          </li>

          <li onClick={() => this.props.changePage("myPlaylists")}>
            {" "}
            <img src={library} alt="biblioteca"></img>
            Suas Playlists
          </li>
        </ul>
      </div>
    );
  }
}
