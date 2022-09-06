import React from "react";
import CardGallery from "./CardGallery";
import Loading from './Loading'
import { useState, useEffect } from "react";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import '../styles/Home.css'


const Home = ({cards}) => {

  const [isLoaded, setIsLoaded] = useState(false)
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    cards.data ? setIsLoaded(true) : setIsLoaded(false)
  }, [cards])

  return (
    <div id="home" className="home">
      {isLoaded ? 
        <div>
          <Modal show={show} onHide={handleClose} size="lg" centered>
            <Modal.Header closeButton>
              <Modal.Title>Modal heading</Modal.Title>
            </Modal.Header>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary" onClick={handleClose}>
                Save Changes
              </Button>
            </Modal.Footer>
          </Modal>
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