import React from "react";
import CreateUser from "./pages/CreateUser";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";
import "./index.css";

export default class App extends React.Component {
  state = {
    page: "createUser",
  };

  changePage = (page) => {
    this.setState({
      page: page,
    });
  };

  renderPage = () => {
    switch (this.state.page) {
      case "createUser":
        return <CreateUser changePage={this.changePage} />;
      case "userList":
        return <UserList changePage={this.changePage} />;
      case "userDetails":
        return <UserDetails changePage={this.changePage} />;
      default:
        return <div></div>;
    }
  };

  render() {
    return <div>{this.renderPage()}</div>;
  }
}
