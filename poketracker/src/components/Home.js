import React from "react";
import { useState, useEffect } from "react";

const Home = ({cards}) => {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (cards.data)
    setIsLoaded(true)
  }, [cards])

  return (
    <div id="home" className="home">
      Cards are {isLoaded ? 'set' : 'not set'}.
    </div>
  )
}

export default Home