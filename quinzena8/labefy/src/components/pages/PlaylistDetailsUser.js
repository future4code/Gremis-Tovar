import React, { Component } from "react";
import heart from "../../images/heart-white.png";
import styled from "styled-components";
import Music from "../Music";

const PlaylistPage = styled.div`
  background-color: rgb(214, 214, 214);
`;

const MainInner = styled.div`
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0.5)),
    color-stop(40%, #121212)
  );
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), #121212 40%);
  width: 100%;
  padding: 2rem;
  display: flex;
  flex-direction: column;
`;

const PlaylistPageInfo = styled.div`
  text-align: center;
  padding: 1.5rem 0;
  display: flex;
`;

const PlaylistPageImage = styled.div`
  width: 250px;
  height: 250px;
`;

const PlaylistImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  -web-box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
  box-shadow: 0 4px 60px rgba(0, 0, 0, 0.5);
`;

const PlaylistPageContent = styled.div`
  text-align: left;
  padding: 1.5rem 2rem;
`;

const PlaylistPageContentTitle = styled.h1`
  font-size: 7rem;
  margin: 0;
  line-height: 1;
`;

const PlaylistPageSongs = styled.div`
  background-image: -webkit-gradient(
    linear,
    left top,
    left bottom,
    from(rgba(0, 0, 0.5)),
    color-stop(40%, #121212)
  );
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), #121212 40%);
  height: 100%;
`;

const IconsHeart = styled.div`
  width: 62px;
  height: 62px;
  margin-left: 7%;
`;

const IconsHeartImage = styled.img`
  margin-left: -4vw;
  margin-top: 2vh;
  width: 100%;
  cursor: pointer;
`;

const SongList = styled.ul`
  padding: 0;
`;

const SongListLi = styled.li`
  list-style: none;
  width: 100%;
  padding: 2rem;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  :hover {
    background: rgba(255, 255, 255, 0.1);
  }
`;

const SongIcon = styled.div`
  padding-right: 1rem;
`;

const SongDetailsTitle = styled.h3`
  margin: 0;
  font-weight: 300;
  font-size: 1rem;
`;

const SongDetailsSpan = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const SongTime = styled.div`
  margin-left: auto;
`;

export class PlaylistDetailsUser extends Component {
  render() {
    const playlist = this.props.playlist;
    return (
      <PlaylistPage>
        <MainInner>
          <PlaylistPageInfo>
            <PlaylistPageImage>
              <PlaylistImage src={playlist.image} alt="pic"></PlaylistImage>
            </PlaylistPageImage>
            <PlaylistPageContent>
              <PlaylistPageContentTitle>
                {playlist.name}
              </PlaylistPageContentTitle>
            </PlaylistPageContent>
          </PlaylistPageInfo>

          <PlaylistPageSongs>
            <IconsHeart>
              <IconsHeartImage src={heart} alt="play"></IconsHeartImage>
            </IconsHeart>
            <SongList>
              {playlist.songs.map((song) => (
                <SongListLi>
                  <SongIcon>
                    <Music url={song.song} />
                  </SongIcon>
                  <div>
                    <SongDetailsTitle>{song.name}</SongDetailsTitle>
                    <SongDetailsSpan>{song.artist}</SongDetailsSpan>
                  </div>
                  <SongTime>
                    <span>{song.duration}</span>
                  </SongTime>
                </SongListLi>
              ))}
            </SongList>
          </PlaylistPageSongs>
        </MainInner>
      </PlaylistPage>
    );
  }
}
export default PlaylistDetailsUser;
