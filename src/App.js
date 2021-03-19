import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';

const App = () => {

  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);
  let id = 0;
  useEffect(() => {
    axios.get('https://swapi.dev/api/people/')
    .then((response) => {
      setCharacters(response.data)
    })
    .catch(error => {
      console.log('Whoops!', error);
    })
  }, [])


  return (
    <div className="App">
      <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Star_wars2.svg/225px-Star_wars2.svg.png' 
        alt="Star Wars logo"></img>
        <h1 className="Header">Major Characters</h1>
        {characters.map((character) => (
          <Character 
          key={id++} 
          character={character}
         />
        ))}
    </div>
  );
}

export default App;
