import React, { Component } from "react";

export class CreateUser extends Component {
  render() {
    return (
      <div>
        <div class="login-box">
          <div class="user-box">
            <input type="text" placeholder="Procurar"/>
          </div>
          <h2>Criar Usuário</h2>
          <form>
            <div class="user-box">
              <input type="text" placeholder="Usuário"/>
            </div>
            <div class="user-box">
              <input type="email" placeholder="Email"/>
            </div>
            <button>Criar</button>
          </form>
        </div>
        <button onClick= {() => this.props.changePage("userList")}>Lista de Usuários</button>
      </div>
    );
  }
}

export default CreateUser;
