import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from 'axios';
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterInfo, setCharacterInfo] = useState([]);

  const [searchQuery, setSearchQuery] = useState('');


  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then((response) => {
      setCharacterInfo(response.data.results)
      }).catch((error)=> {console.log(error)})
  }, []);

  useEffect(() => {
   
     const characters = characterInfo.filter(character => character.name.toLowerCase().includes(searchQuery.toLowerCase()));
     setCharacterInfo(characters)
}, [searchQuery]);

  const handleChange = e => {
    setSearchQuery(e.target.value)
  }

  return (
    <section className="character-list">
      <div>
          <form>
            <input
            type='text'
            onChange={handleChange}
            value={searchQuery}
            name='name'
            placeholder='search'
            autoComplete='off'
           
            />
          </form>
          <div>
            {characterInfo.map(characterInfo => {
              return (
                <div key={characterInfo.id}>
                  <h2>{characterInfo.name}</h2>
                </div>
              )
            })}
          </div>
      </div>
      <h2>{characterInfo.map(character => {return  <CharacterCard name={character.name}/>
      })}   </h2>
    </section>
  );
}

// type='text'
// name='textfield'
// placeholder='search'
// value={characterInfo}
// onChange={handleChange}
