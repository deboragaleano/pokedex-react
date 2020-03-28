import React, {Component} from 'react'; 
import './Pokecard.css'

const imgAPI = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

const padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number) 

class Pokecard extends Component {
    render() {
        const imgSrc = `${imgAPI}${padToThree(this.props.id)}.png`
        return (
            <div className='Pokecard'>
                <h1 className='Pokecard-title'>{this.props.name}</h1>
                <img src={imgSrc} alt={this.props.name}/>
                <p className='Pokecard-data'>Type: {this.props.type}</p>
                <p className='Pokecard-data'>Exp: {this.props.base_experience}</p>
            </div>
        )
    }
}


export default Pokecard; 