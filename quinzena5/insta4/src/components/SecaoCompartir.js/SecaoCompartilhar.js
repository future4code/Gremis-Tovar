import React, { Component } from "react";
import styled from "styled-components";
import instagram from "../../img/instagram.svg";
import facebook from "../../img/fb.svg";
import twitter from "../../img/twitter.svg";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputResenha = styled.textarea`
  width: 200%;
  margin-right: 5px;
`;

export class SecaoCompartilhar extends Component {
  state = {
    valorCompartilhar: "",
  };

  onChangeCompartilhar = (e) => {
    console.log(e.target.value);
    this.setState({ valorInputCompartilhar: e.target.value });
  };

  aoCompartirInstagram = () => {
    console.log(`Post compartilhado no Instagram com a mensagem: ${this.state.valorInputCompartilhar}`);
  };
  aoCompartirFacebook = () => {
    console.log(`Post compartilhado no Facebook com a mensagem: ${this.state.valorInputCompartilhar}`);
  };
  aoCompartirTwitter = () => {
    console.log(`Post compartilhado no Twitter com a mensagem: ${this.state.valorInputCompartilhar}`);
  };


  render() {
    return (
      <CommentContainer>
        <InputResenha
          placeholder={"Resenha"}
          onChange={this.onChangeCompartilhar}
        ></InputResenha>
        <button onClick={this.aoCompartirInstagram}>
          <img src={instagram} width={"100%"} />
        </button>
        <button onClick={this.aoCompartirFacebook}>
          <img src={facebook} width={"100%"} />
        </button>
        <button onClick={this.aoCompartirTwitter}>
          <img src={twitter} width={"100%"} />
        </button>
      </CommentContainer>
    );
  }
}
