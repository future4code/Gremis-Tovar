import React, { Component } from "react";
import styled from "styled-components";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
  display: inline-block;
`;

const InputComentario = styled.input`
  margin: 5px;
  display: flex;
  width: 115%;
  border: 1px dotted #999;
  border-radius: 0;
`;

const Comentario = styled.p`
  display: inline;
  justify-content: center;
`;

const EnviarComentario = styled.button`
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

export class SecaoComentario extends Component {
  state = {
    usuarios: [],
    valorComentario: "",
  };

  aoEnviar = () => {
    const novoComentario = this.state.valorComentario;
    const novosComentarios = [novoComentario, ...this.state.usuarios];

    this.setState({ usuarios: novosComentarios });
    this.setState({ valorComentario: "" });
  };

  onChangeComentario = (e) => {
    this.setState({ valorComentario: e.target.value });
  };

  render() {
    const listaDeComentarios = this.state.usuarios.map((comentario) => {
      return <p>{comentario}</p>;
    });
    return (
      <CommentContainer>
        <InputComentario
          placeholder={"Comentário"}
          value={this.state.valorComentario}
          onChange={this.onChangeComentario}
        />
        <EnviarComentario onClick={this.aoEnviar}>Enviar</EnviarComentario>
        <Comentario>{listaDeComentarios}</Comentario>
      </CommentContainer>
    );
  }
}
