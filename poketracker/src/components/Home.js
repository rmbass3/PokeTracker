import React from "react";
import CardGallery from "./CardGallery";
import Loading from './Loading'
import CardModal from './CardModal'
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import '../styles/Home.css'


const Home = ({cards, isLoaded, setIsLoaded, user}) => {

  const [show, setShow] = useState(false)
  const [currCard, setCurrCard] = useState({})

  const handleClose = () => setShow(false)
  const handleShow = (card) => {
    setCurrCard(card)
    setShow(true)
  }

  useEffect(() => {
    cards.data ? setIsLoaded(true) : setIsLoaded(false)
  }, [cards])

  return (
    <div id="home" className="home">
      {isLoaded ? 
        <div>
          <CardModal show={show} handleClose={handleClose} currCard={currCard}/>
          <Container>
            <Row>
              <CardGallery cards={cards} handleShow={handleShow}/>
            </Row>
          </Container>
        </div>
        : <Loading/>
      }
    </div> 
  )
}

export default Home