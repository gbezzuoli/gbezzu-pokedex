import React, { Component } from 'react'
import PokemonList from './PokemonList'
import PokemonList2 from './PokemonList2'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='card-dex'>
                <PokemonList />
            </div>
        )
    }
}
