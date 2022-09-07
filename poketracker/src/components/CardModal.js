import React from "react";
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

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
                <img src={currCard.images.large} alt={currCard.name}></img>
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