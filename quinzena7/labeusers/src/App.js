import React from "react";
import CreateUser from "./pages/CreateUser";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import GlobalStyle from "./GlobalStyle";

export default class App extends React.Component {
  state = {
    page: "createUser",
    user: ''
  };

  changePage = (page) => {
    this.setState({
      page: page,
    });
  };

  changeUser = (userId) => {
    this.setState({
      user: userId,
    });
  };

  renderPage = () => {
    switch (this.state.page) {
      case "createUser":
        return <CreateUser changePage={this.changePage} />;
      case "userList":
        return <UserList changePage={this.changePage} changeUser={this.changeUser}/>;
      case "userDetails":
        return <UserDetails changePage={this.changePage} user={this.state.user}/>;
      default:
        return <div></div>;
    }
  };

  render() {
    return (
      <div>
        <GlobalStyle />
        {this.renderPage()}
      </div>
    );
  }
}
