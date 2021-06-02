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

const LoginBoxUser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
  margin-bottom: 50px;
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

const LoginBoxUserInput = styled.input`
  width: 100%;
  font-size: 16px;
  color: #fff;
  margin-top: 60px;
  border: none;
  height: fit-content;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;

const FormButton = styled.button`
  position: relative;
  padding: 5px 10px;
  color: #0c131e;
  font-size: 10px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 20px;
  :hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

const CardsWrapCardName = styled.div`
  cursor: pointer;
  background: #282828;
  position: relative;
  border-radius: 10px;
  display: inline-grid;
  overflow: hidden;
  padding: 1.2rem 1.2rem 0.8rem;
  box-shadow: 0 10px 30px 0 rgba(0, 0, 0, 0.3), 0 1px 2px 0 rgba(0, 0, 0, 0.2);
`;

export class MyPlaylists extends Component {
  state = {
    addNamePlaylist: false,
    name: "",
    inputSearchPlaylist: "",
    playlists: this.props.userPlaylist,
  };

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

  addMusic = () => {
    this.setState({
      addNamePlaylist: !this.state.addNamePlaylist,
    });
  };

  inputName = (event) => {
    this.setState({ name: event.target.value });
  };

  createPlaylist = () => {
    const body = {
      name: this.state.name,
    };
    axios
      .post(baseUrlLabefy, body, configAxiosLabefy)
      .then(() => {
        alert("A playlist foi criada com sucesso!");
        this.setState({ name: "" });
      })
      .catch((err) => {
        alert("Sua playlist não foi criada!!");
        console.log(err);
      });

    this.setState({
      addNamePlaylist: !this.state.addNamePlaylist,
    });
    this.props.getAllPlaylists();
  };

  searchNamePlaylist = (event) => {
    if (event.target.value.length === 0) {
      this.setState({ playlists: this.props.userPlaylist });
    } else {
      this.setState({
        inputSearchPlaylist: event.target.value,
      });
      this.searchPlaylist(event.target.value);
    }
  };

  searchPlaylist = (search) => {
    axios
      .get(`${baseUrlLabefy}/search?name=${search}`, configAxiosLabefy)
      .then((res) => {
        if (res.data.result.playlist.length > 0) {
          this.setState({ playlists: res.data.result.playlist });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let songs = this.state.playlists.length > 0 ? this.state.playlists : this.props.userPlaylist;
    return (
      <PageInner>
        <CardsWrap>
          <h2>Playlist Personalizadas</h2>
          <LoginBoxUser>
            <LoginBoxUserInput
              type="text"
              onChange={this.searchNamePlaylist}
              placeholder="Procurar playlist"
            />
          </LoginBoxUser>
          <CardsWrapInner>
            {songs.map((playlist) => (
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
            ))}{" "}
            {!this.state.addNamePlaylist && (
              <CardsWrapCardAdd onClick={this.addMusic}>
                <CardImage>
                  <ImageCard src={add} alt="Criar Playlist"></ImageCard>
                </CardImage>
                <CardContent>
                  <CardContentTitle>Criar Nova Playlist</CardContentTitle>
                </CardContent>
              </CardsWrapCardAdd>
            )}
            {this.state.addNamePlaylist && (
              <>
                <CardsWrapCardName>
                  <LoginBoxUserInput
                    type="text"
                    onChange={this.inputName}
                    value={this.state.name}
                    placeholder="Nome da Playlist"
                  />
                  <FormButton onClick={this.createPlaylist}>Salvar</FormButton>
                  <FormButton onClick={this.addMusic}>Cancelar</FormButton>
                </CardsWrapCardName>
              </>
            )}
          </CardsWrapInner>
        </CardsWrap>
      </PageInner>
    );
  }
}

export default MyPlaylists;
