import React from "react";
import { getCharacter, getPlanet } from "../../services/services"

export default class CharacterDetailsPage extends React.Component {
    state = {
        character: {},
        planet: ""
    }

    componentDidMount() {
        getCharacter(this.props.url, this.saveCharacter)
    }

    componentDidUpdate(prevState) {
        if (this.state.character !== prevState.character) {
            getPlanet(this.state.character.homeworld, this.savePlanet)
        }
    }

    saveCharacter = (data) => {
        this.setState({character: data})
    }

    savePlanet = (data) => {
        this.setState({planet: data})
    }

    render() {
        return (
            <div>
                {this.state.character.name && this.state.planet ?
                    (
                        <div>
                            <p>Nome: {this.state.character.name}</p>
                            <p>Planeta Natal: {this.state.planet}</p>
                        </div>
                    ) : <p>Carregando... </p>
                }
                <button onClick={this.props.goToListPage}>Voltar para Lista</button>
            </div>
        )
    }
}