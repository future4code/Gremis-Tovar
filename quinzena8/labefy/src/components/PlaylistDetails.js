import React, { Component } from "react";
import play from "../images/play.png";
import heart from "../images/heart-white.png";
import music from "../images/music.png";

export class PlaylistDetails extends Component {
  render() {
    return (
      <div className="playlistPage">
        <div className="mainInner">
          <div className="playlistPageInfo">
            <div className="playlistPageImage">
              <img src="https://picsum.photos/200/150" alt="pic"></img>
            </div>
            <div className="playlistPageContent">
              <p className="smallText">PLAYLIST</p>
              <h1>A Perfect Day</h1>

              <p className="tagline">
                Minimalista, eletrônico e moderno clássico para se concentrar
              </p>
              <div className="playlistPageDesc">
                <p className="labefy">Labefy</p>
                <span>699,428 likes</span>
                <span>4 horas 35 min</span>
              </div>
            </div>
          </div>
          <div className="playlistPageSongs">
            <div className="playlistButtons">
              <span className="playIcon">
                <img src={play} alt="play"></img>
              </span>{" "}
              <div className="icons icon">
                <div className="iconsHeart">
                  <img src={heart} alt="play"></img>
                </div>
              </div>
            </div>
            <ul className="songList">
              <li>
                <div className="songIcon">
                  <img src={music} alt="play"></img>
                </div>
                <div className="songDetails">
                  <h3>Hold Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>

              <li>
                <div className="songIcon">
                  <img src={music} alt="play"></img>
                </div>
                <div className="songDetails">
                  <h3>Hold Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>

              <li>
                <div className="songIcon">
                  <img src={music} alt="play"></img>
                </div>
                <div className="songDetails">
                  <h3>Hold Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>

              <li>
                <div className="songIcon">
                  <img src={music} alt="play"></img>
                </div>
                <div className="songDetails">
                  <h3>Hold Down</h3>
                  <span>Laura Marling</span>
                </div>
                <div className="songTime">
                  <span>4:07</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PlaylistDetails;
