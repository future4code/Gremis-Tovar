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

  render() {
    return (
      <CommentContainer>
        <InputResenha
          placeholder={"Resenha"}
          onChange={this.onChangeCompartilhar}
        ></InputResenha>
        <button onClick={this.props.aoCompartirInstagram}>
          <img src={instagram} width={"100%"} />
        </button>
        <button onClick={this.props.aoCompartirFacebook}>
          <img src={facebook} width={"100%"} />
        </button>
        <button onClick={this.props.aoCompartirTwitter}>
          <img src={twitter} width={"100%"} />
        </button>
      </CommentContainer>
    );
  }
}
