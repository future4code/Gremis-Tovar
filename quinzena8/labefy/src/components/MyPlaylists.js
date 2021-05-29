import React, { Component } from "react";
import play from "../images/play.png";

export class MyPlaylists extends Component {
  state = {
    dataPlaylist: [
      {
        id: 101,
        name: "Nombre de la playlist",
        img: "https://picsum.photos/200/150",
        desc: "Minimalista, eletrônico e moderno clássico para se concentrar",
      },
      {
        id: 102,
        name: "Nombre 1",
        img: "https://picsum.photos/200/150",
        desc: "Minimalista, eletrônico e moderno clássico para se concentrar",
      },
      {
        id: 103,
        name: "Nombre 2",
        img: "https://picsum.photos/200/150",
        desc: "Minimalista, eletrônico e moderno clássico para se concentrar",
      },
      {
        id: 104,
        name: "Nombre 3",
        img: "https://picsum.photos/200/150",
        desc: "Minimalista, eletrônico e moderno clássico para se concentrar",
      },
      {
        id: 105,
        name: "Nombre 4",
        img: "https://picsum.photos/200/150",
        desc: "Minimalista, eletrônico e moderno clássico para se concentrar",
      },
      {
        id: 106,
        name: "Nombre 5",
        img: "https://picsum.photos/200/150",
        desc: "Minimalista, eletrônico e moderno clássico para se concentrar",
      },
    ],
  };

  render() {
    const listCategories = [...this.state.dataPlaylist];
    return (
      <div className="pageInner">
        <div className="cardsWrap">
          <h2>Minhas Playlist Personalizadas</h2>
          <div className="cardsWrapInner">
            {listCategories.map((category) => (
              <div className="card" key={category.id}>
                <div className="cardImage">
                  <img src={category.img} alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>{category.name}</h3>
                  <span>{category.desc}</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default MyPlaylists;
