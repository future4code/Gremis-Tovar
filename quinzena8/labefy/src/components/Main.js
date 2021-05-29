import React, { Component } from "react";

export class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="upperNav">Labefy - Música para a sua vida</div>
        <div className="mainContent">
          <div></div>
          <div>{this.props.renderPage()}</div>
          <div></div>
        </div>
      </div>
    );
  }
}

export default Main;
