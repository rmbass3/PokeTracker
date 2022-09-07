import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import ListGroup from 'react-bootstrap/ListGroup'
import '../styles/CardModal.css'

const CardModal = ({show, handleClose, currCard}) => {

  console.log(currCard)
  return (
    <div>
      {currCard.id ?
          <div>
            <Modal 
              className="card-modal" 
              show={show} 
              onHide={handleClose} 
              size="lg" 
              centered
              fullscreen="md-down"
            >
              <Modal.Header closeButton>
                <Modal.Title className="text-dark text-center">{currCard.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Row>
                    <Col s={12} md={6} className="text-center">
                      <img 
                        className="modal-img" 
                        src={currCard.images.large}
                        alt={currCard.name}>
                      </img>
                    </Col>
                    <Col s={12} md={6}>
                      <ListGroup>
                        <ListGroup.Item variant="dark">Series: {currCard.set.series}</ListGroup.Item> 
                        <ListGroup.Item variant="dark">Set: {currCard.set.name}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Released: {currCard.set.releaseDate}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Artist: {currCard.artist}</ListGroup.Item>
                        <ListGroup.Item variant="dark">Rarity: {currCard.rarity}</ListGroup.Item> 
                      </ListGroup>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
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