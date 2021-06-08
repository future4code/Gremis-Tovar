import React from "react";
import { getCharacterList } from "../../services/services"
import { CharacterCard } from "./styled";

export default class CharacterListPage extends React.Component {
    state = {
        charactersList: []
    }

    componentDidMount() {
        getCharacterList(this.saveCharacter)
    }

    saveCharacter = (data) => {
        this.setState({ charactersList: data })
    }

    render() {
        const characters = this.state.charactersList.map((person) => {
            return (
                <CharacterCard
                    key={person.url}
                    onClick={() => this.props.goToDetailPage(person.url)}
                >
                    {person.name}
                </CharacterCard>
            )
        })

        return <div>{characters}</div>
    }
}