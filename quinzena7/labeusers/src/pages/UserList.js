import React, { Component } from "react";
// import axios from "axios";
// import { baseUrl, configAxios } from "../api";

export class UserList extends Component {
  render() {
    return (
      <div>
        <div class="login-box">
          <h2>Lista de Usuários</h2>
          <div class="user-box">
            <p onClick= {() => this.props.changePage("userDetails")}>Usuário</p>
            <button>Deletar Usuário</button>
          </div>
          <div class="user-box">
            <p>Usuário</p>
            <button>Deletar Usuário</button>
          </div>
        </div>
        <button onClick= {() => this.props.changePage("createUser")}>Voltar ao Cadastro</button>
      </div>
    );
  }
}

export default UserList;
