import React from "react";
import CharacterListPage from "./pages/CharacterListPage/CharacterListPage";
import CharacterDetailsPage from "./pages/CharacterDetailsPage/CharacterDetailsPage";

export default class App extends React.Component {
  state = {
    currentScreen: "list",
  };

  selectPage = () => {
    switch (this.state.currentScreen) {
      case "list":
        return <CharacterListPage />;
      case "detail":
        return <CharacterDetailsPage />;
      default:
        return <CharacterListPage />;
    }
  };

  render() {
    return <div>{this.selectPage()}</div>;
  }
}
