import React, { Component } from "react";
import play from "../images/play.png";

export class PlaylistPage extends Component {

  render() {
    return (
      <div className="pageInner">
          <div className="cardsWrap">
            <h2>Tendência agora</h2>
            <div className="cardsWrapInner">
              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/151" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>


              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/152" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>


              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/153" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>


              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/154" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>

              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/155" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>

              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/156" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>
            </div>
          </div>



          <div className="cardsWrap">
            <h2>Playlist para ficar em casa</h2>
            <div className="cardsWrapInner">
            <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/151" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>


              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/152" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>


              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/153" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>


              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/154" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>

              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/155" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>

              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/156" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>
            </div>
          </div>



          <div className="cardsWrap">
            <h2>Bom dia!!</h2>
            <div className="cardsWrapInner">
            <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/151" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>


              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/152" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>


              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/153" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>


              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/154" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>

              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/155" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>

              <div className="card">
                <div className="cardImage">
                  <img src="https://picsum.photos/200/156" alt="Pic 1"></img>
                </div>
                <div className="cardContent">
                  <h3>un nombre</h3>
                  <span>descripcion</span>
                </div>
                <span
                  className="playIcon"
                  onClick={() => this.props.changePage("playlistDetails")}
                >
                  <img src={play} alt="play"></img>
                </span>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default PlaylistPage;
