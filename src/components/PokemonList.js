import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import axios from 'axios'


export default class PokemonList extends Component {
    state= {
        url: "https://rickandmortyapi.com/api/character/",
        character: null
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url)
        this.setState({character: res.data['results']});
    }

    render() {
        return (
            <div>
            {this.state.character ? (
            <div className='list-dex2'>
                {this.state.character.map(character => (
                    <PokemonCard
                    key={character.name}
                    name={character.name}
                    url={character.url}
                    image={character.image}
                    status={character.status}
                    id={character.id}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin.name}
                    location={character.location.name}
                    type={character.type}
                    />
                ))}
            </div>) : (<h1>Loading Data</h1>)}
            </div>
        )
    }
}
