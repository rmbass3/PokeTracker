import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from "react-bootstrap/Container";
import '../styles/CardModal.css'

const CardModal = ({show, handleClose, currCard}) => {

  console.log(currCard)
  return (
    <div>
      {currCard.id ?
          <div className="card-modal">
            <Modal show={show} onHide={handleClose} size="lg" centered>
              <Modal.Header closeButton>
                <Modal.Title>{currCard.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Container>
                  <Row>
                    <Col xs={12} md={6}>
                      <img 
                        className="modal-img" 
                        src={currCard.images.large} 
                        alt={currCard.name}>
                      </img>
                    </Col>
                    <Col xs={12} md={6}>
                      <img 
                        className="modal-img" 
                        src={currCard.images.large} 
                        alt={currCard.name}>
                      </img>
                    </Col>
                  </Row>
                </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
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