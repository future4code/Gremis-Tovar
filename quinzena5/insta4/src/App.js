import React from "react";
import styled from "styled-components";
import Post from "./components/Post/Post";

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

const InputPost = styled.input`
  margin: 20px;
  display: flex;
  border: 1px dotted #999;
  border-radius: 0;
`;

const AdicionarPost = styled.button`
  margin: 20px;
  display: flex;
  background: #eb94d0;
  background-image: -webkit-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -moz-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -ms-linear-gradient(top, #eb94d0, #2079b0);
  background-image: -o-linear-gradient(top, #eb94d0, #2079b0);
  background-image: linear-gradient(to bottom, #eb94d0, #2079b0);
  border-radius: 28px;
  text-shadow: 3px 2px 1px #9daef5;
  box-shadow: 6px 5px 24px #666666;
  font-family: Arial;
  color: #fafafa;
  font-size: 10px;
  padding: 8px;
  text-decoration: none;
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
      postfoto: this.state.valorInputPostfoto,
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

  onChangeInputPostfoto = (event) => {
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
          <InputPost
            value={this.state.valorInputNome}
            onChange={this.onChangeInputNome}
            placeholder={"Nome do usuário"}
          />
          <InputPost
            value={this.state.valorInputFoto}
            onChange={this.onChangeInputFoto}
            placeholder={"url da imagem do usuário "}
          />
          <InputPost
            value={this.state.valorInputPostfoto}
            onChange={this.onChangeInputPostfoto}
            placeholder={"url da imagem do post"}
          />
          <AdicionarPost onClick={this.adicionaPost}>Adicionar</AdicionarPost>
        </div>
        <div>{listaDePost}</div>
      </MainContainer>
    );
  }
}

export default App;
