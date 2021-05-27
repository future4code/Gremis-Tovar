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

const LoginBoxUser = styled.div`
  position: relative;
  display: flex;
  justify-content: space-around;
`;

const LoginBoxUserName = styled.p`
  color: black;
  background-color: beige;
  cursor: pointer;
  padding: 10px;
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
  cursor: pointer;
  color: #0c131e;
  background: red;
`;

const Change = styled.div`
  display: flex;
  justify-content: center;
`;

export default class UserList extends React.Component {
  state = {
    users: [],
    inputSearch: "",
    userList: [],
  };

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get(baseUrl, configAxios)
      .then((res) => {
        this.setState({ users: res.data, userList: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  deleteUser = (id) => {
    if (
      window.confirm("Confirma se você deseja realmente apagar este usuário")
    ) {
      axios
        .delete(`${baseUrl}/${id}`, configAxios)
        .then(() => {
          this.getAllUsers();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  changeUser = (id) => {
    this.props.changeUser(id);
    this.props.changePage("userDetails");
  };

  searchUser = (event) => {
    if (event.target.value.length === 0) {
      this.setState({ users: this.state.userList });
    }
    this.setState({
      inputSearch: event.target.value,
    });
    this.usersFiltered(event.target.value);
  };

  usersFiltered = (name) => {
    axios
      .get(`${baseUrl}/search?name=${name}&email=`, configAxios)
      .then((res) => {
        if (res.data.length > 0) {
          this.setState({ users: res.data });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    const mapUsers = this.state.users.map((user) => {
      return (
        <div>
          <LoginBoxUser key={user.id}>
            <LoginBoxUserName onClick={() => this.changeUser(user.id)}>
              {user.name}
            </LoginBoxUserName>
            <ButtonUser onClick={() => this.deleteUser(user.id)}>
              Deletar
            </ButtonUser>
          </LoginBoxUser>
        </div>
      );
    });
    return (
      <div>
        <LoginBox>
          <LoginBoxUser>
            <LoginBoxUserInput
              type="text"
              onChange={this.searchUser}
              value={this.state.inputSearch}
              placeholder="Procurar usuário"
            />
          </LoginBoxUser>
          <LoginBoxTitle>Lista de Usuários</LoginBoxTitle>
          {mapUsers}
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
