import React from 'react';
import Home from './components/Home';
import './App.css';
import { useEffect, useState } from 'react';
const { REACT_APP_PRIVATE_KEY } = process.env;
const axios = require('axios')


function App() {

  const [cards, setCards] = useState({})
  const [search, setSearch] = useState("name:charizard")

  const searchCards = () => {
    axios.get('https://api.pokemontcg.io/v2/cards', {
      headers: {
        "x-api-key": REACT_APP_PRIVATE_KEY,
      },
      params: {
        q: search
      }
    })
    .then(res => setCards(res))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    searchCards()
  }, [search])

  return (
    <div className="App">
      <Home cards={cards}/>
    </div>
  );
}

export default App;
