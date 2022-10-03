import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup'
import { doc, updateDoc, arrayUnion } from "firebase/firestore"
import { db } from '../Firebase'
import '../styles/CardModal.css'

const CardModal = ({show, handleClose, currCard, user}) => {

  const findPrice = () => {
    return currCard.cardmarket.prices.averageSellPrice ? currCard.cardmarket.prices.averageSellPrice : currCard.cardmarket.prices.trendPrice
  }

  const addUserCard = async (id) => {
    handleClose()
    try {
      await updateDoc(doc(db, "users", user.email), {
        collection: arrayUnion(id)
      })
    } catch (e) {
      console.error(e)
    }
    
  }

  return (
    <div>
      {currCard.id ?
          <div>
            {console.log(currCard.id)}
            <Modal
              className="card-modal" 
              show={show} 
              onHide={handleClose} 
              size="lg" 
              centered
              fullscreen="md-down"
            >
              <Modal.Header closeButton>
                <Modal.Title className="text-dark text-center"><h1>{currCard.name}</h1></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Row>
                    <Col s={12} md={6} className="card-col text-center">
                      <img 
                        className="modal-img"
                        src={currCard.images.large}
                        alt={currCard.name}>
                      </img>
                    </Col>
                    <Col s={12} md={6} className="text-col">
                      <ListGroup variant="flush">
                        <ListGroup.Item><h3>Series: <i>{currCard.set.series}</i></h3></ListGroup.Item> 
                        <ListGroup.Item><h3>Set: <i>{currCard.set.name}</i></h3></ListGroup.Item>
                        <ListGroup.Item><h3>Released: <i>{currCard.set.releaseDate}</i></h3></ListGroup.Item>
                        <ListGroup.Item><h3>Artist: <i>{currCard.artist}</i></h3></ListGroup.Item>
                        <ListGroup.Item><h3>Rarity: <i>{currCard.rarity}</i></h3></ListGroup.Item>
                        <ListGroup.Item><h3>Average Price: <i>${findPrice()}</i></h3></ListGroup.Item> 
                      </ListGroup>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={() => addUserCard(currCard.id)}>
                  Add to Collection
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
      : <></>
      }
    </div>
  )
}

export default CardModal