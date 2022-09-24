import React from 'react';
import Home from './components/Home';
import Navibar from './components/Navibar';
import Login from './components/Login';
import Reset from "./components/Reset";
import Register from "./components/Register";
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth"
import { auth } from "../src/Firebase"
const { REACT_APP_PRIVATE_KEY } = process.env;
const axios = require('axios')

function App() {

  const [cards, setCards] = useState({})
  const [search, setSearch] = useState("charizard")
  const [searchBar, setSearchBar] = useState("")
  const [isLoaded, setIsLoaded] = useState(false)
  const [user, loading] = useAuthState(auth)
  const navigate = useNavigate()

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

  useEffect(() => {
    if (user) {
      navigate("/")
    } else {
      navigate("/login")
    }
  }, [user, loading])

  return (
    <div className="App">
      {user ? <Navibar searchBar={searchBar} setSearchBar={setSearchBar} setSearch={setSearch} user={user}/> : <></>}
      <Routes>
        <Route path="/" element={<Home cards={cards} isLoaded={isLoaded} setIsLoaded={setIsLoaded} user={user}/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/reset" element={<Reset/>} />
        <Route path="/register" element={<Register/>} />
      </Routes>
      
    </div>
  );
}

export default App;
