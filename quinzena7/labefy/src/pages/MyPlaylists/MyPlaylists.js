import React, { Component } from "react";
import play from "../../images/play.png";
import add from "../../images/add.png";
import delet from "../../images/delete.png";
import axios from "axios";
import { baseUrlLabefy, configAxiosLabefy } from "../../constants/Apis";
import {
  PageInner,
  CardsWrap,
  CardsWrapInner,
  CardsWrapCard,
  LoginBoxUser,
  CardsWrapCardAdd,
  CardImage,
  ImageCard,
  CardContent,
  CardContentTitle,
  CardplayIcon,
  PlayIconImage,
  CardIconDelete,
  DeleteIconImage,
  LoginBoxUserInput,
  FormButton,
  CardsWrapCardName,
} from "./Styled";

export class MyPlaylists extends Component {
  state = {
    addNamePlaylist: false,
    name: "",
    inputSearchPlaylist: "",
    playlists: [],
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
        this.props.getAllPlaylists();
      })
      .catch((err) => {
        alert("Sua playlist não foi criada!!");
        console.log(err);
      });

    this.setState({
      addNamePlaylist: !this.state.addNamePlaylist,
    });
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
    let songs =
      this.state.playlists.length > 0
        ? this.state.playlists
        : this.props.userPlaylist;
    if (songs.length === undefined) {
      songs = [songs];
    }
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
                  onClick={() =>
                    this.props.changePage({
                      page: "playlistDetailsUser",
                      userPlaylist: playlist,
                    })
                  }
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
