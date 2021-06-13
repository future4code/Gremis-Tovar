import React, { Component } from "react";
import heart from "../../images/heart-white.png";
import heartlike from "../../images/heart.png";
import Music from "../../components/Music";
import {
  PlaylistPage,
  MainInner,
  PlaylistPageInfo,
  PlaylistPageImage,
  PlaylistImage,
  PlaylistPageContent,
  PlaylistPageContentTitle,
  PlaylistPageSongs,
  IconsHeart,
  IconsHeartImage,
  SongList,
  SongListLi,
  SongIcon,
  SongDetailsTitle,
  SongDetailsSpan,
} from "./Styled";

export class PlaylistDetails extends Component {
  state = {
    like: false,
  };

  componentDidMount() {
    this.props.getAllPlaylists();
  }

  like = () => {
    this.setState({ like: !this.state.like });
  };
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
              <IconsHeartImage
                src={this.state.like ? heartlike : heart}
                alt="play"
                onClick={this.like}
              ></IconsHeartImage>
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
                </SongListLi>
              ))}
            </SongList>
          </PlaylistPageSongs>
        </MainInner>
      </PlaylistPage>
    );
  }
}

export default PlaylistDetails;
