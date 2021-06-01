import React, { Component } from "react";
import play from "../../images/play.png";
import add from "../../images/add.png";
import delet from "../../images/delete.png";
import axios from "axios";
import { baseUrlLabefy, configAxiosLabefy } from "../../Apis";
import styled from "styled-components";

const PageInner = styled.div`
  padding: 0.5rem 2rem;
`;

const CardsWrap = styled.div`
  padding-bottom: 1.8rem;
`;

const CardsWrapInner = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fill, minmax(164px, 1fr));
`;

const CardsWrapCard = styled.div`
  background: #282828;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  padding: 1.2rem 1.2rem 0.8rem;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

const CardsWrapCardAdd = styled.div`
  cursor: pointer;
  background: #282828;
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  padding: 1.2rem 1.2rem 0.8rem;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

const CardImage = styled.div`
  height: 160px;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

const ImageCard = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 0.4rem 0;
`;

const CardContentTitle = styled.h3`
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0;
  letter-spacing: 0.6px;
`;

const CardplayIcon = styled.span`
  width: 40px;
  height: 40px;
  overflow: hidden;
  display: flex;
  margin-left: auto;
  opacity: 0.2;
  position: absolute;
  right: 4rem;
  bottom: 0.7rem;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const PlayIconImage = styled.img`
  width: 100%;
  margin: auto;
`;

const CardIconDelete = styled.span`
  width: 54px;
  height: 54px;
  overflow: hidden;
  display: flex;
  margin-left: auto;
  opacity: 0.2;
  position: absolute;
  right: 0.4rem;
  bottom: 0.2rem;
  :hover {
    opacity: 1;
    cursor: pointer;
  }
`;

const DeleteIconImage = styled.img`
  width: 100%;
  margin: auto;
`;

export class MyPlaylists extends Component {

  deletePlaylist = (id) => {
    if (
      window.confirm("Confirma se você deseja realmente apagar esta playlist")
    ) {
      axios
        .delete(`${baseUrlLabefy}/${id}`, configAxiosLabefy)
        .then(() => {
          this.props.getAllPlaylists();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  componentDidMount() {
    this.props.getAllPlaylists();
  }

  numberSort() {
    return Math.floor(Math.random() * 100);
  }

  render() {
    return (
      <PageInner>
        <CardsWrap>
          <h2>Playlist Personalizadas</h2>
          <CardsWrapInner>
            {this.props.userPlaylist.map((playlist) => (
              <CardsWrapCard key={playlist.id}>
                <CardImage>
                  <ImageCard
                    src={`https://picsum.photos/${this.numberSort()}/151`}
                    alt="Pic 1"
                  ></ImageCard>
                </CardImage>
                <CardContent>
                  <CardContentTitle>{playlist.name}</CardContentTitle>
                </CardContent>
                <CardplayIcon
                  onClick={() => this.props.changePage("playlistDetailsUser")}
                >
                  <PlayIconImage src={play} alt="play"></PlayIconImage>
                </CardplayIcon>
                <CardIconDelete
                  onClick={() => this.deletePlaylist(playlist.id)}
                >
                  <DeleteIconImage src={delet} alt="play"></DeleteIconImage>
                </CardIconDelete>
              </CardsWrapCard>
            ))}
            <CardsWrapCardAdd>
              <CardImage>
                <ImageCard
                  src={add}
                  alt="Criar Playlist"
                ></ImageCard>
              </CardImage>
              <CardContent>
                <CardContentTitle>Criar Nova Playlist</CardContentTitle>
              </CardContent>
            </CardsWrapCardAdd>
          </CardsWrapInner>
        </CardsWrap>
      </PageInner>
    );
  }
}

export default MyPlaylists;
