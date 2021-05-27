import React, { Component } from "react";
import styled from "styled-components";

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
  color: #0C131E;
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
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4, 0 0 100px #03e9f4;
    cursor: pointer;
  }
`;

const Change = styled.div`
  display: flex;
  justify-content: center;
`;
export class CreateUser extends Component {
  render() {
    return (
      <div>
        <LoginBox>
          <LoginBoxUser>
            <LoginBoxUserInput type="text" placeholder="Procurar usuário" />
          </LoginBoxUser>
          <LoginBoxTitle>Criar Usuário</LoginBoxTitle>
          <form>
            <LoginBoxUser>
              <LoginBoxUserInput type="text" placeholder="Usuário" />
            </LoginBoxUser>
            <LoginBoxUser>
              <LoginBoxUserInput type="email" placeholder="Email" />
            </LoginBoxUser>
            <FormButton>Criar</FormButton>
          </form>
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

export default CreateUser;
