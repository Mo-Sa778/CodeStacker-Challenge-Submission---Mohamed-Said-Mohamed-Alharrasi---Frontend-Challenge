import React, { useState, useEffect } from 'react';
import './style.css'
import iconHP from './HP.svg';
import iconATTACK from './Attack.png';
import iconDefence from './Defence.svg'
import iconSpeed from './Speed.svg'

import bug from './bug.png';
import normal from './normal.png';
import fire from './fire.png';
import water from './water.png';
import electric from './electric.png';
import grass from './grass.png';
import ice from './ice.png';
import fighting from './fighting.png';
import poison from './poison.png';
import ground from './ground.png';
import flying from './flying.png';
import psychic from './psychic.png';
import rock from './rock.png';
import ghost from './ghost.svg';
import dragon from './dragon.png';
import dark from './dark.png';
import steel from './steel.png';
import fairy from './fairy.png';



function typeSetup(arr) {

  let imageSrc = null; 
  
switch(arr){

  case 'normal':
  imageSrc = normal;
  break;

  case 'fire':
  imageSrc = fire;
  break;

  case 'water':
  imageSrc = water;
  break;

  case 'electric':
  imageSrc = electric;
  break;

  case 'grass':
  imageSrc = grass;
  break;

  case 'ice':
  imageSrc = ice;
  break;

  case 'fighting':
  imageSrc = fighting;
  break;

  case 'poison':
  imageSrc = poison;
  break;

  case 'ground':
  imageSrc = ground;
  break;

  case 'flying':
  imageSrc = flying;
  break;

  case 'psychic':
  imageSrc = psychic;
  break;

  case 'bug':
  imageSrc = bug;
  break;

  case 'rock':
  imageSrc = rock;
  break;

  case 'ghost':
  imageSrc = ghost;
  break;

  case 'dragon':
  imageSrc = dragon;
  break;

  case 'dark':
  imageSrc = dark;
  break;

  case 'steel':
  imageSrc = steel;
  break;

  case 'fairy':
  imageSrc = fairy;
  break;

}

return imageSrc;
}




export default function PokemonList({ pokemon, abilitiesUrl }) {
  const [abilities, setAbilities] = useState([]);

  useEffect(() => {
    const fetchAbilities = async () => {
      const abilitiesData = await Promise.all(
        abilitiesUrl.map((url) => fetch(url).then((response) => response.json()))
      );
      setAbilities(abilitiesData);
    };

    fetchAbilities();
  }, [abilitiesUrl]);

  
  return (
    <div className='pokeCardsContainer'>
      
      {pokemon.map((poke, index) => (

        <div className='pokemonCard' key={index}>
            <p className='indexContainer'>#{(abilities[index]?.id)}</p>
            <h1 style={{fontSize: '150%', fontFamily: 'Bebas Neue, sans-serif', color: '#642e28'}}><strong>{poke}</strong></h1>
            <img src={abilities[index]?.sprites?.front_default} alt={poke} style={{ width: '70px', height: '70px' }}/>

<div className='typeAndAbilities row'>

<div className='types col-md-3'>
            <ul style={{ fontSize: '100%' }}>
            {abilities[index]?.types.map((type, i) => (
              <li key={i}>
                <img src={typeSetup(type.type.name)} alt={type.type.name} height={'25px'} width={'25px'} />
                <p>{type.type.name}</p>
              </li>
            ))}
          </ul>
          </div>

          <div className='abilities col-md-9'>
            <ul style={{fontSize: '100%'}}>
              <div className='row'>
                <div className='col'>
                <li><img src={iconHP} height={'25px'} width={'25px'}/><p>HP: {abilities[index]?.stats[0]?.base_stat}</p></li>
                </div>
                <div className='col'>
                <li><img src={iconATTACK} height={'25px'} width={'25px'}/><p>ATTACK:  {abilities[index]?.stats[1]?.base_stat}</p></li>
                </div>
                </div>
                <div className='row'>
                  <div className='col'>
                <li><img src={iconDefence} height={'25px'} width={'25px'}/><p>DEFENCE:  {abilities[index]?.stats[2]?.base_stat}</p></li>
                </div>
                <div className='col'>
                <li><img src={iconSpeed} height={'25px'} width={'25px'}/> <p>SPEED:  {abilities[index]?.stats[3]?.base_stat}</p></li>
                </div>
                </div>
            </ul>
              </div>

            </div>
        </div>
      ))}
    </div>
  );
}
