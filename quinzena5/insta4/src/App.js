import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

class App extends React.Component {
  state = {
    posts: [
      {
        nome: "Paula",
        foto: "https://picsum.photos/50/50",
        postfoto: "https://picsum.photos/200/150",
      },
      {
        nome: "Bruno",
        foto: "https://picsum.photos/50/51",
        postfoto: "https://picsum.photos/200/151",
      },
      {
        nome: "Maju",
        foto: "https://picsum.photos/50/52",
        postfoto: "https://picsum.photos/200/152",
      },
    ],
    valorInputNome: "",
    valorInputFoto: "",
    valorInputPostfoto: "",
  };

  adicionaPost = () => {
    const novoPost = {
      nome: this.state.valorInputNome,
      foto: this.state.valorInputFoto,
      postfoto: this.state.valorInputPostfoto
    };

    const novosPosts = [...this.state.posts, novoPost];
    this.setState({ posts: novosPosts });
  };

  onChangeInputNome = (event) => {
    this.setState({ valorInputNome: event.target.value });
  };

  onChangeInputFoto = (event) => {
    this.setState({ valorInputFoto: event.target.value });
  };

  onChangeInputPostfoto= (event) => {
    this.setState({ valorInputPostfoto: event.target.value });
  };

  render() {
    const novoPost = [...this.state.posts.reverse()];
    const listaDePost = novoPost.map((post) => {
      return (
            
        <Post
          nomeUsuario={post.nome}
          fotoUsuario={post.foto}
          fotoPost={post.postfoto}
        />
      );
    });

    return (
      <MainContainer>
        <div>
        <input
          value={this.state.valorInputNome}
          onChange={this.onChangeInputNome}
          placeholder={"Nome do usuário"}
        />
        <input
          value={this.state.valorInputFoto}
          onChange={this.onChangeInputFoto}
          placeholder={"url da imagem do usuário "}
        />
        <input
          value={this.state.valorInputPostfoto}
          onChange={this.onChangeInputPostfoto}
          placeholder={"url da imagem do post"}
        />
        <button onClick={this.adicionaPost}>Adicionar</button>
        </div>
        <div>{listaDePost}</div>
      </MainContainer>
    );
  }
}

export default App;
