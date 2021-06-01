import React from "react";
import logo from "../images/labefy.png";
import home from "../images/home.png";
import search from "../images/search.png";
import library from "../images/library.png";
import styled from "styled-components";

const NavBar = styled.div`
  width: 260px;
  height: 100%;
  background: #000000;
  padding: 10px 10px 0;
  display: flex;
  flex-direction: column;
`;

const NavBarLogoImg = styled.img`
  width: 80%;
`;

const NavBarUl = styled.ul`
  margin: 0;
  padding: 0;
`;

const NavBarUlLi = styled.li`
  color: #b3b3b3;
  list-style-type: none;
  border-radius: 5px;
  padding: 0.7rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  display: flex;
  align-items: center;
  :hover {
    color: white;
  }
  :active {
    background: #000000;
    color: white;
  }
`;

const NavBarUlLiImg = styled.img`
  width: 18%;
  margin: 5px;
`;

export default class Nav extends React.Component {
  render() {
    return (
      <NavBar>
          <NavBarLogoImg src={logo} alt="logo"></NavBarLogoImg>
        <NavBarUl>
          <NavBarUlLi
            className="ac
            tive"
            onClick={() => this.props.changePage("playlistsPage")}
          >
            <NavBarUlLiImg src={home} alt="inicio"></NavBarUlLiImg>
            Inicio
          </NavBarUlLi>
          <NavBarUlLi onClick={() => this.props.changePage("searchPlaylist")}>
            {" "}
            <NavBarUlLiImg src={search} alt="procurar"></NavBarUlLiImg>
            Procurar
          </NavBarUlLi>

          <NavBarUlLi onClick={() => this.props.changePage("myPlaylists")}>
            {" "}
            <NavBarUlLiImg src={library} alt="biblioteca"></NavBarUlLiImg>
            Suas Playlists
          </NavBarUlLi>
        </NavBarUl>
      </NavBar>
    );
  }
}
