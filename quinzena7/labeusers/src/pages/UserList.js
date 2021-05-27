import React, { Component } from "react";
import styled from "styled-components";
// import axios from "axios";
// import { baseUrl, configAxios } from "../api";

const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;
`;

const LoginBoxUser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const LoginBoxUserName = styled.p`
  color: white;
  cursor: pointer;
`;

const LoginBoxTitle = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
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
  letter-spacing: 4px;
  :hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
    cursor: pointer;
  }
`;

const ButtonUser = styled.button`
  margin: 10px;
  color: #0c131e;
  background: red;
`;

const Change = styled.div`
  display: flex;
  justify-content: center;
`;

export class UserList extends Component {
  render() {
    return (
      <div>
        <LoginBox>
          <LoginBoxTitle>Lista de Usuários</LoginBoxTitle>
          <LoginBoxUser>
            <LoginBoxUserName onClick={() => this.props.changePage("userDetails")}>Usuário</LoginBoxUserName>
            <ButtonUser>Deletar</ButtonUser>
          </LoginBoxUser>
          <LoginBoxUser>
            <LoginBoxUserName>Usuário</LoginBoxUserName>
            <ButtonUser>Deletar</ButtonUser>
          </LoginBoxUser>
        </LoginBox>
        <Change>
          <FormButton onClick={() => this.props.changePage("createUser")}>
            Voltar ao Cadastro
          </FormButton>
        </Change>
      </div>
    );
  }
}

export default UserList;
