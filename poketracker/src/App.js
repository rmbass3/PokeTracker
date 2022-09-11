import React from 'react';
import Home from './components/Home';
import Navibar from './components/Navibar';
import { useEffect, useState } from 'react';
const { REACT_APP_PRIVATE_KEY } = process.env;
const axios = require('axios')


function App() {

  const [cards, setCards] = useState({})
  const [search, setSearch] = useState("charizard")
  const [searchBar, setSearchBar] = useState("")

  const searchCards = () => {
    axios.get('https://api.pokemontcg.io/v2/cards', {
      headers: {
        "x-api-key": REACT_APP_PRIVATE_KEY,
      },
      params: {
        q: "name:" + search
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
      <Navibar searchBar={searchBar} setSearchBar={setSearchBar} setSearch={setSearch}/>
      <Home cards={cards}/>
    </div>
  );
}

export default App;
