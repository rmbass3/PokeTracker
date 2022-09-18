import React from 'react';
import Home from './components/Home';
import Navibar from './components/Navibar';
import Login from './components/Login';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"
import { app } from "../src/Firebase"
const { REACT_APP_PRIVATE_KEY } = process.env;
const axios = require('axios')
const auth = getAuth(app)

function App() {

  const [cards, setCards] = useState({})
  const [search, setSearch] = useState("charizard")
  const [searchBar, setSearchBar] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [user] = useAuthState(auth)

  const searchCards = () => {
    setIsLoaded(false)
    axios.get('https://api.pokemontcg.io/v2/cards', {
      headers: {
        "x-api-key": REACT_APP_PRIVATE_KEY,
      },
      params: {
        q: "name:" + search
      }
    })
    .then(res => {
      setIsLoaded(true)
      setCards(res)
    })
    .catch(err => console.log(err))
  }

  useEffect(() => {
    searchCards()
  }, [search])

  return (
    <div className="App">
      <Navibar searchBar={searchBar} setSearchBar={setSearchBar} setSearch={setSearch} user={user}/>
      <Routes>
        <Route path="/" element={<Home cards={cards} isLoaded={isLoaded} setIsLoaded={setIsLoaded} user={user}/>} />
        <Route path="/login" element={<Login/>} />
      </Routes>
      
    </div>
  );
}

export default App;
