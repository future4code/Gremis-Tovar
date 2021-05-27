import React, { Component } from "react";

export class UserDetails extends Component {
  render() {
    return (
      <div>
        <div class="login-box">
          <h2>Detalhe do Usuário</h2>
          <div class="user-box">
            <p>Usuário</p>
            <button>Deletar Usuário</button>
            <button>Editar Usuário</button>
          </div>
        </div>
        <button onClick= {() => this.props.changePage("userList")}>Voltar à Lista de Usuários</button>
      </div>
    );
  }
}

export default UserDetails;
