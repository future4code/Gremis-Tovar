import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  cursor: pointer;
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;
const SearchContainer = styled.div`
  padding: 0 20px;
  margin: 20px;
  box-shadow: 0 1px 3px -1px rgba(0, 0, 0, 0.75);
`;
const SearchContainerInput = styled.input`
  color: black;
  outline: none;
  border-radius: 30px;
  height: 30px;
  border: 0;
  padding-left: 40px;
  padding-right: 20px;
  font-size: 1rem;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: "",
  };

  componentDidUpdate() {
    localStorage.setItem("tarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    if (localStorage.getItem("tarefas"))
      this.setState({
        tarefas: JSON.parse(localStorage.getItem("tarefas")),
      });
  }

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  criaTarefa = () => {
    if (this.state.inputValue) {
      const tarefa = {
        id: Date.now(),
        texto: this.state.inputValue,
        completa: false,
      };
      const novasTarefas = [...this.state.tarefas, tarefa];
      this.setState({ tarefas: novasTarefas, inputValue: "" });
    }
  };

  selectTarefa = (id) => {
    const selecionarTarefa = this.state.tarefas.map((tarefa) => {
      if (tarefa.id === id) {
        const novaTarefa = {
          ...tarefa,
          completa: true,
        };
        return novaTarefa;
      } else {
        return tarefa;
      }
    });
    this.setState({ tarefas: selecionarTarefa });
  };

  editTarefa = (id) => {};  

  deletTarefa = (id) => {
    const selecionarTarefa = this.state.tarefas.filter((tarefa) => {
      return tarefa.id !== id;
    });
    this.setState({ tarefas: selecionarTarefa });
  };

  cleanAll = () => {
    const selecionarTodo = [...this.state.tarefas].filter((tarefa) => {
      return tarefa !== tarefa;
    });
    this.setState({ tarefas: selecionarTodo });
  };

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value });
  };

  onSearchSubmit = (text) => {
    // if (!text) {
    //   const procuraTarefa = [...this.state.tarefas];
    //   this.setState({ tarefas: procuraTarefa  });
    // } else {
    //   const procuraTarefa = this.state.tarefas.filter((tarefa) => {
    //     let enteredText = text.toLowerCase().trim();
    //     let name = tarefa.texto.toLowerCase();
    //     if (!enteredText.length) {
    //       return false;
    //     }
    //     return name.includes(enteredText);
    //   });
    //   this.setState({ tarefas: procuraTarefa });
    // }
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <SearchContainer>
          <SearchContainerInput
            type="text"
            placeholder="Procurar tarefa..."
            onChange={(e) => this.onSearchSubmit(e.target.value)}
          />
        </SearchContainer>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
          <button onClick={this.cleanAll}>Limpar Tudo</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Todas</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                key={tarefa.id}
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
                onDoubleClick={() => this.deletTarefa(tarefa.id)}
              >
                {tarefa.texto}
                <button onClick={this.editTarefa}>Editar</button>
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
