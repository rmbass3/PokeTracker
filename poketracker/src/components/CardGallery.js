import React from "react";
import Col from 'react-bootstrap/Col'
import Tilty from 'react-tilty'
import '../styles/CardGallery.css'

const CardGallery = ({cards, handleShow}) => {

  if (cards.data.count === 0){
    return (
      <div>
        <h1 className="no-cards text-center text-light">No cards found.</h1>
        <h5 className="text-center text-light">Try advanced search.</h5>
      </div>
    )
  } else {
    return cards.data.data.map((card) => (
      <Col key={card.id}>
        <Tilty speed={500}>
          <div className="card-container mt-5 text-center">
            <img 
              src={card.images.small}
              className="card-image"
              alt={card.name}
              onClick={() => handleShow(card)}
            />
          </div>
        </Tilty>
      </Col>
    ))
  }



}

export default CardGallery