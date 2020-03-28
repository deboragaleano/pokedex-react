import React, { Component } from 'react'; 
import Pokedex from './Pokedex'; 
import './Pokegame.css'

class Pokegame extends Component {
    static defaultProps = {
        pokemons:  [
            {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
            {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
            {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
            {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
            {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
            {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
            {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
            {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}
          ]     
    }
    render(){
        let hand1 = []; 
        let hand2 = [...this.props.pokemons];
        while(hand1.length < hand2.length) {
            let randIndex = Math.floor(Math.random() * hand2.length);
            let randomPokemon = hand2.splice(randIndex, 1)[0];
            hand1.push(randomPokemon); 
        }
       
        let calculate = (array => {
            let total = []; 
            array.map(exp => {
                total.push(exp.base_experience)
            })
            return total.reduce((a, b) => a + b) 
        })

        let isWinner = ((arr1, arr2) => {
            let msg; 
            calculate(arr1) > calculate(arr2) 
            ? msg = <h2 className='Pokegame-msg'>THIS HAND WINS!!</h2>
            : msg = <h2 className='Pokegame-msg'>THIS HAND LOSES!</h2>
            return msg; 
        })
    
        
        return(
            <div className='Winning'>
                <Pokedex pokemons = {hand1} 
                        total = {calculate(hand1)}
                        winner = {isWinner(hand1, hand2)}
                /> 
                <Pokedex pokemons = {hand2} 
                        total = {calculate(hand2)}
                        winner = {isWinner(hand2, hand1)}/>
            </div>
        )
    }
}

export default Pokegame;  
