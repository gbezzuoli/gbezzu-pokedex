import React, { Component } from 'react'
import PokemonCard from './PokemonCard'
import axios from 'axios'


export default class PokemonList2 extends Component {
    state= {
        url: "https://pokeapi.co/api/v2/pokemon?limit=300&offset=151",
        pokemon: null
    }

    async componentDidMount() {
        const res = await axios.get(this.state.url)
        this.setState({pokemon: res.data['results']});
    }

    render() {
        return (
            <div>
            {this.state.pokemon ? (
            <div className='list-dex2'>
                {this.state.pokemon.map(pokemon => (
                    <PokemonCard
                    key={pokemon.name}
                    name={pokemon.name}
                    url={pokemon.url}
                    />
                ))}
            </div>) : (<h1>Loading Data</h1>)}
            </div>
        )
    }
}
