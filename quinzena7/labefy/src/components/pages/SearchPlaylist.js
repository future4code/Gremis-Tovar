import React, { Component } from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrlSpotify, configAxiosSpotify } from "../../Apis";

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

const LoginBoxUser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const LoginBoxUserInput = styled.input`
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  color: #fff;
  margin-bottom: 30px;
  border: none;
  border-bottom: 1px solid #fff;
  outline: none;
  background: transparent;
`;

const SongList = styled.ul`
  padding: 0;
`;

const SongListLi = styled.li`
  list-style: none;
  width: 100%;
  padding: 0.5rem;
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
  font-weight: 600;
  font-size: 1rem;
`;

const SongDetailsSpan = styled.span`
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
`;

const SongTime = styled.div`
  margin-left: auto;
`;

const SelectInput = styled.select`
  padding: 10px 10px;
  text-align: center;
  margin: 0 0 50px 0;
  width: 400px;
  border-radius: 20px;
`;

const FormButton = styled.button`
  position: relative;
  display: inline-block;
  padding: 10px 20px;
  color: #0c131e;
  font-size: 16px;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  margin-top: 40px;
  margin-left: 20px;
  letter-spacing: 4px;
  :hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
  }
`;

export class SearchPlaylist extends Component {
  state = {
    tracks: [],
    inputSearch: "",
    chosen: false,
    inputPlaylist: "",
    selectedMusic: {},
    idPlaylist: "",
  };

  searchMusic = (e) => {
    this.setState({ inputSearch: e.target.value });
    this.searchTrack(e.target.value);
  };

  searchTrack = (search) => {
    axios
      .get(
        `${baseUrlSpotify}?q=${search}&type=track&offset=0&limit=20`,
        configAxiosSpotify
      )
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

  handleinputPlaylist = (event) => {
    this.setState({
      inputPlaylist: event.target.value,
    });
  };

  onChangeSelectPlaylist = (event) => {
    this.setState({ idPlaylist: event.target.value });
  };

  componentDidMount() {
    this.props.getAllPlaylists();
  }

  render() {
    return (
      <PageInner>
        <CardsWrap>
          <CardsWrapInner>
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
              key={this.state.selectedMusic.artists[0].id}
              placeholder={this.state.selectedMusic.artists[0].name}
              disabled
            />
            <FormButton>Salvar</FormButton>
            <FormButton onClick={this.chosenMusic}>Cancelar</FormButton>
          </div>
        )}
      </PageInner>
    );
  }
}

export default SearchPlaylist;
