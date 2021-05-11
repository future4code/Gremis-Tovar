import React from "react";
import "./App.css";
import Etapa1 from "./components/Etapa1";
import Etapa2 from "./components/Etapa2";
import Etapa3 from "./components/Etapa3";
import Final from "./components/Final";

class App extends React.Component {
  state = {
    step: 1,
  };

  renderStep = () => {
    switch (this.state.step) {
      case 1:
        return <Etapa1 />;
      case 2:
        return <Etapa2 />;
      case 3:
        return <Etapa3 />;
      case 4:
        return <Final />;
      default:
        return <Final />;
    }
  };

  nextStep = () => {
    this.setState({ step: this.state.step + 1 });
  };

  render() {
    return (
      <div className="App">
        {this.renderStep()}
        <br />
        {this.state.step !== 4 && (
          <button onClick={this.nextStep}>Próxima etapa</button>
        )}
      </div>
    );
  }
}

export default App;
