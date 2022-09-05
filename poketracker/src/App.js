import React from 'react';
import Home from './components/Home';
import './App.css';
const { REACT_APP_PRIVATE_KEY } = process.env;

//console.log(REACT_APP_PRIVATE_KEY)

const axios = require('axios')

axios.get('https://api.pokemontcg.io/v2/cards/base1-4', {
    headers: {
      "x-api-key": REACT_APP_PRIVATE_KEY,
    }
  })
  .then(res => console.log(res))
  .catch(err => console.log(err))


function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
