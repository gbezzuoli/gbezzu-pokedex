import React, { Component } from 'react'
import spinner from '../components/imgs/spin.gif'

export default class PokemonCard extends Component {
state={
    name: "",
    image:"",
    pokemonIndex: "",
    imageLoading: true,
    toManyRequests: false
};
componentDidMount(){
    const { name, url} = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`

    this.setState(
        {name, imageUrl, pokemonIndex}
    );
    }

    render() {


        return (
            <div className='cards'>
                <div className='title-dex'>
                <h5>ID: {this.state.pokemonIndex}</h5>
                <p>Name: {this.state.name}</p>
                </div>
                {this.state.imageLoading ? (
                    <img src={spinner}></img>
                ) : null}
                <img 
                className='img-poke'
                onLoad={() => this.setState({imageLoading: false})}
                onError={() => this.setState({ toManyRequests: true})}
                src={this.state.imageUrl}
                style={
                    this.state.toManyRequests
                     ? { display: 'none'}
                     : this.state.imageLoading
                     ? null
                     : { display: 'block'}
                }
                />
                {this.state.toManyRequests ? (<h6>
                    <span class='warning-dex'>Muitas requisições</span>
                </h6>) : null}
            </div>
        )
    }
}
