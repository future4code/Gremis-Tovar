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

const LoginBoxUserName = styled.p`
  color: white;
  cursor: pointer;
`;

const ButtonUserDelete = styled.button`
  margin: 10px;
  padding: 8px;
  color: #0c131e;
  background: red;
  cursor: pointer;
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

const ButtonUserEdit = styled.button`
  margin: 10px;
  padding: 8px;
  color: #0c131e;
  background: green;
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

const Change = styled.div`
  display: flex;
  justify-content: center;
`;

export default class UserDetails extends React.Component {
  state = {
    users: {},
    edit: false,
    inputName: "",
    inputEmail: "",
  };

  componentDidMount() {
    this.getUserById(this.props.user);
  }

  // getUserById = (id) => {
  //   axios
  //     .get(`${baseUrl}/${id}`, configAxios)
  //     .then((res) => {
  //       this.setState({ users: res.data });
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  getUserById = async (id) => {
    try {
      const response = await axios.get(`${baseUrl}/${id}`, configAxios);
      this.setState({ users: response.data });
    } catch (error) {
      console.log(error);
    }
  };

  // deleteUser = (id) => {
  //   if (
  //     window.confirm("Confirma se você deseja realmente apagar este usuário")
  //   ) {
  //     axios
  //       .delete(`${baseUrl}/${id}`, configAxios)
  //       .then((res) => {
  //         this.getUsers();
  //         console.log(res);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // };

  deleteUser = async (id) => {
    if (window.confirm("Confirma se você deseja realmente apagar este usuário"))
      try {
        await axios.delete(`${baseUrl}/${id}`, configAxios);
        this.getAllUsers();
      } catch (error) {
        console.log(error);
      }
  };

  handleinputName = (event) => {
    this.setState({
      inputName: event.target.value,
    });
  };

  handleInputEmail = (event) => {
    this.setState({
      inputEmail: event.target.value,
    });
  };

  onClickToEditOrSave = () => {
    this.setState({
      edit: !this.state.edit,
    });
  };

  onClickSave = (id) => {
    const newBody = {
      name: this.state.inputName,
      email: this.state.inputEmail,
    };
    axios
      .put(`${baseUrl}/${id}`, newBody, configAxios)
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          alert("O usuário foi editado com sucesso! Volta à lista de Usuários");
        }
      })
      .catch((err) => {
        alert("Seu usuário não foi editado!!");
        console.log(err);
      });
    this.onClickToEditOrSave();
  };

  render() {
    const { id, name, email } = this.state.users;
    return (
      <div>
        <LoginBox>
          <LoginBoxTitle>Detalhe do Usuário</LoginBoxTitle>
          <LoginBoxUser key={id}>
            <LoginBoxUserName>Nome: {name}</LoginBoxUserName>
            <LoginBoxUserName>Email: {email}</LoginBoxUserName>
            {this.state.edit && (
              <div>
                <LoginBoxUserInput
                  onChange={this.handleinputName}
                  value={this.state.inputName}
                  placeholder="Novo Nome"
                />
                <LoginBoxUserInput
                  onChange={this.handleInputEmail}
                  value={this.state.inputEmail}
                  placeholder="Novo E-mail"
                />
                <FormButton onClick={() => this.onClickSave(id)}>
                  Save
                </FormButton>
              </div>
            )}
            {!this.state.edit && (
              <ButtonUserEdit onClick={this.onClickToEditOrSave}>
                Editar
              </ButtonUserEdit>
            )}
            <ButtonUserDelete onClick={() => this.deleteUser(id)}>
              Deletar
            </ButtonUserDelete>
          </LoginBoxUser>
        </LoginBox>
        <Change>
          <FormButton onClick={() => this.props.changePage("userList")}>
            Voltar à Lista de Usuários
          </FormButton>
        </Change>
      </div>
    );
  }
}
