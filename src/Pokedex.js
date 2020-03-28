import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        return (
            <div className='Pokedex'>
                <h2 className= 'Pokedex-data'>Total Experience: {this.props.exp}</h2>
                <h2 className= 'Pokedex-data'>{this.props.isWinner ? 'This is the winning hand!' : 'This hand loses, sorry.'}</h2>
                <div className='Pokedex-cards'>
                {this.props.pokemons.map(pok => (
                    <Pokecard 
                        name={pok.name}
                        id={pok.id}
                        type={pok.type}
                        base_experience={pok.base_experience}
                    />
                ))}
                </div>
            </div>
        )
    }
}

export default Pokedex; 