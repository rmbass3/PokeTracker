import React from "react";
import CardGallery from "./CardGallery";
import Loading from './Loading'
import { useState, useEffect } from "react";
import '../styles/Home.css'


const Home = ({cards}) => {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (cards.data)
    setIsLoaded(true)
  }, [cards])

  return (
    <div id="home" className="home">
      {isLoaded ? <CardGallery cards={cards}/> : <Loading/>}
    </div> 
  )
}

export default Home