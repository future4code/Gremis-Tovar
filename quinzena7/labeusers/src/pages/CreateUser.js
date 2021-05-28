import React from "react";
import styled from "styled-components";
import axios from "axios";
import { baseUrl, configAxios } from "../api";

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
`;

const LoginBoxTitle = styled.h2`
  margin: 0 0 30px;
  padding: 0;
  color: #fff;
  text-align: center;
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

const Change = styled.div`
  display: flex;
  justify-content: center;
`;

export default class CreateUser extends React.Component {
  state = {
    name: "",
    email: "",
  };

  inputName = (event) => {
    this.setState({ name: event.target.value });
  };

  inputEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  createUser = () => {
    const body = {
      name: this.state.name,
      email: this.state.email,
    };
    axios.post(baseUrl, body, configAxios).then((res) => {
        console.log(res);
        alert("O usuário foi criado com sucesso!");
        this.setState({ name: "", email: "" });
      })
      .catch((err) => {
        alert("Seu usuário não foi criado!!");
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <LoginBox>
          <LoginBoxTitle>Criar Usuário</LoginBoxTitle>
            <LoginBoxUser>
              <LoginBoxUserInput
                type="text"
                onChange={this.inputName}
                value={this.state.name}
                placeholder="Usuário"
              />
            </LoginBoxUser>
            <LoginBoxUser>
              <LoginBoxUserInput
                type="email"
                onChange={this.inputEmail}
                value={this.state.email}
                placeholder="Email"
              />
            </LoginBoxUser>
            <FormButton onClick={this.createUser}>Criar</FormButton>
        </LoginBox>
        <Change>
          <FormButton onClick={() => this.props.changePage("userList")}>
            Lista de Usuários
          </FormButton>
        </Change>
      </div>
    );
  }
}

