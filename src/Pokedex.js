import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        return (
            <div className='Pokedex'>
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
                <h2 className= 'Pokedex-total'>Total Experience: {this.props.total}</h2>
                {this.props.winner}
            </div>
        )
    }
}

export default Pokedex; 