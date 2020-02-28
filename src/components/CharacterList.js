import React, { useEffect, useState } from "react";
import CharacterCard from './CharacterCard'
import axios from 'axios';
import SearchForm from './SearchForm'

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characterInfo, setCharacterInfo] = useState([]);

  const addNewCharacter = newChar => {
    setCharacterInfo(...characterInfo, newChar)
  }

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get('https://cors-anywhere.herokuapp.com/https://rickandmortyapi.com/api/character/')
    .then((response) => {
      
      setCharacterInfo(response.data.results)
      
    }).catch((error)=> {console.log(error)})
  }, []);

  return (
    <section className="character-list">
      <SearchForm/>
      <h2>{characterInfo.map(character => {return  <CharacterCard name={character.name}/>
      })}   </h2>
    </section>
  );
}
