import React, { Component } from 'react'
import PokemonList from './PokemonList'

export default class Dashboard extends Component {
    render() {
        return (
            <div className='card-dex'>
                <PokemonList />
            </div>
        )
    }
}
