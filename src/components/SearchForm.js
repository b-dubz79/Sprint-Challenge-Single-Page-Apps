// import React, { useState, useEffect } from "react";

// export default function SearchForm() {
 
//   const [searchTerm, setSearchTerm] = useState('')

//   const [searchResults, setSearchResults] = useState([]);


//   const addNewCharacter = newChar => {
//     setCharacterInfo(...characterInfo, newChar)
//   }

//   const handleChange = e => {
//     setSearchTerm(e.target.value)
//   }
//  const submitForm = e => {
//    e.preventDefault ();
//    props.addNewCharacter(searchResults);
//    setSearchResults({name: ''})

//    useEffect(() => {
//     const results = searchResults.filter(character => character.toLowerCase().includes(searchTerm.toLowerCase()))
//     setSearchResults(results);
//   }, [searchTerm]);
//  }
//   return (
//     <section className="search-form">
//      // Add a search form here
//      <form onSubmit={submitForm}>
//        <input
//        id='name'
//        type='text'
//        name='textfield'
//        placeholder='search'
//        value={searchTerm}
//        onChange={handleChange}
//        />
//      </form>
//      <div>
//         <ul>
//           {searchResults.map(character => (
//             <li key={character}>{character}</li>
//           ))}
//         </ul>
//       </div>
//     </section>
//   );
// }


//  const submitForm = e => {
//    e.preventDefault ();
//    props.addNewCharacter(searchResults);
//    setSearchResults({name: ''})
//  }
 