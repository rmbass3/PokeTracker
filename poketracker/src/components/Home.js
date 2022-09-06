import React from "react";
import CardGallery from "./CardGallery";
import Loading from './Loading'
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import '../styles/Home.css'


const Home = ({cards}) => {

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    cards.data ? setIsLoaded(true) : setIsLoaded(false)
  }, [cards])

  return (
    <div id="home" className="home">
      {isLoaded ? 
        <Container>
          <Row>
            <CardGallery cards={cards}/>
          </Row>
        </Container> 
        : <Loading/>
      }
    </div> 
  )
}

export default Home