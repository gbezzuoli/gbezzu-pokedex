import React, { Component } from 'react'
import spinner from '../components/imgs/spin.gif'

export default class PokemonCard extends Component {
state={
    name: "",
    image:"",
    id: 0,
    status: "",
    species: "",
    imageLoading: true,
    toManyRequests: false
};
componentDidMount(){
    const { name, id, status, image, species, gender, origin, location, type} = this.props;

    this.setState(
        {name, image, id, status, species, gender, origin, location, type}
    );
    }

    render() {
        const wiki = `https://bulbapedia.bulbagarden.net/wiki/${this.state.name}_(Pok%C3%A9mon)`

        return (
            <div className='cards'>
                <div className='title-dex'>
                <ul className='info'>
                    <li>{this.state.id}</li>
                    <li>Status: {this.state.status}</li>
                    <li>Species: {this.state.species}</li>
                    <li>Gender: {this.state.gender}</li>
                    <li>Origin: {this.state.origin}</li>
                    <li>Location:{this.state.location}</li>
                    <li>{this.state.type}</li>
                </ul>
                <a href={ wiki } className='wikia'>{this.state.name}</a>
                </div>
                {this.state.imageLoading ? (
                    <img src={spinner} className='spinner'></img>
                ) : null}
                <img 
                className='img-poke'
                onLoad={() => this.setState({imageLoading: false})}
                onError={() => this.setState({ toManyRequests: true})}
                src={this.state.image}
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
