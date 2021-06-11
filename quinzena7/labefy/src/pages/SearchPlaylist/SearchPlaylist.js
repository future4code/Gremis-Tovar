import React, { Component } from "react";
import axios from "axios";
import {
  baseUrlSpotify,
  getTokenSpotify,
  baseUrlLabefy,
  configAxiosLabefy,
} from "../../constants/Apis";
import {
  PageInner,
  CardsWrap,
  CardsWrapInner,
  LoginBoxUser,
  LoginBoxUserInput,
  SongList,
  SongListLi,
  SongIcon,
  SongDetailsTitle,
  SongDetailsSpan,
  SongDetailsToken,
  SongTime,
  SelectInput,
  FormButton,
  FormButtonToken,
} from "./Styled";

export class SearchPlaylist extends Component {
  state = {
    tracks: [],
    inputSearch: "",
    chosen: false,
    addmanual: false,
    inputNameManually: "",
    inputArtistManually: "",
    inputUrlManually: "",
    inputPlaylist: "",
    selectedMusic: [],
    idPlaylist: "",
    inputToken: "",
    token: "",
  };

  openURL = (url) => {
    window.open(url);
  };

  hitToken = (e) => {
    this.setState({ inputToken: e.target.value });
  };

  tokenRegister = () => {
    this.setState({ token: this.state.inputToken });
  };

  searchMusic = (e) => {
    this.setState({ inputSearch: e.target.value });
    this.searchTrack(e.target.value);
  };

  searchTrack = (search) => {
    axios
      .get(`${baseUrlSpotify}?q=${search}&type=track&offset=0&limit=20`, {
        headers: {
          Authorization: `Bearer ${this.state.token}`,
        },
      })
      .then((res) => {
        this.setState({ tracks: res.data.tracks.items });
      })
      .catch((err) => {
        console.log(err.response.data);
        this.setState({ tracks: [] });
      });
  };

  chosenMusic = (item) => {
    this.setState({
      chosen: !this.state.chosen,
      selectedMusic: item,
    });
  };

  addManually = () => {
    this.setState({
      addmanual: !this.state.addmanual,
    });
  };

  handleinputPlaylist = (event) => {
    this.setState({
      inputPlaylist: event.target.value,
    });
  };

  handleinputNameManually = (event) => {
    this.setState({
      inputNameManually: event.target.value,
    });
  };

  handleinputArtistManually = (event) => {
    this.setState({
      inputArtistManually: event.target.value,
    });
  };

  handleinputUrlManually = (event) => {
    this.setState({
      inputUrlManually: event.target.value,
    });
  };

  onChangeSelectPlaylist = (event) => {
    this.setState({ idPlaylist: event.target.value });
  };

  componentDidMount() {
    this.props.getAllPlaylists();
  }

  addTrackToPlaylist = () => {
    const body = {
      name: this.state.selectedMusic.name,
      artist: this.state.selectedMusic.artists[0].name,
      url: this.state.selectedMusic.external_urls.spotify,
    };
    axios
      .post(
        `${baseUrlLabefy}/${this.state.idPlaylist}/tracks`,
        body,
        configAxiosLabefy
      )
      .then((res) => {
        console.log(res);
        alert("A música foi adicionada à playlist escolhida, vai até sua plailyst a disfrutar!");
        this.setState({
          selectedMusic: [],
        });
      })
      .catch((err) => {
        alert("A musica não foi adicionada!!");
        console.log(err);
      });
  };

  addTrackToPlaylistManually = () => {
    const body = {
      name: this.state.inputNameManually,
      artist: this.state.inputArtistManually,
      url: this.state.inputUrlManually,
    };
    axios
      .post(
        `${baseUrlLabefy}/${this.state.idPlaylist}/tracks`,
        body,
        configAxiosLabefy
      )
      .then((res) => {
        console.log(res);
        alert("A música foi adicionada à playlist escolhida, vai até sua plailyst a disfrutar!");
        this.setState({
          inputNameManually: "", inputArtistManually: "", inputUrlManually: ""
        });
      })
      .catch((err) => {
        alert("A musica não foi adicionada!!");
        console.log(err);
      });
  };

  render() {
    return (
      <PageInner>
        <CardsWrap>
          <SongDetailsSpan>
            Se você quer adicionar uma música de forma manual, dá clique no
            botão abaixo.
          </SongDetailsSpan>
          <LoginBoxUser>
            <FormButtonToken onClick={this.addManually}>
              Quero adicionar música manualmente
            </FormButtonToken>
          </LoginBoxUser>
          {this.state.addmanual && (
            <div>
              {this.props.userPlaylist.length === 0 && (
                <SelectInput>
                  <option value="">
                    -Tem que criar uma Playlist Primeiro-
                  </option>
                </SelectInput>
              )}{" "}
              {this.props.userPlaylist.length !== 0 && (
                <SelectInput
                  value={this.state.idPlaylist}
                  onChange={this.onChangeSelectPlaylist}
                >
                  <option value="">-Selecione playlist-</option>
                  {this.props.userPlaylist.map((playlist) => (
                    <option value={playlist.id}>{playlist.name}</option>
                  ))}
                </SelectInput>
              )}
              <LoginBoxUserInput
                type="text"
                value={this.state.inputNameManually}
                onChange={this.handleinputNameManually}
                placeholder="Nome da música"
              />
              <LoginBoxUserInput
                type="text"
                value={this.state.inputArtistManually}
                onChange={this.handleinputArtistManually}
                placeholder="Nome do artista"
              />
              <LoginBoxUserInput
                type="text"
                value={this.state.inputUrlManually}
                onChange={this.handleinputUrlManually}
                placeholder="Cola URL da música, lembrando que tem que ter extensão .mp3, .wav, .ogg ou algúm arquivo de audio"
              />
              <FormButton onClick={this.addTrackToPlaylistManually}>
                Salvar
              </FormButton>
              <FormButton onClick={this.addManually}>Cancelar</FormButton>
            </div>
          )}
          <CardsWrapInner>
            <SongDetailsToken onClick={() => this.openURL(getTokenSpotify)}>
              Se você quer adicionar uma música do Spotify, por gentileza, antes
              de procurar a música deve solicitar primeiro o Token de Acceso
              fazendo clique nesta mensagem, e colar ele abaixo.
            </SongDetailsToken>
            <LoginBoxUserInput
              type="text"
              value={this.state.inputToken}
              onChange={this.hitToken}
              placeholder="Cole aqui seu OAuth Token"
            />
            <LoginBoxUser>
              <FormButtonToken onClick={this.tokenRegister}>
                Registrar Token
              </FormButtonToken>
            </LoginBoxUser>
            <LoginBoxUser>
              <LoginBoxUserInput
                type="text"
                onChange={this.searchMusic}
                placeholder="Procurar música"
              />
            </LoginBoxUser>
          </CardsWrapInner>

          {this.state.tracks.map((item) => (
            <SongList key={item.id} onClick={this.chosenMusic.bind(this, item)}>
              {!this.state.chosen && (
                <SongListLi>
                  <SongIcon>
                    <h1>+</h1>
                  </SongIcon>
                  <div>
                    <SongDetailsTitle>{item.name}</SongDetailsTitle>
                    <SongDetailsSpan>
                      {item.artists.map((item) => {
                        return " / " + item.name + " / ";
                      })}
                    </SongDetailsSpan>
                  </div>
                  <SongTime>
                    <span>
                      {(item.duration_ms / 63300).toFixed(2).replace(".", ":")}
                    </span>
                  </SongTime>
                </SongListLi>
              )}
            </SongList>
          ))}
        </CardsWrap>
        {this.state.chosen && (
          <div>
            {this.props.userPlaylist.length === 0 && (
              <SelectInput>
                <option value="">-Tem que criar uma Playlist Primeiro-</option>
              </SelectInput>
            )}{" "}
            {this.props.userPlaylist.length !== 0 && (
              <SelectInput
                value={this.state.idPlaylist}
                onChange={this.onChangeSelectPlaylist}
              >
                <option value="">-Selecione playlist-</option>
                {this.props.userPlaylist.map((playlist) => (
                  <option value={playlist.id}>{playlist.name}</option>
                ))}
              </SelectInput>
            )}
            <LoginBoxUserInput
              key={this.state.selectedMusic.id}
              placeholder={this.state.selectedMusic.name}
              disabled
            />
            <LoginBoxUserInput
              key={
                this.state.selectedMusic.artists
                  ? this.state.selectedMusic.artists[0].id
                  : ""
              }
              placeholder={
                this.state.selectedMusic.artists
                  ? this.state.selectedMusic.artists[0].name
                  : ""
              }
              disabled
            />
            <FormButton onClick={this.addTrackToPlaylist}>Salvar</FormButton>
            <FormButton onClick={this.chosenMusic}>Cancelar</FormButton>
          </div>
        )}
      </PageInner>
    );
  }
}

export default SearchPlaylist;
