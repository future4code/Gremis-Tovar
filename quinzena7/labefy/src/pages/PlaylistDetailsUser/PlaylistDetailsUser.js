import React, { Component } from "react";
import heart from "../../images/heart-white.png";
import heartlike from "../../images/heart.png";
import delet from "../../images/delete.png";
import Music from "../../components/Music";
import axios from "axios";
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
  DeleteIconImage,
} from "./Styled";
import { baseUrlLabefy, configAxiosLabefy } from "../../constants/Apis";

export class PlaylistDetailsUser extends Component {
  state = {
    like: false,
    tracks: [],
  };

  componentDidMount() {
    this.getPlaylistTracks();
  }

  getPlaylistTracks = () => {
    axios
      .get(
        `${baseUrlLabefy}/${this.props.userPlaylist.id}/tracks`,
        configAxiosLabefy
      )
      .then((res) => {
        this.setState({ tracks: res.data.result.tracks });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  numberSort() {
    return Math.floor(Math.random() * 100);
  }

  removeTrackFromPlaylist = (id) => {
    if (
      window.confirm("Confirma se você deseja realmente apagar esta música")
    ) {
      axios
        .delete(
          `${baseUrlLabefy}/${this.props.userPlaylist.id}/tracks/${id}`,
          configAxiosLabefy
        )
        .then(() => {
          this.getPlaylistTracks();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  like = () => {
    this.setState({ like: !this.state.like });
  };

  render() {
    const playlist = this.props.userPlaylist;
    return (
      <PlaylistPage>
        <MainInner>
          <PlaylistPageInfo>
            <PlaylistPageImage>
              <PlaylistImage
                src={`https://picsum.photos/${this.numberSort()}/151`}
                alt="Pic 1"
              ></PlaylistImage>
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
              {this.state.tracks.map((song) => (
                <SongListLi>
                  <SongIcon>
                    <Music url={song} />
                  </SongIcon>
                  <div>
                    <SongDetailsTitle>{song.name}</SongDetailsTitle>
                    <SongDetailsSpan>{song.artist}</SongDetailsSpan>
                  </div>
                  <DeleteIconImage
                    src={delet}
                    alt="play"
                    onClick={() => this.removeTrackFromPlaylist(song.id)}
                  ></DeleteIconImage>
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
