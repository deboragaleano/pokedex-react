import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex.css'

class Pokedex extends Component {
    render() {
        let title;
        if(this.props.isWinner) {
            title = <h2 className='Pokedex-winning'>Winning Hand</h2>
        } else {
            title = <h2 className='Pokedex-loser'>Losing Hand</h2>
        }
        return (
            <div className='Pokedex'>
                <h2 className= 'Pokedex-data'>{title}</h2>
                <h4 className= 'Pokedex-data'>Total Experience: {this.props.exp}</h4>
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